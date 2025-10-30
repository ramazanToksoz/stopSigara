/**
 * useStatistics Hook
 * Custom hook for managing user statistics and analytics
 */

import { useState, useEffect, useCallback } from 'react';
import { auth } from '../../firebaseConfig';
import {
  getProgressStats,
  getWeeklyStats,
  getMonthlyStats,
  getAllTimeStats,
  getHealthImprovements,
  getSavingsBreakdown,
  getCravingPatterns,
  getMoodTrends,
} from '../services/statisticsService';
import { useProfileData } from './useProfileData';

/**
 * Hook for progress statistics
 * @param {string} period - Period: 'week' | 'month' | 'all'
 * @returns {object} Progress stats state and functions
 */
export const useProgressStats = (period = 'all') => {
  const { profileData } = useProfileData();
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchStats = useCallback(async () => {
    if (!auth.currentUser || !profileData) {
      setStats(null);
      return;
    }
    
    const quitMethod = profileData.quitMethod || 'coldturkey';
    
    setIsLoading(true);
    setError(null);
    
    try {
      let result;
      
      if (period === 'week') {
        result = await getWeeklyStats(auth.currentUser.uid);
      } else if (period === 'month') {
        result = await getMonthlyStats(auth.currentUser.uid);
      } else {
        result = await getProgressStats(auth.currentUser.uid, quitMethod);
      }
      
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
  }, [period, profileData]);
  
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

/**
 * Hook for health statistics
 * @returns {object} Health stats state and functions
 */
export const useHealthStats = () => {
  const { profileData } = useProfileData();
  const [improvements, setImprovements] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchHealthStats = useCallback(async () => {
    if (!auth.currentUser || !profileData) {
      setImprovements(null);
      return;
    }
    
    const quitDate = profileData.onboardingData?.quitDate
      ? new Date(profileData.onboardingData.quitDate)
      : new Date();
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await getHealthImprovements(auth.currentUser.uid, quitDate);
      
      if (result.success) {
        setImprovements(result.improvements);
      } else {
        setError(result.error || result.message);
        setImprovements(null);
      }
    } catch (err) {
      setError(err.message);
      setImprovements(null);
    } finally {
      setIsLoading(false);
    }
  }, [profileData]);
  
  useEffect(() => {
    fetchHealthStats();
  }, [fetchHealthStats]);
  
  return {
    improvements,
    isLoading,
    error,
    refetch: fetchHealthStats,
  };
};

/**
 * Hook for savings statistics
 * @returns {object} Savings stats state and functions
 */
export const useSavingsStats = () => {
  const [savings, setSavings] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchSavingsStats = useCallback(async () => {
    if (!auth.currentUser) {
      setSavings(null);
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await getSavingsBreakdown(auth.currentUser.uid);
      
      if (result.success) {
        setSavings(result.savings);
      } else {
        setError(result.error || result.message);
        setSavings(null);
      }
    } catch (err) {
      setError(err.message);
      setSavings(null);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  useEffect(() => {
    fetchSavingsStats();
  }, [fetchSavingsStats]);
  
  return {
    savings,
    isLoading,
    error,
    refetch: fetchSavingsStats,
  };
};

/**
 * Hook for craving patterns
 * @param {string} period - Period: 'week' | 'month' | 'all'
 * @returns {object} Craving patterns state and functions
 */
export const useCravingPatterns = (period = 'month') => {
  const [patterns, setPatterns] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchPatterns = useCallback(async () => {
    if (!auth.currentUser) {
      setPatterns(null);
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await getCravingPatterns(auth.currentUser.uid, period);
      
      if (result.success) {
        setPatterns(result.patterns);
      } else {
        setError(result.error || result.message);
        setPatterns(null);
      }
    } catch (err) {
      setError(err.message);
      setPatterns(null);
    } finally {
      setIsLoading(false);
    }
  }, [period]);
  
  useEffect(() => {
    fetchPatterns();
  }, [fetchPatterns]);
  
  return {
    patterns,
    isLoading,
    error,
    refetch: fetchPatterns,
  };
};

/**
 * Hook for mood trends
 * @param {string} period - Period: 'week' | 'month' | 'all'
 * @returns {object} Mood trends state and functions
 */
export const useMoodTrends = (period = 'month') => {
  const [trends, setTrends] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchTrends = useCallback(async () => {
    if (!auth.currentUser) {
      setTrends(null);
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await getMoodTrends(auth.currentUser.uid, period);
      
      if (result.success) {
        setTrends(result.trends);
      } else {
        setError(result.error || result.message);
        setTrends(null);
      }
    } catch (err) {
      setError(err.message);
      setTrends(null);
    } finally {
      setIsLoading(false);
    }
  }, [period]);
  
  useEffect(() => {
    fetchTrends();
  }, [fetchTrends]);
  
  return {
    trends,
    isLoading,
    error,
    refetch: fetchTrends,
  };
};

