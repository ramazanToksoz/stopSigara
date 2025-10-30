/**
 * useNotifications Hook
 * Custom hook for managing user notifications
 */

import { useState, useEffect, useCallback } from 'react';
import { auth } from '../../firebaseConfig';
import {
  createNotification,
  getUserNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification,
  getUnreadCount,
  scheduleReminder,
} from '../services/notificationService';

/**
 * Hook for managing user notifications
 * @param {number} pageSize - Number of notifications per page
 * @param {boolean} unreadOnly - Only show unread notifications
 * @returns {object} Notifications state and functions
 */
export const useNotifications = (pageSize = 20, unreadOnly = false) => {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [lastNotificationId, setLastNotificationId] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  
  const fetchNotifications = useCallback(async (refresh = false) => {
    if (!auth.currentUser) {
      setNotifications([]);
      return;
    }
    
    if (refresh) {
      setIsLoading(true);
      setLastNotificationId(null);
      setHasMore(true);
    } else {
      setIsLoadingMore(true);
    }
    
    setError(null);
    
    try {
      const result = await getUserNotifications(
        auth.currentUser.uid,
        pageSize,
        refresh ? null : lastNotificationId,
        unreadOnly
      );
      
      if (result.success) {
        if (refresh) {
          setNotifications(result.notifications || []);
        } else {
          setNotifications((prev) => [...prev, ...(result.notifications || [])]);
        }
        
        setLastNotificationId(result.lastNotificationId);
        setHasMore(result.notifications && result.notifications.length === pageSize);
      } else {
        setError(result.error || result.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  }, [pageSize, unreadOnly, lastNotificationId]);
  
  useEffect(() => {
    fetchNotifications(true);
  }, [unreadOnly]);
  
  const loadMore = useCallback(() => {
    if (!isLoadingMore && hasMore && !isLoading) {
      fetchNotifications(false);
    }
  }, [fetchNotifications, isLoadingMore, hasMore, isLoading]);
  
  const markNotificationAsRead = useCallback(async (notificationId) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await markAsRead(notificationId);
      
      if (result.success) {
        // Update local state
        setNotifications((prev) =>
          prev.map((n) => (n.id === notificationId ? { ...n, read: true } : n))
        );
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
  }, []);
  
  const markAllRead = useCallback(async () => {
    if (!auth.currentUser) {
      return { success: false, error: { message: 'User not authenticated' } };
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await markAllAsRead(auth.currentUser.uid);
      
      if (result.success) {
        // Update local state
        setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
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
  }, []);
  
  const removeNotification = useCallback(async (notificationId) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await deleteNotification(notificationId);
      
      if (result.success) {
        // Update local state
        setNotifications((prev) => prev.filter((n) => n.id !== notificationId));
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
  }, []);
  
  return {
    notifications,
    isLoading,
    isLoadingMore,
    error,
    hasMore,
    markAsRead: markNotificationAsRead,
    markAllAsRead: markAllRead,
    deleteNotification: removeNotification,
    refresh: () => fetchNotifications(true),
    loadMore,
  };
};

/**
 * Hook for unread notification count
 * @returns {object} Unread count state and functions
 */
export const useUnreadCount = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchCount = useCallback(async () => {
    if (!auth.currentUser) {
      setCount(0);
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await getUnreadCount(auth.currentUser.uid);
      
      if (result.success) {
        setCount(result.count || 0);
      } else {
        setError(result.error || result.message);
        setCount(0);
      }
    } catch (err) {
      setError(err.message);
      setCount(0);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  useEffect(() => {
    fetchCount();
    
    // Refresh count every 30 seconds
    const interval = setInterval(fetchCount, 30000);
    
    return () => clearInterval(interval);
  }, [fetchCount]);
  
  return {
    count,
    isLoading,
    error,
    refetch: fetchCount,
  };
};

