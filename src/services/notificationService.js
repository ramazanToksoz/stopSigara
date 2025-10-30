/**
 * Notification Service
 * Service for managing in-app notifications
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
  deleteDoc,
  serverTimestamp,
  limit,
  startAfter,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { COLLECTIONS } from '../constants/Collections';
import { NOTIFICATION_TYPES, NOTIFICATION_SUBTYPES } from '../constants/NotificationTypes';
import { handleFirestoreError } from '../utils/errorHandler';
import { validateUserId } from './validationService';

/**
 * Create a notification
 * @param {string} userId - User ID
 * @param {object} notificationData - Notification data { type, title, body, data?, expiresAt? }
 * @returns {Promise<{success: boolean, notificationId?: string, error?: object}>}
 */
export const createNotification = async (userId, notificationData) => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    if (!notificationData.type || !notificationData.title || !notificationData.body) {
      return {
        success: false,
        error: { message: 'Type, title, and body are required' },
      };
    }
    
    const notificationDoc = {
      userId,
      type: notificationData.type,
      subtype: notificationData.subtype || null,
      title: notificationData.title,
      body: notificationData.body,
      data: notificationData.data || null,
      read: false,
      createdAt: serverTimestamp(),
      ...(notificationData.expiresAt && { expiresAt: notificationData.expiresAt }),
    };
    
    const docRef = await addDoc(collection(db, COLLECTIONS.NOTIFICATIONS), notificationDoc);
    
    return {
      success: true,
      notificationId: docRef.id,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get user notifications with pagination
 * @param {string} userId - User ID
 * @param {number} pageSize - Number of notifications per page (default: 20)
 * @param {string} lastNotificationId - Last notification ID for pagination
 * @param {boolean} unreadOnly - Only get unread notifications
 * @returns {Promise<{success: boolean, notifications?: Array, lastNotificationId?: string, error?: object}>}
 */
export const getUserNotifications = async (
  userId,
  pageSize = 20,
  lastNotificationId = null,
  unreadOnly = false
) => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    let q = query(
      collection(db, COLLECTIONS.NOTIFICATIONS),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    
    if (unreadOnly) {
      q = query(q, where('read', '==', false));
    }
    
    q = query(q, limit(pageSize));
    
    if (lastNotificationId) {
      const lastDoc = await getDoc(doc(db, COLLECTIONS.NOTIFICATIONS, lastNotificationId));
      if (lastDoc.exists()) {
        q = query(q, startAfter(lastDoc));
      }
    }
    
    const querySnapshot = await getDocs(q);
    const notifications = [];
    let newLastNotificationId = null;
    
    const now = new Date();
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      
      // Check if notification has expired
      if (data.expiresAt) {
        const expiresAt = data.expiresAt.toDate ? data.expiresAt.toDate() : new Date(data.expiresAt);
        if (expiresAt < now) {
          return; // Skip expired notifications
        }
      }
      
      notifications.push({
        id: doc.id,
        ...data,
      });
      newLastNotificationId = doc.id;
    });
    
    return {
      success: true,
      notifications,
      lastNotificationId: newLastNotificationId,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Mark notification as read
 * @param {string} notificationId - Notification document ID
 * @returns {Promise<{success: boolean, error?: object}>}
 */
export const markAsRead = async (notificationId) => {
  try {
    if (!notificationId) {
      return {
        success: false,
        error: { message: 'Notification ID is required' },
      };
    }
    
    await setDoc(
      doc(db, COLLECTIONS.NOTIFICATIONS, notificationId),
      { read: true },
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
 * Mark all notifications as read for a user
 * @param {string} userId - User ID
 * @returns {Promise<{success: boolean, error?: object}>}
 */
export const markAllAsRead = async (userId) => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    const q = query(
      collection(db, COLLECTIONS.NOTIFICATIONS),
      where('userId', '==', userId),
      where('read', '==', false)
    );
    
    const querySnapshot = await getDocs(q);
    
    // Update all unread notifications
    const updatePromises = querySnapshot.docs.map((docSnapshot) =>
      setDoc(doc(db, COLLECTIONS.NOTIFICATIONS, docSnapshot.id), { read: true }, { merge: true })
    );
    
    await Promise.all(updatePromises);
    
    return {
      success: true,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Delete a notification
 * @param {string} notificationId - Notification document ID
 * @returns {Promise<{success: boolean, error?: object}>}
 */
export const deleteNotification = async (notificationId) => {
  try {
    if (!notificationId) {
      return {
        success: false,
        error: { message: 'Notification ID is required' },
      };
    }
    
    await deleteDoc(doc(db, COLLECTIONS.NOTIFICATIONS, notificationId));
    
    return {
      success: true,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get unread notification count
 * @param {string} userId - User ID
 * @returns {Promise<{success: boolean, count?: number, error?: object}>}
 */
export const getUnreadCount = async (userId) => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    const q = query(
      collection(db, COLLECTIONS.NOTIFICATIONS),
      where('userId', '==', userId),
      where('read', '==', false)
    );
    
    const querySnapshot = await getDocs(q);
    
    const now = new Date();
    let count = 0;
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      
      // Check if notification has expired
      if (data.expiresAt) {
        const expiresAt = data.expiresAt.toDate ? data.expiresAt.toDate() : new Date(data.expiresAt);
        if (expiresAt < now) {
          return; // Don't count expired notifications
        }
      }
      
      count++;
    });
    
    return {
      success: true,
      count,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Schedule a reminder notification
 * @param {string} userId - User ID
 * @param {object} reminderData - Reminder data { title, body, scheduledTime, data? }
 * @returns {Promise<{success: boolean, notificationId?: string, error?: object}>}
 */
export const scheduleReminder = async (userId, reminderData) => {
  try {
    return createNotification(userId, {
      type: NOTIFICATION_TYPES.REMINDER,
      subtype: reminderData.subtype || NOTIFICATION_SUBTYPES.DAILY_CHECKIN,
      title: reminderData.title,
      body: reminderData.body,
      data: reminderData.data || null,
      expiresAt: reminderData.scheduledTime || null,
    });
  } catch (error) {
    return handleFirestoreError(error);
  }
};

