/**
 * useCheckIn Hook
 * Custom hook for managing daily check-ins
 */

import { useState, useEffect, useCallback } from 'react';
import { auth } from '../../firebaseConfig';
import {
  createMoodEntry,
  createCravingEntry,
  createSmokingRecord,
  completeCheckIn,
  getTodayCheckIn,
  getCheckInHistory,
  getCheckInStats,
  markRewardShown,
  updateCravingResolved,
} from '../services/checkInService';
import { getToday } from '../utils/dateHelpers';

/**
 * Hook for managing today's check-in
 * @returns {object} Check-in state and functions
 */
export const useTodayCheckIn = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchTodayCheckIn = useCallback(async () => {
    if (!auth.currentUser) {
      setCheckIn(null);
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await getTodayCheckIn(auth.currentUser.uid);
      
      if (result.success) {
        setCheckIn(result.checkIn);
      } else {
        setError(result.error || result.message);
        setCheckIn(null);
      }
    } catch (err) {
      setError(err.message);
      setCheckIn(null);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  useEffect(() => {
    fetchTodayCheckIn();
  }, [fetchTodayCheckIn]);
  
  /**
   * Save mood entry
   */
  const saveMood = useCallback(async (moodData) => {
    if (!auth.currentUser) {
      return { success: false, error: { message: 'User not authenticated' } };
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await createMoodEntry(auth.currentUser.uid, moodData);
      
      if (result.success) {
        // Refresh check-in to get updated data
        await fetchTodayCheckIn();
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
  }, [fetchTodayCheckIn]);
  
  /**
   * Save craving entry
   */
  const saveCraving = useCallback(async (cravingData) => {
    if (!auth.currentUser) {
      return { success: false, error: { message: 'User not authenticated' } };
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await createCravingEntry(auth.currentUser.uid, cravingData);
      
      if (result.success) {
        await fetchTodayCheckIn();
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
  }, [fetchTodayCheckIn]);
  
  /**
   * Save smoking record
   */
  const saveSmokingRecord = useCallback(async (smokingData) => {
    if (!auth.currentUser) {
      return { success: false, error: { message: 'User not authenticated' } };
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await createSmokingRecord(auth.currentUser.uid, smokingData);
      
      if (result.success) {
        await fetchTodayCheckIn();
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
  }, [fetchTodayCheckIn]);
  
  /**
   * Complete check-in by linking all entries
   */
  const finishCheckIn = useCallback(async (checkInData) => {
    if (!auth.currentUser) {
      return { success: false, error: { message: 'User not authenticated' } };
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await completeCheckIn(auth.currentUser.uid, checkInData);
      
      if (result.success) {
        await fetchTodayCheckIn();
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
  }, [fetchTodayCheckIn]);
  
  /**
   * Mark reward as shown
   */
  const markReward = useCallback(async (checkInId) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await markRewardShown(checkInId);
      
      if (result.success) {
        await fetchTodayCheckIn();
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
  }, [fetchTodayCheckIn]);
  
  /**
   * Check if today's check-in is completed
   */
  const isCompleted = checkIn?.completed === true;
  
  return {
    checkIn,
    isLoading,
    error,
    isCompleted,
    saveMood,
    saveCraving,
    saveSmokingRecord,
    finishCheckIn,
    markReward,
    refetch: fetchTodayCheckIn,
  };
};

/**
 * Hook for check-in history
 * @param {number} limit - Number of records to fetch
 * @param {string} startDate - Start date (YYYY-MM-DD)
 * @param {string} endDate - End date (YYYY-MM-DD)
 * @returns {object} History state and functions
 */
export const useCheckInHistory = (limit = 30, startDate = null, endDate = null) => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchHistory = useCallback(async () => {
    if (!auth.currentUser) {
      setHistory([]);
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await getCheckInHistory(
        auth.currentUser.uid,
        limit,
        startDate,
        endDate
      );
      
      if (result.success) {
        setHistory(result.checkIns || []);
      } else {
        setError(result.error || result.message);
        setHistory([]);
      }
    } catch (err) {
      setError(err.message);
      setHistory([]);
    } finally {
      setIsLoading(false);
    }
  }, [limit, startDate, endDate]);
  
  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);
  
  return {
    history,
    isLoading,
    error,
    refetch: fetchHistory,
  };
};

/**
 * Hook for check-in statistics
 * @param {string} period - Period: 'week' | 'month' | 'all'
 * @returns {object} Stats state and functions
 */
export const useCheckInStats = (period = 'month') => {
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchStats = useCallback(async () => {
    if (!auth.currentUser) {
      setStats(null);
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await getCheckInStats(auth.currentUser.uid, period);
      
      if (result.success) {
        setStats(result.stats);
      } else {
        setError(result.error || result.message);
        setStats(null);
      }
    } catch (err) {
      setError(err.message);
      setStats(null);
    } finally {
      setIsLoading(false);
    }
  }, [period]);
  
  useEffect(() => {
    fetchStats();
  }, [fetchStats]);
  
  return {
    stats,
    isLoading,
    error,
    refetch: fetchStats,
  };
};

