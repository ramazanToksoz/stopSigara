import { doc, setDoc, getDoc, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

/**
 * Saves user profile data to Firestore
 * @param {string} userId - The user's Firebase UID
 * @param {object} profileData - The profile data to save
 * @returns {Promise<{success: boolean, error?: object}>} - The result of the save operation
 */
export const saveUserProfile = async (userId, profileData) => {
  try {
    await setDoc(doc(db, 'users', userId), {
      ...profileData,
      updatedAt: new Date().toISOString(),
    });
    return { success: true };
  } catch (error) {
    console.error('Error saving user profile:', error);
    return { success: false, error: error };
  }
};

/**
 * Gets user profile data from Firestore
 * @param {string} userId - The user's Firebase UID
 * @returns {Promise<{success: boolean, userData?: object, error?: object}>} - The result of the get operation
 */
export const getUserProfile = async (userId) => {
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { success: true, userData: docSnap.data() };
    } else {
      return { success: false, error: 'No such document!' };
    }
  } catch (error) {
    console.error('Error getting user profile:', error);
    return { success: false, error: error };
  }
};

/**
 * Updates specific fields in user profile
 * @param {string} userId - The user's Firebase UID
 * @param {object} updateData - The fields to update
 * @returns {Promise<{success: boolean, error?: object}>} - The result of the update operation
 */
export const updateUserProfile = async (userId, updateData) => {
  try {
    await setDoc(doc(db, 'users', userId), updateData, { merge: true });
    return { success: true };
  } catch (error) {
    console.error('Error updating user profile:', error);
    return { success: false, error: error };
  }
};

