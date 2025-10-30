/**
 * Date Helper Functions
 * Utility functions for date operations and formatting
 */

/**
 * Get today's date in YYYY-MM-DD format
 * @returns {string} Today's date
 */
export const getToday = () => {
  const today = new Date();
  return formatDateToYYYYMMDD(today);
};

/**
 * Format date to YYYY-MM-DD string
 * @param {Date} date - Date object
 * @returns {string} Formatted date string
 */
export const formatDateToYYYYMMDD = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Get date N days ago
 * @param {number} days - Number of days ago
 * @returns {string} Date in YYYY-MM-DD format
 */
export const getDaysAgo = (days) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return formatDateToYYYYMMDD(date);
};

/**
 * Get date N days from today
 * @param {number} days - Number of days from today
 * @returns {string} Date in YYYY-MM-DD format
 */
export const getDaysFromToday = (days) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return formatDateToYYYYMMDD(date);
};

/**
 * Get week range (start and end dates)
 * @param {Date} [date] - Optional date, defaults to today
 * @returns {{start: string, end: string}} Week range
 */
export const getWeekRange = (date = new Date()) => {
  const start = new Date(date);
  const day = start.getDay();
  const diff = start.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
  start.setDate(diff);
  
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  
  return {
    start: formatDateToYYYYMMDD(start),
    end: formatDateToYYYYMMDD(end),
  };
};

/**
 * Get month range (start and end dates)
 * @param {Date} [date] - Optional date, defaults to today
 * @returns {{start: string, end: string}} Month range
 */
export const getMonthRange = (date = new Date()) => {
  const start = new Date(date.getFullYear(), date.getMonth(), 1);
  const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  
  return {
    start: formatDateToYYYYMMDD(start),
    end: formatDateToYYYYMMDD(end),
  };
};

/**
 * Format timestamp to readable string
 * @param {Date|Timestamp|string} timestamp - Timestamp to format
 * @param {string} format - Format type ('short' | 'long' | 'time' | 'date')
 * @param {string} locale - Locale code ('tr' | 'en')
 * @returns {string} Formatted date string
 */
export const formatTimestamp = (timestamp, format = 'short', locale = 'tr') => {
  let date;
  
  if (timestamp instanceof Date) {
    date = timestamp;
  } else if (typeof timestamp === 'string') {
    date = new Date(timestamp);
  } else if (timestamp?.toDate) {
    // Firestore Timestamp
    date = timestamp.toDate();
  } else {
    return '';
  }
  
  if (isNaN(date.getTime())) {
    return '';
  }
  
  const options = {
    short: { year: 'numeric', month: 'short', day: 'numeric' },
    long: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' },
    time: { hour: '2-digit', minute: '2-digit' },
    date: { year: 'numeric', month: '2-digit', day: '2-digit' },
  };
  
  return date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', options[format] || options.short);
};

/**
 * Calculate days between two dates
 * @param {string|Date} startDate - Start date (YYYY-MM-DD or Date)
 * @param {string|Date} endDate - End date (YYYY-MM-DD or Date)
 * @returns {number} Number of days between dates
 */
export const calculateDaysBetween = (startDate, endDate) => {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
  
  const diffTime = Math.abs(end - start);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Check if date is today
 * @param {string|Date} date - Date to check
 * @returns {boolean} True if date is today
 */
export const isToday = (date) => {
  const checkDate = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  return formatDateToYYYYMMDD(checkDate) === formatDateToYYYYMMDD(today);
};

/**
 * Check if date is in the past
 * @param {string|Date} date - Date to check
 * @returns {boolean} True if date is in the past
 */
export const isPast = (date) => {
  const checkDate = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  checkDate.setHours(0, 0, 0, 0);
  return checkDate < today;
};

/**
 * Check if date is in the future
 * @param {string|Date} date - Date to check
 * @returns {boolean} True if date is in the future
 */
export const isFuture = (date) => {
  const checkDate = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  checkDate.setHours(0, 0, 0, 0);
  return checkDate > today;
};

/**
 * Get relative time string (e.g., "2 hours ago", "3 days ago")
 * @param {Date|Timestamp|string} timestamp - Timestamp
 * @param {string} locale - Locale code ('tr' | 'en')
 * @returns {string} Relative time string
 */
export const getRelativeTime = (timestamp, locale = 'tr') => {
  let date;
  
  if (timestamp instanceof Date) {
    date = timestamp;
  } else if (typeof timestamp === 'string') {
    date = new Date(timestamp);
  } else if (timestamp?.toDate) {
    date = timestamp.toDate();
  } else {
    return '';
  }
  
  const now = new Date();
  const diffMs = now - date;
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  
  if (locale === 'tr') {
    if (diffSecs < 60) return 'Az önce';
    if (diffMins < 60) return `${diffMins} dakika önce`;
    if (diffHours < 24) return `${diffHours} saat önce`;
    if (diffDays < 7) return `${diffDays} gün önce`;
    return formatTimestamp(date, 'short', locale);
  } else {
    if (diffSecs < 60) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    return formatTimestamp(date, 'short', locale);
  }
};

