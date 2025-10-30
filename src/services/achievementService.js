/**
 * Achievement Service
 * Service for managing user achievements and milestone tracking
 */

import {
  collection,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  orderBy,
  getDocs,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { COLLECTIONS } from '../constants/Collections';
import { handleFirestoreError } from '../utils/errorHandler';
import { validateUserId } from './validationService';
import {
  getAllAchievementDefinitions,
  getAchievementDefinition,
} from '../constants/AchievementTypes';
import { calculateProgress } from './trackingService';
import { calculateStreak, calculateLongestStreak } from '../utils/calculations';
import { getToday } from '../utils/dateHelpers';

/**
 * Check and unlock achievements for a user
 * @param {string} userId - User ID
 * @returns {Promise<{success: boolean, unlockedAchievements?: Array, error?: object}>}
 */
export const checkAndUnlockAchievements = async (userId) => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    // Get user's current achievements
    const existingAchievements = await getUserAchievements(userId);
    const existingAchievementTypes = existingAchievements.success
      ? existingAchievements.achievements.map((a) => a.type)
      : [];
    
    // Get user progress stats
    const userRef = doc(db, COLLECTIONS.USERS, userId);
    const userDoc = await getDoc(userRef);
    
    if (!userDoc.exists()) {
      return {
        success: false,
        error: { message: 'User not found' },
      };
    }
    
    const userData = userDoc.data();
    const quitMethod = userData.quitMethod || 'coldturkey';
    
    // Get progress stats
    const progressResult = await calculateProgress(userId, quitMethod);
    
    if (!progressResult.success) {
      return progressResult;
    }
    
    const stats = progressResult.stats;
    
    // Calculate cravings resisted (from cravings collection where resolved = true)
    const cravingsQuery = query(
      collection(db, COLLECTIONS.CRAVINGS),
      where('userId', '==', userId),
      where('resolved', '==', true)
    );
    const cravingsSnapshot = await getDocs(cravingsQuery);
    const cravingsResisted = cravingsSnapshot.size;
    
    // Calculate community posts count
    const postsQuery = query(
      collection(db, COLLECTIONS.POSTS),
      where('userId', '==', userId)
    );
    const postsSnapshot = await getDocs(postsQuery);
    const communityPosts = postsSnapshot.size;
    
    // Calculate community interactions (likes + comments)
    const likesQuery = query(
      collection(db, COLLECTIONS.LIKES),
      where('userId', '==', userId)
    );
    const commentsQuery = query(
      collection(db, COLLECTIONS.COMMENTS),
      where('userId', '==', userId)
    );
    const [likesSnapshot, commentsSnapshot] = await Promise.all([
      getDocs(likesQuery),
      getDocs(commentsQuery),
    ]);
    const communityInteractions = likesSnapshot.size + commentsSnapshot.size;
    
    // Calculate streaks from check-ins
    const checkInsQuery = query(
      collection(db, COLLECTIONS.CHECK_INS),
      where('userId', '==', userId),
      where('completed', '==', true),
      orderBy('date', 'desc')
    );
    const checkInsSnapshot = await getDocs(checkInsQuery);
    const checkInDates = [];
    checkInsSnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.date) {
        checkInDates.push(data.date);
      }
    });
    
    // Calculate streaks
    const today = getToday();
    const currentStreak = calculateStreak(checkInDates, today);
    const longestStreak = calculateLongestStreak(checkInDates);
    
    // Combine all stats
    const allStats = {
      ...stats,
      cravingsResisted,
      communityPosts,
      communityInteractions,
      currentStreak,
      longestStreak,
    };
    
    // Get all achievement definitions
    const achievementDefinitions = getAllAchievementDefinitions();
    const unlockedAchievements = [];
    
    // Check each achievement
    for (const [achievementType, definition] of Object.entries(achievementDefinitions)) {
      // Skip if already unlocked
      if (existingAchievementTypes.includes(achievementType)) {
        continue;
      }
      
      // Check if criteria is met
      if (definition.criteria && definition.criteria(allStats)) {
        // Unlock achievement
        const achievementDoc = {
          userId,
          type: achievementType,
          unlockedAt: serverTimestamp(),
          seen: false,
        };
        
        const docRef = await addDoc(collection(db, COLLECTIONS.ACHIEVEMENTS), achievementDoc);
        
        unlockedAchievements.push({
          id: docRef.id,
          ...achievementDoc,
        });
      }
    }
    
    return {
      success: true,
      unlockedAchievements,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get user's achievements
 * @param {string} userId - User ID
 * @returns {Promise<{success: boolean, achievements?: Array, error?: object}>}
 */
export const getUserAchievements = async (userId) => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    const q = query(
      collection(db, COLLECTIONS.ACHIEVEMENTS),
      where('userId', '==', userId),
      orderBy('unlockedAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const achievements = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const definition = getAchievementDefinition(data.type);
      
      achievements.push({
        id: doc.id,
        ...data,
        definition, // Include achievement definition for display
      });
    });
    
    return {
      success: true,
      achievements,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Mark achievement as seen
 * @param {string} achievementId - Achievement document ID
 * @returns {Promise<{success: boolean, error?: object}>}
 */
export const markAchievementAsSeen = async (achievementId) => {
  try {
    if (!achievementId) {
      return {
        success: false,
        error: { message: 'Achievement ID is required' },
      };
    }
    
    await setDoc(
      doc(db, COLLECTIONS.ACHIEVEMENTS, achievementId),
      { seen: true },
      { merge: true }
    );
    
    return {
      success: true,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get achievement definitions
 * @returns {object} Achievement definitions
 */
export const getAchievementDefinitions = () => {
  return getAllAchievementDefinitions();
};

/**
 * Check if user has a specific achievement
 * @param {string} userId - User ID
 * @param {string} achievementType - Achievement type
 * @returns {Promise<{success: boolean, hasAchievement?: boolean, achievement?: object, error?: object}>}
 */
export const hasAchievement = async (userId, achievementType) => {
  try {
    if (!validateUserId(userId) || !achievementType) {
      return {
        success: false,
        error: { message: 'Invalid parameters' },
      };
    }
    
    const q = query(
      collection(db, COLLECTIONS.ACHIEVEMENTS),
      where('userId', '==', userId),
      where('type', '==', achievementType)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const achievementDoc = querySnapshot.docs[0];
      return {
        success: true,
        hasAchievement: true,
        achievement: {
          id: achievementDoc.id,
          ...achievementDoc.data(),
        },
      };
    }
    
    return {
      success: true,
      hasAchievement: false,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

