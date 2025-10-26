import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithCredential,
  GoogleAuthProvider,
} from 'firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { auth } from '../../firebaseConfig';

/**
 * Signs up a new user with email and password.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<{success: boolean, user?: object, error?: object}>} - The result of the sign-up operation.
 */
export const signUpWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error };
  }
};

/**
 * Signs in a user with email and password.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<{success: boolean, user?: object, error?: object}>} - The result of the sign-in operation.
 */
export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error };
  }
};

/**
 * Signs out the current user.
 * @returns {Promise<{success: boolean, error?: object}>} - The result of the sign-out operation.
 */
export const signOutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
};

/**
 * Signs in a user with Google.
 * @returns {Promise<{success: boolean, user?: object, error?: object}>} - The result of the Google sign-in operation.
 */
// ... (diğer fonksiyonlar)

export const signInWithGoogle = async () => {
  try {
    // 1. Google Play Services kontrolü
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    // 2. Google ile giriş yap
    const userInfo = await GoogleSignin.signIn();
    
    console.log('Google Sign-In User Info:', userInfo);
    
    // 3. ID Token'ı kontrol et
    if (!userInfo || !userInfo.data || !userInfo.data.idToken) {
      console.error('No idToken returned from Google Sign-In. UserInfo:', userInfo);
      throw new Error('Google Sign-In failed to return an ID token.');
    }

    // 4. Firebase credential oluştur
    const googleCredential = GoogleAuthProvider.credential(userInfo.data.idToken);

    // 5. Firebase'e giriş yap
    const userCredential = await signInWithCredential(auth, googleCredential);

    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Google Sign-In Error:', error);
    return { success: false, error: error };
  }
};
