/**
 * Validation Service
 * Centralized validation and sanitization for all data types
 */

import {
  isValidEmail,
  validatePassword,
  isValidMoodType,
  isValidCravingIntensity,
  isValidCravingTags,
  isValidCigaretteCount,
  validatePostContent,
  validateCommentContent,
  isValidPostType,
  isValidVisibility,
  sanitizeString,
  sanitizeNotes,
  containsInappropriateContent,
  isValidDateString,
  validateUserProfile,
} from '../utils/validators';

/**
 * Validate user profile data
 * @param {object} profileData - Profile data to validate
 * @returns {{valid: boolean, errors: string[]}} Validation result
 */
export const validateUserProfileData = (profileData) => {
  return validateUserProfile(profileData);
};

/**
 * Validate check-in data structure
 * @param {object} checkInData - Check-in data
 * @returns {{valid: boolean, errors: string[]}} Validation result
 */
export const validateCheckInData = (checkInData) => {
  const errors = [];
  
  if (!checkInData) {
    errors.push('Check-in data is required');
    return { valid: false, errors };
  }
  
  // Validate mood data if present
  if (checkInData.mood) {
    if (!isValidMoodType(checkInData.mood.moodType)) {
      errors.push('Invalid mood type');
    }
    if (checkInData.mood.notes && typeof checkInData.mood.notes !== 'string') {
      errors.push('Mood notes must be a string');
    }
  }
  
  // Validate craving data if present
  if (checkInData.craving) {
    if (!isValidCravingIntensity(checkInData.craving.intensity)) {
      errors.push('Invalid craving intensity (must be 0-10)');
    }
    if (checkInData.craving.tags && !isValidCravingTags(checkInData.craving.tags)) {
      errors.push('Invalid craving tags');
    }
  }
  
  // Validate smoking record data if present
  if (checkInData.smokingRecord) {
    const { didSmoke, cigarettesCount, cigarettesAvoided } = checkInData.smokingRecord;
    
    if (typeof didSmoke !== 'boolean') {
      errors.push('didSmoke must be a boolean');
    }
    
    if (didSmoke === true) {
      if (!isValidCigaretteCount(cigarettesCount, 1, 100)) {
        errors.push('Invalid cigarette count (must be 1-100)');
      }
    } else if (didSmoke === false) {
      if (!isValidCigaretteCount(cigarettesAvoided, 1, 100)) {
        errors.push('Invalid cigarettes avoided count (must be 1-100)');
      }
    }
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
};

/**
 * Validate and sanitize mood entry data
 * @param {object} moodData - Mood data
 * @returns {{valid: boolean, data?: object, errors: string[]}} Validation result
 */
export const validateAndSanitizeMoodData = (moodData) => {
  const errors = [];
  
  if (!moodData || !moodData.moodType) {
    errors.push('Mood type is required');
    return { valid: false, errors };
  }
  
  if (!isValidMoodType(moodData.moodType)) {
    errors.push('Invalid mood type');
    return { valid: false, errors };
  }
  
  const sanitized = {
    moodType: moodData.moodType,
    notes: moodData.notes ? sanitizeNotes(moodData.notes) : undefined,
  };
  
  return {
    valid: true,
    data: sanitized,
    errors: [],
  };
};

/**
 * Validate and sanitize craving entry data
 * @param {object} cravingData - Craving data
 * @returns {{valid: boolean, data?: object, errors: string[]}} Validation result
 */
export const validateAndSanitizeCravingData = (cravingData) => {
  const errors = [];
  
  if (!cravingData) {
    errors.push('Craving data is required');
    return { valid: false, errors };
  }
  
  if (cravingData.intensity === undefined || cravingData.intensity === null) {
    errors.push('Craving intensity is required');
  } else if (!isValidCravingIntensity(cravingData.intensity)) {
    errors.push('Invalid craving intensity (must be 0-10)');
  }
  
  if (cravingData.tags) {
    if (!Array.isArray(cravingData.tags)) {
      errors.push('Tags must be an array');
    } else if (!isValidCravingTags(cravingData.tags)) {
      errors.push('Invalid craving tags');
    }
  }
  
  if (errors.length > 0) {
    return { valid: false, errors };
  }
  
  const sanitized = {
    intensity: Number(cravingData.intensity),
    tags: cravingData.tags || [],
    resolved: cravingData.resolved !== undefined ? Boolean(cravingData.resolved) : false,
    resolutionTime: cravingData.resolutionTime ? Number(cravingData.resolutionTime) : undefined,
  };
  
  return {
    valid: true,
    data: sanitized,
    errors: [],
  };
};

/**
 * Validate and sanitize smoking record data
 * @param {object} smokingData - Smoking record data
 * @returns {{valid: boolean, data?: object, errors: string[]}} Validation result
 */
export const validateAndSanitizeSmokingRecordData = (smokingData) => {
  const errors = [];
  
  if (!smokingData) {
    errors.push('Smoking record data is required');
    return { valid: false, errors };
  }
  
  if (smokingData.didSmoke === undefined || smokingData.didSmoke === null) {
    errors.push('didSmoke is required');
    return { valid: false, errors };
  }
  
  const didSmoke = Boolean(smokingData.didSmoke);
  
  if (didSmoke) {
    if (!smokingData.cigarettesCount) {
      errors.push('Cigarette count is required when didSmoke is true');
    } else if (!isValidCigaretteCount(smokingData.cigarettesCount, 1, 100)) {
      errors.push('Invalid cigarette count (must be 1-100)');
    }
  } else {
    if (smokingData.cigarettesAvoided === undefined || smokingData.cigarettesAvoided === null) {
      errors.push('Cigarettes avoided is required when didSmoke is false');
    } else if (!isValidCigaretteCount(smokingData.cigarettesAvoided, 1, 100)) {
      errors.push('Invalid cigarettes avoided count (must be 1-100)');
    }
  }
  
  if (errors.length > 0) {
    return { valid: false, errors };
  }
  
  const sanitized = {
    didSmoke,
    cigarettesCount: didSmoke ? Number(smokingData.cigarettesCount) : undefined,
    cigarettesAvoided: !didSmoke ? Number(smokingData.cigarettesAvoided) : undefined,
    cravingId: smokingData.cravingId || undefined,
    notes: smokingData.notes ? sanitizeNotes(smokingData.notes) : undefined,
  };
  
  return {
    valid: true,
    data: sanitized,
    errors: [],
  };
};

/**
 * Validate and sanitize post content
 * @param {object} postData - Post data
 * @returns {{valid: boolean, data?: object, errors: string[]}} Validation result
 */
export const validateAndSanitizePostData = (postData) => {
  const errors = [];
  
  if (!postData || (!postData.content && !(postData.images && Array.isArray(postData.images) && postData.images.length > 0))) {
    errors.push('Post must have content or at least one image');
    return { valid: false, errors };
  }
  
  if (postData.content) {
    const contentValidation = validatePostContent(postData.content);
    if (!contentValidation.valid) {
      errors.push(contentValidation.message);
    }
  }
  
  // Check for inappropriate content
  if (containsInappropriateContent(postData.content)) {
    errors.push('Post contains inappropriate content');
  }
  
  if (postData.type && !isValidPostType(postData.type)) {
    errors.push(`Invalid post type. Must be one of: Text, Image, Link, milestone, story, question, support`);
  }
  
  if (postData.visibility && !isValidVisibility(postData.visibility)) {
    errors.push('Invalid visibility option. Must be public or private');
  }
  
  // Validate images if present
  if (postData.images) {
    if (!Array.isArray(postData.images)) {
      errors.push('Images must be an array');
    } else if (postData.images.length > 10) {
      errors.push('Maximum 10 images allowed per post');
    }
  }
  
  if (errors.length > 0) {
    return { valid: false, errors };
  }
  
  const sanitized = {
    content: postData.content ? sanitizeString(postData.content) : '',
    type: postData.type || ((postData.images && postData.images.length > 0) ? 'Image' : 'Text'),
    visibility: postData.visibility || 'public',
    images: postData.images || [],
  };
  
  return {
    valid: true,
    data: sanitized,
    errors: [],
  };
};

/**
 * Validate and sanitize comment content
 * @param {object} commentData - Comment data
 * @returns {{valid: boolean, data?: object, errors: string[]}} Validation result
 */
export const validateAndSanitizeCommentData = (commentData) => {
  const errors = [];
  
  if (!commentData || !commentData.content) {
    errors.push('Comment content is required');
    return { valid: false, errors };
  }
  
  const contentValidation = validateCommentContent(commentData.content);
  if (!contentValidation.valid) {
    errors.push(contentValidation.message);
  }
  
  // Check for inappropriate content
  if (containsInappropriateContent(commentData.content)) {
    errors.push('Comment contains inappropriate content');
  }
  
  if (errors.length > 0) {
    return { valid: false, errors };
  }
  
  const sanitized = {
    content: sanitizeString(commentData.content),
  };
  
  return {
    valid: true,
    data: sanitized,
    errors: [],
  };
};

/**
 * Validate date string
 * @param {string} dateStr - Date string to validate
 * @returns {boolean} True if valid
 */
export const validateDateString = (dateStr) => {
  return isValidDateString(dateStr);
};

/**
 * Validate user ID
 * @param {string} userId - User ID to validate
 * @returns {boolean} True if valid
 */
export const validateUserId = (userId) => {
  return userId && typeof userId === 'string' && userId.length > 0;
};

