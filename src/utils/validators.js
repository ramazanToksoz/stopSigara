/**
 * Validation Utilities
 * Input validation and sanitization functions
 */

/**
 * Valid mood types
 */
const VALID_MOOD_TYPES = ['very_sad', 'sad', 'neutral', 'happy', 'very_happy'];

/**
 * Valid craving tags
 */
const VALID_CRAVING_TAGS = ['afterMeal', 'stress', 'coffee', 'social'];

/**
 * Valid post types
 * Note: UI'da 'Text', 'Image', 'Link' kullanılıyor, backend'de de bu format kullanılıyor
 */
const VALID_POST_TYPES = ['Text', 'Image', 'Link', 'milestone', 'story', 'question', 'support'];

/**
 * Valid visibility options
 */
const VALID_VISIBILITY = ['public', 'private'];

/**
 * Email validation regex
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Maximum content lengths
 */
const MAX_LENGTHS = {
  POST_CONTENT: 5000,
  COMMENT_CONTENT: 1000,
  NOTES: 500,
  PERSONAL_QUIT_REASON: 1000,
};

/**
 * Minimum content lengths
 */
const MIN_LENGTHS = {
  POST_CONTENT: 10,
  COMMENT_CONTENT: 2,
  PASSWORD: 6,
};

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const isValidEmail = (email) => {
  if (!email || typeof email !== 'string') {
    return false;
  }
  return EMAIL_REGEX.test(email.trim());
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {{valid: boolean, message?: string}} Validation result
 */
export const validatePassword = (password) => {
  if (!password || typeof password !== 'string') {
    return { valid: false, message: 'Password is required' };
  }
  
  if (password.length < MIN_LENGTHS.PASSWORD) {
    return {
      valid: false,
      message: `Password must be at least ${MIN_LENGTHS.PASSWORD} characters`,
    };
  }
  
  return { valid: true };
};

/**
 * Validate mood type
 * @param {string} moodType - Mood type to validate
 * @returns {boolean} True if valid mood type
 */
export const isValidMoodType = (moodType) => {
  return VALID_MOOD_TYPES.includes(moodType);
};

/**
 * Validate craving intensity (0-10)
 * @param {number} intensity - Intensity value
 * @returns {boolean} True if valid intensity
 */
export const isValidCravingIntensity = (intensity) => {
  return typeof intensity === 'number' && intensity >= 0 && intensity <= 10;
};

/**
 * Validate craving tags
 * @param {string[]} tags - Array of tags
 * @returns {boolean} True if all tags are valid
 */
export const isValidCravingTags = (tags) => {
  if (!Array.isArray(tags)) {
    return false;
  }
  return tags.every((tag) => VALID_CRAVING_TAGS.includes(tag));
};

/**
 * Validate cigarette count
 * @param {number} count - Cigarette count
 * @param {number} min - Minimum value (default: 0)
 * @param {number} max - Maximum value (default: 100)
 * @returns {boolean} True if valid count
 */
export const isValidCigaretteCount = (count, min = 0, max = 100) => {
  return typeof count === 'number' && count >= min && count <= max && Number.isInteger(count);
};

/**
 * Validate post content
 * @param {string} content - Post content
 * @returns {{valid: boolean, message?: string}} Validation result
 */
export const validatePostContent = (content) => {
  if (!content || typeof content !== 'string') {
    return { valid: false, message: 'Content is required' };
  }
  
  const trimmed = content.trim();
  
  if (trimmed.length < MIN_LENGTHS.POST_CONTENT) {
    return {
      valid: false,
      message: `Content must be at least ${MIN_LENGTHS.POST_CONTENT} characters`,
    };
  }
  
  if (trimmed.length > MAX_LENGTHS.POST_CONTENT) {
    return {
      valid: false,
      message: `Content must not exceed ${MAX_LENGTHS.POST_CONTENT} characters`,
    };
  }
  
  return { valid: true };
};

/**
 * Validate comment content
 * @param {string} content - Comment content
 * @returns {{valid: boolean, message?: string}} Validation result
 */
export const validateCommentContent = (content) => {
  if (!content || typeof content !== 'string') {
    return { valid: false, message: 'Content is required' };
  }
  
  const trimmed = content.trim();
  
  if (trimmed.length < MIN_LENGTHS.COMMENT_CONTENT) {
    return {
      valid: false,
      message: `Comment must be at least ${MIN_LENGTHS.COMMENT_CONTENT} characters`,
    };
  }
  
  if (trimmed.length > MAX_LENGTHS.COMMENT_CONTENT) {
    return {
      valid: false,
      message: `Comment must not exceed ${MAX_LENGTHS.COMMENT_CONTENT} characters`,
    };
  }
  
  return { valid: true };
};

/**
 * Validate post type
 * @param {string} type - Post type
 * @returns {boolean} True if valid post type
 */
export const isValidPostType = (type) => {
  return VALID_POST_TYPES.includes(type);
};

/**
 * Validate visibility option
 * @param {string} visibility - Visibility option
 * @returns {boolean} True if valid visibility
 */
export const isValidVisibility = (visibility) => {
  return VALID_VISIBILITY.includes(visibility);
};

/**
 * Sanitize string input
 * Removes HTML tags and trims whitespace
 * @param {string} input - Input string
 * @returns {string} Sanitized string
 */
export const sanitizeString = (input) => {
  if (!input || typeof input !== 'string') {
    return '';
  }
  
  // Remove HTML tags
  const withoutHtml = input.replace(/<[^>]*>/g, '');
  
  // Trim whitespace
  return withoutHtml.trim();
};

/**
 * Sanitize notes text
 * @param {string} notes - Notes text
 * @returns {string} Sanitized notes
 */
export const sanitizeNotes = (notes) => {
  if (!notes) {
    return '';
  }
  
  const sanitized = sanitizeString(notes);
  
  // Limit length
  if (sanitized.length > MAX_LENGTHS.NOTES) {
    return sanitized.substring(0, MAX_LENGTHS.NOTES);
  }
  
  return sanitized;
};

/**
 * Content moderation helpers
 * Check for inappropriate content (basic implementation)
 * @param {string} content - Content to check
 * @returns {boolean} True if content appears inappropriate
 */
export const containsInappropriateContent = (content) => {
  if (!content || typeof content !== 'string') {
    return false;
  }
  
  // Basic inappropriate word list (expand as needed)
  const inappropriateWords = [
    // Add inappropriate words here
    // This is a basic implementation - in production, use a more sophisticated solution
  ];
  
  const lowerContent = content.toLowerCase();
  return inappropriateWords.some((word) => lowerContent.includes(word.toLowerCase()));
};

/**
 * Validate date string (YYYY-MM-DD format)
 * @param {string} dateStr - Date string
 * @returns {boolean} True if valid date format
 */
export const isValidDateString = (dateStr) => {
  if (!dateStr || typeof dateStr !== 'string') {
    return false;
  }
  
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateStr)) {
    return false;
  }
  
  const date = new Date(dateStr);
  return date instanceof Date && !isNaN(date.getTime());
};

