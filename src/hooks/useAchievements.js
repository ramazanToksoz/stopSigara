/**
 * useAchievements Hook
 * Custom hook for managing user achievements
 */

import { useState, useEffect, useCallback } from 'react';
import { auth } from '../../firebaseConfig';
import {
  checkAndUnlockAchievements,
  getUserAchievements,
  markAchievementAsSeen,
  hasAchievement,
} from '../services/achievementService';

/**
 * Hook for managing user achievements
 * @returns {object} Achievements state and functions
 */
export const useUserAchievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unreadCount, setUnreadCount] = useState(0);
  
  const fetchAchievements = useCallback(async () => {
    if (!auth.currentUser) {
      setAchievements([]);
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await getUserAchievements(auth.currentUser.uid);
      
      if (result.success) {
        setAchievements(result.achievements || []);
        
        // Count unread achievements
        const unread = result.achievements.filter((a) => !a.seen).length;
        setUnreadCount(unread);
      } else {
        setError(result.error || result.message);
        setAchievements([]);
      }
    } catch (err) {
      setError(err.message);
      setAchievements([]);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  useEffect(() => {
    fetchAchievements();
  }, [fetchAchievements]);
  
  const checkAchievements = useCallback(async () => {
    if (!auth.currentUser) {
      return { success: false, error: { message: 'User not authenticated' } };
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await checkAndUnlockAchievements(auth.currentUser.uid);
      
      if (result.success && result.unlockedAchievements.length > 0) {
        // Refresh achievements list
        await fetchAchievements();
        return result;
      }
      
      return result;
    } catch (err) {
      const errorResult = { success: false, error: { message: err.message } };
      setError(err.message);
      return errorResult;
    } finally {
      setIsLoading(false);
    }
  }, [fetchAchievements]);
  
  const markAsSeen = useCallback(async (achievementId) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await markAchievementAsSeen(achievementId);
      
      if (result.success) {
        // Update local state
        setAchievements((prev) =>
          prev.map((a) => (a.id === achievementId ? { ...a, seen: true } : a))
        );
        
        setUnreadCount((prev) => Math.max(0, prev - 1));
        return result;
      } else {
        setError(result.error || result.message);
        return result;
      }
    } catch (err) {
      const errorResult = { success: false, error: { message: err.message } };
      setError(err.message);
      return errorResult;
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  return {
    achievements,
    isLoading,
    error,
    unreadCount,
    checkAchievements,
    markAsSeen,
    refetch: fetchAchievements,
  };
};

/**
 * Hook for checking if user has a specific achievement
 * @param {string} achievementType - Achievement type
 * @returns {object} Achievement status
 */
export const useHasAchievement = (achievementType) => {
  const [hasAchievementFlag, setHasAchievementFlag] = useState(false);
  const [achievement, setAchievement] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const check = useCallback(async () => {
    if (!auth.currentUser || !achievementType) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const result = await hasAchievement(auth.currentUser.uid, achievementType);
      
      if (result.success) {
        setHasAchievementFlag(result.hasAchievement);
        setAchievement(result.achievement || null);
      }
    } catch (err) {
      // Ignore errors
    } finally {
      setIsLoading(false);
    }
  }, [achievementType]);
  
  useEffect(() => {
    check();
  }, [check]);
  
  return {
    hasAchievement: hasAchievementFlag,
    achievement,
    isLoading,
    refetch: check,
  };
};

