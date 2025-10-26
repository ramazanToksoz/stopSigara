import { useEffect, useCallback } from 'react';
import { useUser } from '../context/UserContext';
import { getUserProfile } from '../services/firestoreService';
import { auth } from '../../firebaseConfig';

/**
 * Custom hook for fetching and caching user profile data
 * Prevents multiple API calls and provides centralized state management
 */
export const useProfileData = () => {
  const { 
    profileData, 
    isProfileLoading, 
    setIsProfileLoading, 
    updateProfileData,
    updateQuitMethod
  } = useUser();

  const fetchProfile = useCallback(async () => {
    // If profile data is already cached, don't fetch again
    if (profileData) {
      return;
    }

    // If user is not authenticated, don't fetch
    if (!auth.currentUser) {
      return;
    }

    setIsProfileLoading(true);
    try {
      const result = await getUserProfile(auth.currentUser.uid);
      if (result.success) {
        updateProfileData(result.userData);
        
        // Firestore'dan gelen quit method'u context'e set et
        if (result.userData.quitMethod) {
          updateQuitMethod(result.userData.quitMethod);
          console.log('useProfileData - quitMethod updated from Firestore:', result.userData.quitMethod);
        }
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setIsProfileLoading(false);
    }
  }, [profileData, updateProfileData, setIsProfileLoading, updateQuitMethod]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return { profileData, isProfileLoading };
};

