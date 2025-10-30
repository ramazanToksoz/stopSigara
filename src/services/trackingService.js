import { doc, setDoc, getDoc, collection, query, where, orderBy, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

/**
 * Daily tracking entry oluşturur
 * @param {string} userId - User ID
 * @param {object} trackingData - Tracking data (date, cigarettes, cravings, mood, etc.)
 * @returns {Promise<{success: boolean, error?: object}>}
 */
export const createDailyTracking = async (userId, trackingData) => {
  try {
    const dateStr = trackingData.date || new Date().toISOString().split('T')[0];
    
    const trackingDoc = {
      userId,
      date: dateStr,
      timestamp: new Date(),
      ...trackingData
    };

    // Daily tracking collection'ına kaydet
    await addDoc(collection(db, 'dailyTracking'), trackingDoc);
    
    return { success: true };
  } catch (error) {
    console.error('Error creating daily tracking:', error);
    return { success: false, error };
  }
};

/**
 * Belirli bir günün tracking verilerini getirir
 * @param {string} userId - User ID
 * @param {string} date - ISO date string (e.g., "2024-01-15")
 * @returns {Promise<{success: boolean, data?: object, error?: object}>}
 */
export const getDailyTracking = async (userId, date) => {
  try {
    const q = query(
      collection(db, 'dailyTracking'),
      where('userId', '==', userId),
      where('date', '==', date)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { success: true, data: { id: doc.id, ...doc.data() } };
    } else {
      return { success: true, data: null }; // No tracking data for this date
    }
  } catch (error) {
    console.error('Error getting daily tracking:', error);
    return { success: false, error };
  }
};

/**
 * Kullanıcının tüm tracking verilerini getirir
 * @param {string} userId - User ID
 * @returns {Promise<{success: boolean, data?: array, error?: object}>}
 */
export const getAllTrackingData = async (userId) => {
  try {
    const q = query(
      collection(db, 'dailyTracking'),
      where('userId', '==', userId),
      orderBy('date', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const trackingData = [];
    
    querySnapshot.forEach((doc) => {
      trackingData.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, data: trackingData };
  } catch (error) {
    console.error('Error getting all tracking data:', error);
    return { success: false, error };
  }
};

/**
 * Belirli tarih aralığında tracking verilerini getirir [inclusive]
 * @param {string} userId
 * @param {string} startDate YYYY-MM-DD
 * @param {string} endDate YYYY-MM-DD
 */
export const getTrackingDataInRange = async (userId, startDate, endDate) => {
  try {
    const q = query(
      collection(db, 'dailyTracking'),
      where('userId', '==', userId),
      where('date', '>=', startDate),
      where('date', '<=', endDate),
      orderBy('date', 'asc')
    );
    const querySnapshot = await getDocs(q);
    const trackingData = [];
    querySnapshot.forEach((docSnap) => {
      trackingData.push({ id: docSnap.id, ...docSnap.data() });
    });
    return { success: true, data: trackingData };
  } catch (error) {
    console.error('Error getting tracking data in range:', error);
    return { success: false, error };
  }
};

/**
 * Gradual yöntemi için istatistikleri hesaplar (tarih aralığına göre)
 * Varsayılan fiyat: 1 sigara = 5 TL (uygulamada sabit kullanılıyor)
 * Dönen alanlar: currentCigarettes, preventedCigarettes, savings, actualReduction, entriesCount
 */
export const calculateGradualStats = async (userId, startDate, endDate, baselineDailyCigarettes = 20, pricePerCigarette = 5) => {
  try {
    if (!userId || !startDate || !endDate) {
      return { success: false, error: { message: 'Invalid parameters' } };
    }
    const rangeResult = await getTrackingDataInRange(userId, startDate, endDate);
    if (!rangeResult.success) {
      return rangeResult;
    }
    const data = rangeResult.data || [];
    let preventedCigarettes = 0;
    let lastReportedDaily = null;
    data.forEach((entry) => {
      if (typeof entry.reducedCigarettes === 'number') {
        preventedCigarettes += Math.max(0, entry.reducedCigarettes);
      }
      if (typeof entry.currentDailyCigarettes === 'number') {
        lastReportedDaily = entry.currentDailyCigarettes;
      }
    });
    const currentCigarettes = lastReportedDaily != null
      ? Math.max(0, Math.floor(lastReportedDaily))
      : Math.max(1, Math.floor(baselineDailyCigarettes * 0.6));
    const actualReduction = Math.max(0, Math.min(100, Math.floor(((baselineDailyCigarettes - currentCigarettes) / baselineDailyCigarettes) * 100)));
    const savings = Math.max(0, Math.floor(preventedCigarettes * pricePerCigarette));
    return {
      success: true,
      stats: {
        currentCigarettes,
        preventedCigarettes,
        savings,
        actualReduction,
        entriesCount: data.length,
      }
    };
  } catch (error) {
    console.error('Error calculating gradual stats:', error);
    return { success: false, error };
  }
};

/**
 * Tracking verisini günceller
 * @param {string} trackingId - Tracking document ID
 * @param {object} updates - Updates to apply
 * @returns {Promise<{success: boolean, error?: object}>}
 */
export const updateDailyTracking = async (trackingId, updates) => {
  try {
    const trackingRef = doc(db, 'dailyTracking', trackingId);
    await setDoc(trackingRef, updates, { merge: true });
    return { success: true };
  } catch (error) {
    console.error('Error updating daily tracking:', error);
    return { success: false, error };
  }
};

/**
 * Kullanıcının ilerleme verilerini hesaplar
 * @param {string} userId - User ID
 * @param {string} quitMethod - 'coldturkey' or 'gradual'
 * @returns {Promise<{success: boolean, stats?: object, error?: object}>}
 */
export const calculateProgress = async (userId, quitMethod) => {
  try {
    if (!userId || !quitMethod) {
      return { success: false, error: { message: 'Invalid parameters' } };
    }

    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    
    if (!userDoc.exists()) {
      return { success: false, error: { message: 'User not found' } };
    }
    
    const userData = userDoc.data();
    
    // Edge-case: quitDate yoksa bugünün tarihini kullan
    let quitDate;
    if (userData.onboardingData?.quitDate) {
      quitDate = new Date(userData.onboardingData.quitDate);
      // Geçersiz tarih kontrolü
      if (isNaN(quitDate.getTime())) {
        console.warn('Invalid quitDate, using today');
        quitDate = new Date();
      }
    } else {
      console.warn('No quitDate found, using today');
      quitDate = new Date();
    }
    
    const today = new Date();
    const daysQuit = Math.max(0, Math.floor((today - quitDate) / (1000 * 60 * 60 * 24)));
    
    // Get all tracking data
    const trackingResult = await getAllTrackingData(userId);
    
    let totalAvoided = 0;
    let totalCravings = 0;
    
    if (quitMethod === 'coldturkey') {
      const dailyCigarettes = userData.onboardingData?.dailyCigarettes || 20;
      totalAvoided = daysQuit * dailyCigarettes;
    } else if (quitMethod === 'gradual') {
      // Gradual method için tracking verilerinden hesapla
      if (trackingResult.success && trackingResult.data && Array.isArray(trackingResult.data)) {
        trackingResult.data.forEach(entry => {
          if (entry && typeof entry.reducedCigarettes === 'number') {
            totalAvoided += entry.reducedCigarettes;
          }
        });
      }
    }
    
    // Edge-case: trackingResult başarısız veya data yoksa
    if (trackingResult.success && trackingResult.data && Array.isArray(trackingResult.data)) {
      trackingResult.data.forEach(entry => {
        if (entry && typeof entry.cravingsCount === 'number') {
          totalCravings += entry.cravingsCount;
        }
      });
    }
    
    const progressStats = {
      daysQuit: Math.max(0, daysQuit), // Negatif değerleri engelle
      quitDate: quitDate.toISOString(),
      totalAvoided: Math.max(0, totalAvoided),
      totalCravings: Math.max(0, totalCravings),
      quitMethod,
      dailyCigarettes: userData.onboardingData?.dailyCigarettes || 20
    };
    
    return { success: true, stats: progressStats };
  } catch (error) {
    console.error('Error calculating progress:', error);
    return { success: false, error };
  }
};

