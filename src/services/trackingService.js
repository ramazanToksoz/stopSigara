import { doc, setDoc, getDoc, collection, query, where, orderBy, getDocs, addDoc } from 'firebase/firestore';
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
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    
    if (!userDoc.exists()) {
      return { success: false, error: { message: 'User not found' } };
    }
    
    const userData = userDoc.data();
    const quitDate = userData.onboardingData?.quitDate ? new Date(userData.onboardingData.quitDate) : new Date();
    const today = new Date();
    const daysQuit = Math.floor((today - quitDate) / (1000 * 60 * 60 * 24));
    
    // Get all tracking data
    const trackingResult = await getAllTrackingData(userId);
    
    let totalAvoided = 0;
    let totalCravings = 0;
    
    if (quitMethod === 'coldturkey') {
      const dailyCigarettes = userData.onboardingData?.dailyCigarettes || 20;
      totalAvoided = daysQuit * dailyCigarettes;
    } else if (quitMethod === 'gradual') {
      // Gradual method için tracking verilerinden hesapla
      if (trackingResult.success && trackingResult.data) {
        trackingResult.data.forEach(entry => {
          if (entry.reducedCigarettes !== undefined) {
            totalAvoided += entry.reducedCigarettes;
          }
        });
      }
    }
    
    if (trackingResult.success && trackingResult.data) {
      trackingResult.data.forEach(entry => {
        totalCravings += entry.cravingsCount || 0;
      });
    }
    
    const progressStats = {
      daysQuit,
      quitDate: quitDate.toISOString(),
      totalAvoided,
      totalCravings,
      quitMethod,
      dailyCigarettes: userData.onboardingData?.dailyCigarettes || 20
    };
    
    return { success: true, stats: progressStats };
  } catch (error) {
    console.error('Error calculating progress:', error);
    return { success: false, error };
  }
};

