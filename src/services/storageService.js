import * as ImagePicker from 'expo-image-picker';
import { storage, db } from '../../firebaseConfig';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

export const requestMediaLibraryPermission = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  return status === 'granted';
};

export const pickImageFromLibrary = async () => {
  try {
    console.log('pickImageFromLibrary: Requesting permission...');
    const granted = await requestMediaLibraryPermission();
    console.log('pickImageFromLibrary: Permission granted:', granted);
    
    if (!granted) {
      console.log('pickImageFromLibrary: Permission denied');
      return { cancelled: true, error: 'permission-denied' };
    }
    
    console.log('pickImageFromLibrary: Launching image picker...');
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.9,
      presentationStyle: ImagePicker.UIImagePickerPresentationStyle?.FULL_SCREEN || 'fullScreen',
      selectionLimit: 1,
    });
    
    console.log('pickImageFromLibrary: Result:', JSON.stringify(result, null, 2));
    
    if (result.canceled) {
      console.log('pickImageFromLibrary: User cancelled');
      return { cancelled: true };
    }
    
    const asset = result.assets && result.assets[0];
    console.log('pickImageFromLibrary: Selected asset:', asset);
    
    if (!asset || !asset.uri) {
      console.log('pickImageFromLibrary: No asset or URI');
      return { cancelled: true, error: 'no-asset' };
    }
    
    console.log('pickImageFromLibrary: Success, URI:', asset.uri);
    return { cancelled: false, uri: asset.uri };
  } catch (error) {
    console.error('pickImageFromLibrary: Error:', error);
    return { cancelled: true, error: error.message || 'unknown-error' };
  }
};

const uriToBlob = (uri) => {
  return new Promise((resolve, reject) => {
    try {
      console.log('uriToBlob: Converting URI to blob, URI:', uri);
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        console.log('uriToBlob: Success, blob size:', xhr.response.size);
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        console.error('uriToBlob: XHR error');
        reject(new Error('uriToBlob failed'));
      };
      xhr.onloadstart = function () {
        console.log('uriToBlob: Loading started...');
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    } catch (e) {
      console.error('uriToBlob: Exception:', e);
      reject(e);
    }
  });
};

export const uploadProfilePhoto = async (userId, localUri) => {
  try {
    console.log('uploadProfilePhoto: Starting upload, userId:', userId, 'URI:', localUri);
    if (!userId || !localUri) {
      console.log('uploadProfilePhoto: Invalid params');
      return { success: false, error: 'invalid-params' };
    }
    
    console.log('uploadProfilePhoto: Converting URI to blob...');
    const blob = await uriToBlob(localUri);
    console.log('uploadProfilePhoto: Blob created, size:', blob.size);
    
    const storagePath = `users/${userId}/profile.jpg`;
    console.log('uploadProfilePhoto: Uploading to storage path:', storagePath);
    const objectRef = ref(storage, storagePath);
    
    console.log('uploadProfilePhoto: Uploading bytes...');
    await uploadBytes(objectRef, blob);
    console.log('uploadProfilePhoto: Upload successful, getting download URL...');
    
    const downloadURL = await getDownloadURL(objectRef);
    console.log('uploadProfilePhoto: Download URL:', downloadURL);
    
    console.log('uploadProfilePhoto: Updating Firestore...');
    await setDoc(doc(db, 'users', userId), { photoURL: downloadURL, updatedAt: new Date().toISOString() }, { merge: true });
    console.log('uploadProfilePhoto: Firestore updated successfully');
    
    return { success: true, downloadURL };
  } catch (e) {
    console.error('uploadProfilePhoto error:', e);
    console.error('uploadProfilePhoto error details:', JSON.stringify(e, Object.getOwnPropertyNames(e)));
    return { success: false, error: e };
  }
};

export const deleteProfilePhoto = async (userId) => {
  try {
    if (!userId) {
      return { success: false, error: 'invalid-params' };
    }
    const objectRef = ref(storage, `users/${userId}/profile.jpg`);
    try {
      await deleteObject(objectRef);
    } catch (_) {
      // ignore if not exists
    }
    await setDoc(doc(db, 'users', userId), { photoURL: null, updatedAt: new Date().toISOString() }, { merge: true });
    return { success: true };
  } catch (e) {
    return { success: false, error: e };
  }
};

/**
 * Upload a post image to Storage and return download URL
 * Path: posts/{postId}/{fileName}
 */
export const uploadPostImage = async (postId, localUri) => {
  try {
    if (!postId || !localUri) {
      return { success: false, error: 'invalid-params' };
    }
    const blob = await uriToBlob(localUri);
    // derive filename
    const fileName = `image_${Date.now()}.jpg`;
    const storagePath = `posts/${postId}/${fileName}`;
    const objectRef = ref(storage, storagePath);
    await uploadBytes(objectRef, blob);
    const downloadURL = await getDownloadURL(objectRef);
    return { success: true, downloadURL };
  } catch (e) {
    return { success: false, error: e };
  }
};


