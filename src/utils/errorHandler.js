/**
 * Error Handler Utilities
 * Centralized error handling and logging
 */

import { getErrorMessage } from '../constants/ErrorMessages';

/**
 * Firestore error codes mapping
 */
const FIRESTORE_ERROR_CODES = {
  'permission-denied': 'FIRESTORE_PERMISSION_DENIED',
  'not-found': 'FIRESTORE_NOT_FOUND',
  'already-exists': 'FIRESTORE_ALREADY_EXISTS',
  'resource-exhausted': 'FIRESTORE_QUOTA_EXCEEDED',
  'failed-precondition': 'FIRESTORE_PERMISSION_DENIED',
  'aborted': 'GENERIC_ERROR',
  'out-of-range': 'GENERIC_ERROR',
  'unimplemented': 'GENERIC_ERROR',
  'internal': 'GENERIC_ERROR',
  'unavailable': 'NETWORK_ERROR',
  'data-loss': 'GENERIC_ERROR',
  'unauthenticated': 'UNAUTHORIZED',
};

/**
 * Handle Firestore errors and convert to user-friendly messages
 * @param {Error} error - Firestore error object
 * @param {string} lang - Language code ('tr' | 'en')
 * @returns {{success: boolean, error: object, message: string}} Error response
 */
export const handleFirestoreError = (error, lang = 'tr') => {
  let errorKey = 'GENERIC_ERROR';
  let errorCode = error.code || 'unknown';
  
  // Check if it's a Firestore error
  if (error.code && FIRESTORE_ERROR_CODES[error.code]) {
    errorKey = FIRESTORE_ERROR_CODES[error.code];
  } else if (error.message?.includes('network') || error.message?.includes('Network')) {
    errorKey = 'NETWORK_ERROR';
  } else if (error.message?.includes('permission') || error.message?.includes('Permission')) {
    errorKey = 'UNAUTHORIZED';
  }
  
  const message = getErrorMessage(errorKey, lang);
  
  return {
    success: false,
    error: {
      code: errorCode,
      message: error.message || message,
      originalError: error,
    },
    message,
  };
};

/**
 * Log error with context information
 * @param {Error} error - Error object
 * @param {string} context - Context where error occurred (e.g., 'checkInService.createMoodEntry')
 * @param {object} [additionalData] - Additional data to log
 */
export const logError = (error, context, additionalData = {}) => {
  const errorLog = {
    timestamp: new Date().toISOString(),
    context,
    error: {
      message: error.message,
      stack: error.stack,
      code: error.code,
      name: error.name,
    },
    ...additionalData,
  };
  
  // In development, log to console
  if (__DEV__) {
    console.error('Error Log:', errorLog);
  }
  
  // TODO: In production, send to error tracking service (e.g., Sentry, Crashlytics)
  // if (!__DEV__) {
  //   // Example: Sentry.captureException(error, { extra: errorLog });
  // }
};

/**
 * Create standardized error response
 * @param {string} errorKey - Error message key
 * @param {string} lang - Language code ('tr' | 'en')
 * @param {Error} [originalError] - Original error object
 * @returns {{success: boolean, error: object, message: string}} Error response
 */
export const createErrorResponse = (errorKey, lang = 'tr', originalError = null) => {
  const message = getErrorMessage(errorKey, lang);
  
  return {
    success: false,
    error: {
      code: errorKey,
      message,
      originalError: originalError ? {
        message: originalError.message,
        code: originalError.code,
      } : undefined,
    },
    message,
  };
};

/**
 * Wrap async function with error handling
 * @param {Function} asyncFunction - Async function to wrap
 * @param {string} context - Context for error logging
 * @param {string} lang - Language code ('tr' | 'en')
 * @returns {Function} Wrapped function
 */
export const withErrorHandling = (asyncFunction, context, lang = 'tr') => {
  return async (...args) => {
    try {
      return await asyncFunction(...args);
    } catch (error) {
      logError(error, context, { args });
      
      // If it's a Firestore error, handle it specifically
      if (error.code && FIRESTORE_ERROR_CODES[error.code]) {
        return handleFirestoreError(error, lang);
      }
      
      // Otherwise, return generic error
      return createErrorResponse('GENERIC_ERROR', lang, error);
    }
  };
};

/**
 * Check if error is network-related
 * @param {Error} error - Error object
 * @returns {boolean} True if network error
 */
export const isNetworkError = (error) => {
  return (
    error.code === 'unavailable' ||
    error.message?.toLowerCase().includes('network') ||
    error.message?.toLowerCase().includes('offline') ||
    !navigator.onLine
  );
};

/**
 * Check if error is due to permissions
 * @param {Error} error - Error object
 * @returns {boolean} True if permission error
 */
export const isPermissionError = (error) => {
  return (
    error.code === 'permission-denied' ||
    error.message?.toLowerCase().includes('permission') ||
    error.message?.toLowerCase().includes('unauthorized')
  );
};

