/**
 * Check-In Service
 * Service for managing daily check-ins, moods, cravings, and smoking records
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
  Timestamp,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { COLLECTIONS } from '../constants/Collections';
import { getToday, formatDateToYYYYMMDD } from '../utils/dateHelpers';
import { handleFirestoreError } from '../utils/errorHandler';
import {
  validateAndSanitizeMoodData,
  validateAndSanitizeCravingData,
  validateAndSanitizeSmokingRecordData,
  validateCheckInData,
  validateUserId,
  validateDateString,
} from './validationService';

/**
 * Create a mood entry
 * @param {string} userId - User ID
 * @param {object} moodData - Mood data { moodType, notes? }
 * @param {string} date - Optional date (YYYY-MM-DD), defaults to today
 * @returns {Promise<{success: boolean, moodId?: string, error?: object}>}
 */
export const createMoodEntry = async (userId, moodData, date = null) => {
  try {
    // Validate user ID
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    // Validate and sanitize mood data
    const validation = validateAndSanitizeMoodData(moodData);
    if (!validation.valid) {
      return {
        success: false,
        error: { message: validation.errors.join(', ') },
      };
    }
    
    const dateStr = date || getToday();
    if (!validateDateString(dateStr)) {
      return {
        success: false,
        error: { message: 'Invalid date format' },
      };
    }
    
    const moodDoc = {
      userId,
      moodType: validation.data.moodType,
      date: dateStr,
      timestamp: serverTimestamp(),
      ...(validation.data.notes && { notes: validation.data.notes }),
    };
    
    const docRef = await addDoc(collection(db, COLLECTIONS.MOODS), moodDoc);
    
    return {
      success: true,
      moodId: docRef.id,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Create a craving entry
 * @param {string} userId - User ID
 * @param {object} cravingData - Craving data { intensity, tags?, resolved?, resolutionTime? }
 * @param {string} date - Optional date (YYYY-MM-DD), defaults to today
 * @returns {Promise<{success: boolean, cravingId?: string, error?: object}>}
 */
export const createCravingEntry = async (userId, cravingData, date = null) => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    const validation = validateAndSanitizeCravingData(cravingData);
    if (!validation.valid) {
      return {
        success: false,
        error: { message: validation.errors.join(', ') },
      };
    }
    
    const dateStr = date || getToday();
    if (!validateDateString(dateStr)) {
      return {
        success: false,
        error: { message: 'Invalid date format' },
      };
    }
    
    const cravingDoc = {
      userId,
      intensity: validation.data.intensity,
      tags: validation.data.tags,
      date: dateStr,
      timestamp: serverTimestamp(),
      resolved: validation.data.resolved,
      ...(validation.data.resolutionTime !== undefined && {
        resolutionTime: validation.data.resolutionTime,
      }),
    };
    
    const docRef = await addDoc(collection(db, COLLECTIONS.CRAVINGS), cravingDoc);
    
    return {
      success: true,
      cravingId: docRef.id,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Update a craving entry's resolved status
 * @param {string} cravingId - Craving document ID
 * @param {boolean} resolved - Resolved status
 * @param {number} resolutionTime - Optional resolution time in minutes
 * @returns {Promise<{success: boolean, error?: object}>}
 */
export const updateCravingResolved = async (cravingId, resolved, resolutionTime = null) => {
  try {
    if (!cravingId) {
      return {
        success: false,
        error: { message: 'Craving ID is required' },
      };
    }
    
    const updateData = {
      resolved: Boolean(resolved),
      ...(resolutionTime !== null && { resolutionTime: Number(resolutionTime) }),
    };
    
    await setDoc(doc(db, COLLECTIONS.CRAVINGS, cravingId), updateData, { merge: true });
    
    return {
      success: true,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Create a smoking record
 * @param {string} userId - User ID
 * @param {object} smokingData - Smoking data { didSmoke, cigarettesCount?, cigarettesAvoided?, cravingId?, notes? }
 * @param {string} date - Optional date (YYYY-MM-DD), defaults to today
 * @returns {Promise<{success: boolean, recordId?: string, error?: object}>}
 */
export const createSmokingRecord = async (userId, smokingData, date = null) => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    const validation = validateAndSanitizeSmokingRecordData(smokingData);
    if (!validation.valid) {
      return {
        success: false,
        error: { message: validation.errors.join(', ') },
      };
    }
    
    const dateStr = date || getToday();
    if (!validateDateString(dateStr)) {
      return {
        success: false,
        error: { message: 'Invalid date format' },
      };
    }
    
    const recordDoc = {
      userId,
      didSmoke: validation.data.didSmoke,
      date: dateStr,
      timestamp: serverTimestamp(),
      ...(validation.data.cigarettesCount !== undefined && {
        cigarettesCount: validation.data.cigarettesCount,
      }),
      ...(validation.data.cigarettesAvoided !== undefined && {
        cigarettesAvoided: validation.data.cigarettesAvoided,
      }),
      ...(validation.data.cravingId && { cravingId: validation.data.cravingId }),
      ...(validation.data.notes && { notes: validation.data.notes }),
    };
    
    const docRef = await addDoc(collection(db, COLLECTIONS.SMOKING_RECORDS), recordDoc);
    
    return {
      success: true,
      recordId: docRef.id,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Complete a check-in for today
 * This creates or updates a check-in record that ties together mood, craving, and smoking records
 * @param {string} userId - User ID
 * @param {object} checkInData - Check-in data { moodId?, cravingId?, smokingRecordId? }
 * @param {string} date - Optional date (YYYY-MM-DD), defaults to today
 * @returns {Promise<{success: boolean, checkInId?: string, error?: object}>}
 */
export const completeCheckIn = async (userId, checkInData, date = null) => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    const validation = validateCheckInData(checkInData);
    if (!validation.valid) {
      return {
        success: false,
        error: { message: validation.errors.join(', ') },
      };
    }
    
    const dateStr = date || getToday();
    if (!validateDateString(dateStr)) {
      return {
        success: false,
        error: { message: 'Invalid date format' },
      };
    }
    
    // Check if check-in already exists for this date
    const existingCheckIn = await getTodayCheckIn(userId, dateStr);
    if (existingCheckIn.success && existingCheckIn.checkIn) {
      // Update existing check-in
      const updateData = {
        ...(checkInData.moodId && { moodId: checkInData.moodId }),
        ...(checkInData.cravingId && { cravingId: checkInData.cravingId }),
        ...(checkInData.smokingRecordId && { smokingRecordId: checkInData.smokingRecordId }),
        completed: true,
        completedAt: serverTimestamp(),
      };
      
      await setDoc(doc(db, COLLECTIONS.CHECK_INS, existingCheckIn.checkIn.id), updateData, {
        merge: true,
      });
      
      return {
        success: true,
        checkInId: existingCheckIn.checkIn.id,
      };
    }
    
    // Create new check-in
    const checkInDoc = {
      userId,
      date: dateStr,
      ...(checkInData.moodId && { moodId: checkInData.moodId }),
      ...(checkInData.cravingId && { cravingId: checkInData.cravingId }),
      ...(checkInData.smokingRecordId && { smokingRecordId: checkInData.smokingRecordId }),
      completed: true,
      completedAt: serverTimestamp(),
      rewardShown: false,
    };
    
    const docRef = await addDoc(collection(db, COLLECTIONS.CHECK_INS), checkInDoc);
    
    return {
      success: true,
      checkInId: docRef.id,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get today's check-in for a user
 * @param {string} userId - User ID
 * @param {string} date - Optional date (YYYY-MM-DD), defaults to today
 * @returns {Promise<{success: boolean, checkIn?: object, error?: object}>}
 */
export const getTodayCheckIn = async (userId, date = null) => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    const dateStr = date || getToday();
    if (!validateDateString(dateStr)) {
      return {
        success: false,
        error: { message: 'Invalid date format' },
      };
    }
    
    const q = query(
      collection(db, COLLECTIONS.CHECK_INS),
      where('userId', '==', userId),
      where('date', '==', dateStr)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return {
        success: true,
        checkIn: {
          id: doc.id,
          ...doc.data(),
        },
      };
    }
    
    return {
      success: true,
      checkIn: null,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get check-in history for a user
 * @param {string} userId - User ID
 * @param {number} limit - Optional limit (default: 30)
 * @param {string} startDate - Optional start date (YYYY-MM-DD)
 * @param {string} endDate - Optional end date (YYYY-MM-DD)
 * @returns {Promise<{success: boolean, checkIns?: Array, error?: object}>}
 */
export const getCheckInHistory = async (userId, limit = 30, startDate = null, endDate = null) => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    let q = query(
      collection(db, COLLECTIONS.CHECK_INS),
      where('userId', '==', userId),
      orderBy('date', 'desc')
    );
    
    if (startDate && validateDateString(startDate)) {
      q = query(q, where('date', '>=', startDate));
    }
    
    if (endDate && validateDateString(endDate)) {
      q = query(q, where('date', '<=', endDate));
    }
    
    const querySnapshot = await getDocs(q);
    const checkIns = [];
    
    querySnapshot.forEach((doc) => {
      checkIns.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    
    // Limit results
    const limitedCheckIns = limit > 0 ? checkIns.slice(0, limit) : checkIns;
    
    return {
      success: true,
      checkIns: limitedCheckIns,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get check-in statistics for a user
 * @param {string} userId - User ID
 * @param {string} period - Period: 'week' | 'month' | 'all'
 * @returns {Promise<{success: boolean, stats?: object, error?: object}>}
 */
export const getCheckInStats = async (userId, period = 'month') => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    let startDate = null;
    const today = getToday();
    
    if (period === 'week') {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      startDate = formatDateToYYYYMMDD(weekAgo);
    } else if (period === 'month') {
      const monthAgo = new Date();
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      startDate = formatDateToYYYYMMDD(monthAgo);
    }
    
    const historyResult = await getCheckInHistory(userId, 0, startDate, today);
    
    if (!historyResult.success) {
      return historyResult;
    }
    
    const checkIns = historyResult.checkIns || [];
    const completedCheckIns = checkIns.filter((ci) => ci.completed);
    
    const stats = {
      total: checkIns.length,
      completed: completedCheckIns.length,
      completionRate: checkIns.length > 0 ? (completedCheckIns.length / checkIns.length) * 100 : 0,
      period,
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
 * Mark check-in reward as shown
 * @param {string} checkInId - Check-in document ID
 * @returns {Promise<{success: boolean, error?: object}>}
 */
export const markRewardShown = async (checkInId) => {
  try {
    if (!checkInId) {
      return {
        success: false,
        error: { message: 'Check-in ID is required' },
      };
    }
    
    await setDoc(
      doc(db, COLLECTIONS.CHECK_INS, checkInId),
      { rewardShown: true },
      { merge: true }
    );
    
    return {
      success: true,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

