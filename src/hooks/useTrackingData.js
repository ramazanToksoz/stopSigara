import { useState, useEffect, useCallback } from 'react';
import { useUser } from '../context/UserContext';
import { calculateProgress } from '../services/trackingService';
import { auth } from '../../firebaseConfig';

/**
 * Custom hook for tracking user progress
 * Provides tracking data and progress statistics
 */
export const useTrackingData = () => {
  const { quitMethod } = useUser();
  const [progressStats, setProgressStats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProgress = useCallback(async () => {
    if (!auth.currentUser || !quitMethod) {
      return;
    }

    setIsLoading(true);
    try {
      const result = await calculateProgress(auth.currentUser.uid, quitMethod);
      if (result.success) {
        setProgressStats(result.stats);
      }
    } catch (error) {
      console.error('Error fetching progress:', error);
    } finally {
      setIsLoading(false);
    }
  }, [quitMethod]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  return { progressStats, isLoading, refetch: fetchProgress };
};

