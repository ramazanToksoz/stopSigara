/**
 * Statistics Service
 * Service for calculating and retrieving user statistics and analytics
 */

import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { COLLECTIONS } from '../constants/Collections';
import { handleFirestoreError } from '../utils/errorHandler';
import { validateUserId } from './validationService';
import { calculateProgress } from './trackingService';
import { getCheckInHistory, getCheckInStats } from './checkInService';
import {
  getWeekRange,
  getMonthRange,
  getDaysAgo,
  calculateDaysBetween,
} from '../utils/dateHelpers';
import {
  calculateSavings,
  calculateHealthImprovements,
  calculateStreak,
  calculateLongestStreak,
  calculateDailyAverage,
} from '../utils/calculations';

/**
 * Get comprehensive progress statistics
 * @param {string} userId - User ID
 * @param {string} quitMethod - 'coldturkey' | 'gradual'
 * @returns {Promise<{success: boolean, stats?: object, error?: object}>}
 */
export const getProgressStats = async (userId, quitMethod) => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    // Get basic progress stats
    const progressResult = await calculateProgress(userId, quitMethod);
    
    if (!progressResult.success) {
      return progressResult;
    }
    
    // Get check-in stats
    const checkInStats = await getCheckInStats(userId, 'all');
    
    // Calculate streak
    const checkInHistory = await getCheckInHistory(userId, 100);
    const historyDates = checkInHistory.success && checkInHistory.checkIns
      ? checkInHistory.checkIns.map((ci) => ci.date).filter(Boolean)
      : [];
    
    const currentStreak = calculateStreak(historyDates, new Date().toISOString().split('T')[0]);
    const longestStreak = calculateLongestStreak(historyDates);
    
    // Get user profile for additional data
    const userRef = doc(db, COLLECTIONS.USERS, userId);
    const userDoc = await getDoc(userRef);
    const userData = userDoc.exists() ? userDoc.data() : {};
    
    const dailyCigarettes = userData.onboardingData?.dailyCigarettes || 20;
    const totalAvoided = progressResult.stats.totalAvoided || 0;
    const totalSavings = calculateSavings(totalAvoided);
    
    const stats = {
      ...progressResult.stats,
      currentStreak,
      longestStreak,
      totalSavings,
      checkInCompletionRate: checkInStats.success ? checkInStats.stats.completionRate : 0,
      totalCheckIns: checkInStats.success ? checkInStats.stats.total : 0,
    };
    
    return {
      success: true,
      stats,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get weekly statistics
 * @param {string} userId - User ID
 * @returns {Promise<{success: boolean, stats?: object, error?: object}>}
 */
export const getWeeklyStats = async (userId) => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    const weekRange = getWeekRange();
    
    // Get check-ins for this week
    const checkInResult = await getCheckInHistory(userId, 7, weekRange.start, weekRange.end);
    
    // Get cravings for this week
    const cravingsQuery = query(
      collection(db, COLLECTIONS.CRAVINGS),
      where('userId', '==', userId),
      where('date', '>=', weekRange.start),
      where('date', '<=', weekRange.end)
    );
    const cravingsSnapshot = await getDocs(cravingsQuery);
    
    const cravings = [];
    cravingsSnapshot.forEach((doc) => {
      cravings.push({ id: doc.id, ...doc.data() });
    });
    
    // Get smoking records for this week
    const smokingQuery = query(
      collection(db, COLLECTIONS.SMOKING_RECORDS),
      where('userId', '==', userId),
      where('date', '>=', weekRange.start),
      where('date', '<=', weekRange.end)
    );
    const smokingSnapshot = await getDocs(smokingQuery);
    
    const smokingRecords = [];
    let totalCigarettesSmoked = 0;
    let totalCigarettesAvoided = 0;
    
    smokingSnapshot.forEach((doc) => {
      const record = { id: doc.id, ...doc.data() };
      smokingRecords.push(record);
      
      if (record.didSmoke && record.cigarettesCount) {
        totalCigarettesSmoked += record.cigarettesCount;
      } else if (!record.didSmoke && record.cigarettesAvoided) {
        totalCigarettesAvoided += record.cigarettesAvoided;
      }
    });
    
    // Calculate averages
    const avgCravingIntensity = cravings.length > 0
      ? cravings.reduce((sum, c) => sum + (c.intensity || 0), 0) / cravings.length
      : 0;
    
    const resolvedCravings = cravings.filter((c) => c.resolved === true).length;
    
    const stats = {
      weekStart: weekRange.start,
      weekEnd: weekRange.end,
      checkInsCompleted: checkInResult.success ? checkInResult.checkIns.filter((ci) => ci.completed).length : 0,
      totalCheckIns: checkInResult.success ? checkInResult.checkIns.length : 0,
      totalCravings: cravings.length,
      resolvedCravings,
      avgCravingIntensity: Math.round(avgCravingIntensity * 100) / 100,
      totalCigarettesSmoked,
      totalCigarettesAvoided,
      netSavings: calculateSavings(totalCigarettesAvoided - totalCigarettesSmoked),
    };
    
    return {
      success: true,
      stats,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get monthly statistics
 * @param {string} userId - User ID
 * @returns {Promise<{success: boolean, stats?: object, error?: object}>}
 */
export const getMonthlyStats = async (userId) => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    const monthRange = getMonthRange();
    
    // Get check-ins for this month
    const checkInResult = await getCheckInHistory(userId, 31, monthRange.start, monthRange.end);
    
    // Get cravings for this month
    const cravingsQuery = query(
      collection(db, COLLECTIONS.CRAVINGS),
      where('userId', '==', userId),
      where('date', '>=', monthRange.start),
      where('date', '<=', monthRange.end)
    );
    const cravingsSnapshot = await getDocs(cravingsQuery);
    
    const cravings = [];
    cravingsSnapshot.forEach((doc) => {
      cravings.push({ id: doc.id, ...doc.data() });
    });
    
    // Get smoking records for this month
    const smokingQuery = query(
      collection(db, COLLECTIONS.SMOKING_RECORDS),
      where('userId', '==', userId),
      where('date', '>=', monthRange.start),
      where('date', '<=', monthRange.end)
    );
    const smokingSnapshot = await getDocs(smokingQuery);
    
    const smokingRecords = [];
    let totalCigarettesSmoked = 0;
    let totalCigarettesAvoided = 0;
    
    smokingSnapshot.forEach((doc) => {
      const record = { id: doc.id, ...doc.data() };
      smokingRecords.push(record);
      
      if (record.didSmoke && record.cigarettesCount) {
        totalCigarettesSmoked += record.cigarettesCount;
      } else if (!record.didSmoke && record.cigarettesAvoided) {
        totalCigarettesAvoided += record.cigarettesAvoided;
      }
    });
    
    // Calculate averages
    const avgCravingIntensity = cravings.length > 0
      ? cravings.reduce((sum, c) => sum + (c.intensity || 0), 0) / cravings.length
      : 0;
    
    const resolvedCravings = cravings.filter((c) => c.resolved === true).length;
    const resolutionRate = cravings.length > 0 ? (resolvedCravings / cravings.length) * 100 : 0;
    
    const stats = {
      monthStart: monthRange.start,
      monthEnd: monthRange.end,
      checkInsCompleted: checkInResult.success ? checkInResult.checkIns.filter((ci) => ci.completed).length : 0,
      totalCheckIns: checkInResult.success ? checkInResult.checkIns.length : 0,
      totalCravings: cravings.length,
      resolvedCravings,
      resolutionRate: Math.round(resolutionRate * 100) / 100,
      avgCravingIntensity: Math.round(avgCravingIntensity * 100) / 100,
      totalCigarettesSmoked,
      totalCigarettesAvoided,
      netSavings: calculateSavings(totalCigarettesAvoided - totalCigarettesSmoked),
    };
    
    return {
      success: true,
      stats,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get all-time statistics
 * @param {string} userId - User ID
 * @returns {Promise<{success: boolean, stats?: object, error?: object}>}
 */
export const getAllTimeStats = async (userId) => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    // Get user profile
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
    
    // Get comprehensive progress stats
    return await getProgressStats(userId, quitMethod);
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get health improvements based on quit date
 * @param {string} userId - User ID
 * @param {Date} quitDate - Quit date
 * @returns {Promise<{success: boolean, improvements?: object, error?: object}>}
 */
export const getHealthImprovements = async (userId, quitDate) => {
  try {
    if (!validateUserId(userId) || !quitDate) {
      return {
        success: false,
        error: { message: 'Invalid parameters' },
      };
    }
    
    const today = new Date();
    const daysSinceQuit = Math.floor((today - new Date(quitDate)) / (1000 * 60 * 60 * 24));
    
    const improvements = calculateHealthImprovements(daysSinceQuit);
    
    return {
      success: true,
      improvements,
      daysSinceQuit,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get savings breakdown
 * @param {string} userId - User ID
 * @returns {Promise<{success: boolean, savings?: object, error?: object}>}
 */
export const getSavingsBreakdown = async (userId) => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    // Get all smoking records
    const smokingQuery = query(
      collection(db, COLLECTIONS.SMOKING_RECORDS),
      where('userId', '==', userId),
      orderBy('date', 'desc')
    );
    const smokingSnapshot = await getDocs(smokingQuery);
    
    let totalAvoided = 0;
    let totalSmoked = 0;
    const dailyBreakdown = {};
    
    smokingSnapshot.forEach((doc) => {
      const record = doc.data();
      const date = record.date;
      
      if (!dailyBreakdown[date]) {
        dailyBreakdown[date] = { avoided: 0, smoked: 0 };
      }
      
      if (record.didSmoke && record.cigarettesCount) {
        totalSmoked += record.cigarettesCount;
        dailyBreakdown[date].smoked += record.cigarettesCount;
      } else if (!record.didSmoke && record.cigarettesAvoided) {
        totalAvoided += record.cigarettesAvoided;
        dailyBreakdown[date].avoided += record.cigarettesAvoided;
      }
    });
    
    const netAvoided = totalAvoided - totalSmoked;
    const totalSavings = calculateSavings(netAvoided);
    
    return {
      success: true,
      savings: {
        totalAvoided,
        totalSmoked,
        netAvoided,
        totalSavings,
        dailyBreakdown,
      },
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get craving patterns over a period
 * @param {string} userId - User ID
 * @param {string} period - 'week' | 'month' | 'all'
 * @returns {Promise<{success: boolean, patterns?: object, error?: object}>}
 */
export const getCravingPatterns = async (userId, period = 'month') => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    let startDate = null;
    
    if (period === 'week') {
      startDate = getDaysAgo(7);
    } else if (period === 'month') {
      startDate = getDaysAgo(30);
    }
    
    let cravingsQuery = query(
      collection(db, COLLECTIONS.CRAVINGS),
      where('userId', '==', userId),
      orderBy('date', 'desc')
    );
    
    if (startDate) {
      cravingsQuery = query(cravingsQuery, where('date', '>=', startDate));
    }
    
    const cravingsSnapshot = await getDocs(cravingsQuery);
    
    const cravings = [];
    const tagFrequency = {};
    const hourFrequency = {};
    
    cravingsSnapshot.forEach((doc) => {
      const craving = { id: doc.id, ...doc.data() };
      cravings.push(craving);
      
      // Count tags
      if (craving.tags && Array.isArray(craving.tags)) {
        craving.tags.forEach((tag) => {
          tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
        });
      }
      
      // Count by hour (if timestamp available)
      if (craving.timestamp) {
        const timestamp = craving.timestamp.toDate ? craving.timestamp.toDate() : new Date(craving.timestamp);
        const hour = timestamp.getHours();
        hourFrequency[hour] = (hourFrequency[hour] || 0) + 1;
      }
    });
    
    // Calculate averages
    const avgIntensity = cravings.length > 0
      ? cravings.reduce((sum, c) => sum + (c.intensity || 0), 0) / cravings.length
      : 0;
    
    const resolvedCount = cravings.filter((c) => c.resolved === true).length;
    
    return {
      success: true,
      patterns: {
        totalCravings: cravings.length,
        avgIntensity: Math.round(avgIntensity * 100) / 100,
        resolvedCount,
        resolutionRate: cravings.length > 0 ? (resolvedCount / cravings.length) * 100 : 0,
        tagFrequency,
        hourFrequency,
        cravingsByDay: cravings.reduce((acc, c) => {
          acc[c.date] = (acc[c.date] || 0) + 1;
          return acc;
        }, {}),
      },
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get mood trends over a period
 * @param {string} userId - User ID
 * @param {string} period - 'week' | 'month' | 'all'
 * @returns {Promise<{success: boolean, trends?: object, error?: object}>}
 */
export const getMoodTrends = async (userId, period = 'month') => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    let startDate = null;
    
    if (period === 'week') {
      startDate = getDaysAgo(7);
    } else if (period === 'month') {
      startDate = getDaysAgo(30);
    }
    
    let moodsQuery = query(
      collection(db, COLLECTIONS.MOODS),
      where('userId', '==', userId),
      orderBy('date', 'desc')
    );
    
    if (startDate) {
      moodsQuery = query(moodsQuery, where('date', '>=', startDate));
    }
    
    const moodsSnapshot = await getDocs(moodsQuery);
    
    const moods = [];
    const moodFrequency = {};
    
    moodsSnapshot.forEach((doc) => {
      const mood = { id: doc.id, ...doc.data() };
      moods.push(mood);
      
      // Count mood types
      const moodType = mood.moodType;
      moodFrequency[moodType] = (moodFrequency[moodType] || 0) + 1;
    });
    
    // Map mood types to scores for average calculation
    const moodScores = {
      very_sad: 1,
      sad: 2,
      neutral: 3,
      happy: 4,
      very_happy: 5,
    };
    
    const avgMoodScore = moods.length > 0
      ? moods.reduce((sum, m) => sum + (moodScores[m.moodType] || 3), 0) / moods.length
      : 3;
    
    return {
      success: true,
      trends: {
        totalMoods: moods.length,
        avgMoodScore: Math.round(avgMoodScore * 100) / 100,
        moodFrequency,
        moodsByDay: moods.reduce((acc, m) => {
          if (!acc[m.date]) {
            acc[m.date] = [];
          }
          acc[m.date].push(m.moodType);
          return acc;
        }, {}),
      },
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