/**
 * Validate user profile data
 * @param {object} profileData - Profile data to validate
 * @returns {{valid: boolean, errors: string[]}} Validation result
 */
export const validateUserProfile = (profileData) => {
  const errors = [];
  
  if (profileData.email && !isValidEmail(profileData.email)) {
    errors.push('Invalid email address');
  }
  
  if (profileData.displayName && typeof profileData.displayName !== 'string') {
    errors.push('Display name must be a string');
  }
  
  if (profileData.quitMethod && !['coldturkey', 'gradual'].includes(profileData.quitMethod)) {
    errors.push('Invalid quit method');
  }
  
  // Phone number validation
  if (profileData.phone) {
    if (!isValidPhoneNumber(profileData.phone)) {
      errors.push('Invalid phone number format');
    }
  }
  
  // Country code validation
  if (profileData.countryCode) {
    if (!isValidCountryCode(profileData.countryCode)) {
      errors.push('Invalid country code');
    }
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
};

/**
 * Validate phone number format
 * Supports various international formats
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone number
 */
export const isValidPhoneNumber = (phone) => {
  if (!phone || typeof phone !== 'string') {
    return false;
  }
  
  // Remove spaces, dashes, parentheses
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  
  // Must contain only digits and optionally start with +
  const phoneRegex = /^\+?[1-9]\d{6,14}$/;
  return phoneRegex.test(cleaned);
};

/**
 * Validate country code format (+XX)
 * @param {string} code - Country code to validate
 * @returns {boolean} True if valid country code
 */
export const isValidCountryCode = (code) => {
  if (!code || typeof code !== 'string') {
    return false;
  }
  
  const countryCodeRegex = /^\+[1-9]\d{0,3}$/;
  return countryCodeRegex.test(code);
};

