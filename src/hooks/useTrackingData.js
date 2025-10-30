import { useState, useEffect, useCallback } from 'react';
import { useUser } from '../context/UserContext';
import { calculateProgress, calculateGradualStats } from '../services/trackingService';
import { auth } from '../../firebaseConfig';

/**
 * Custom hook for tracking user progress
 * Provides tracking data and progress statistics
 */
export const useTrackingData = (range = 'week') => {
  const { quitMethod } = useUser();
  const [progressStats, setProgressStats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rangeStats, setRangeStats] = useState(null);

  const fetchProgress = useCallback(async () => {
    if (!auth.currentUser || !quitMethod) {
      setProgressStats(null);
      setRangeStats(null);
      return;
    }

    setIsLoading(true);
    try {
      const result = await calculateProgress(auth.currentUser.uid, quitMethod);
      if (result.success && result.stats) {
        // Edge-case: quitDate yoksa veya geçersizse varsayılan değerler
        const stats = result.stats;
        if (!stats.quitDate) {
          console.warn('No quitDate found in user data');
          setProgressStats({
            ...stats,
            daysQuit: 0,
            quitDate: new Date().toISOString()
          });
        } else {
          setProgressStats(stats);
        }
      } else {
        // Hata durumunda varsayılan değerler
        console.warn('Failed to fetch progress, using defaults');
        setProgressStats({
          daysQuit: 0,
          quitDate: new Date().toISOString(),
          totalAvoided: 0,
          totalCravings: 0,
          quitMethod: quitMethod,
          dailyCigarettes: 20
        });
      }
      // Gradual özel istatistikleri (hafta/ay/tüm zaman) hesapla
      if (quitMethod === 'gradual') {
        const today = new Date();
        const endDate = today.toISOString().split('T')[0];
        const start = new Date(today);
        if (range === 'week') {
          start.setDate(today.getDate() - 6);
        } else if (range === 'month') {
          start.setMonth(today.getMonth() - 1);
        } else {
          // all: bir yıl geriye al (veri çoksa optimize edilir)
          start.setFullYear(today.getFullYear() - 3);
        }
        const startDate = start.toISOString().split('T')[0];
        const g = await calculateGradualStats(auth.currentUser.uid, startDate, endDate, result.stats?.dailyCigarettes || 20);
        if (g.success) {
          setRangeStats({ ...g.stats, startDate, endDate });
        } else {
          setRangeStats(null);
        }
      } else {
        setRangeStats(null);
      }
    } catch (error) {
      console.error('Error fetching progress:', error);
      // Hata durumunda varsayılan değerler
      setProgressStats({
        daysQuit: 0,
        quitDate: new Date().toISOString(),
        totalAvoided: 0,
        totalCravings: 0,
        quitMethod: quitMethod,
        dailyCigarettes: 20
      });
    } finally {
      setIsLoading(false);
    }
  }, [quitMethod, range]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  return { progressStats, rangeStats, isLoading, refetch: fetchProgress };
};

