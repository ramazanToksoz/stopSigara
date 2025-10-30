/**
 * Error Messages
 * Centralized error messages in both Turkish and English
 */
export const ERROR_MESSAGES = {
  tr: {
    // General errors
    GENERIC_ERROR: 'Bir hata oluştu. Lütfen tekrar deneyin.',
    NETWORK_ERROR: 'İnternet bağlantınızı kontrol edin.',
    UNAUTHORIZED: 'Bu işlem için yetkiniz yok.',
    NOT_FOUND: 'Aranan öğe bulunamadı.',
    
    // Validation errors
    INVALID_EMAIL: 'Geçerli bir e-posta adresi girin.',
    INVALID_PASSWORD: 'Şifre en az 6 karakter olmalıdır.',
    INVALID_INPUT: 'Lütfen geçerli bir değer girin.',
    REQUIRED_FIELD: 'Bu alan zorunludur.',
    INVALID_MOOD_TYPE: 'Geçersiz ruh hali tipi.',
    INVALID_CRAVING_INTENSITY: 'İstek şiddeti 0-10 arasında olmalıdır.',
    INVALID_CIGARETTE_COUNT: 'Sigara sayısı geçerli bir sayı olmalıdır.',
    
    // CheckIn errors
    CHECKIN_ALREADY_COMPLETED: 'Bugünkü kontrol zaten tamamlandı.',
    CHECKIN_NOT_FOUND: 'Kontrol kaydı bulunamadı.',
    CHECKIN_INCOMPLETE: 'Kontrol tamamlanmamış.',
    
    // Firestore errors
    FIRESTORE_PERMISSION_DENIED: 'Bu işlem için yetkiniz yok.',
    FIRESTORE_NOT_FOUND: 'Kayıt bulunamadı.',
    FIRESTORE_ALREADY_EXISTS: 'Bu kayıt zaten mevcut.',
    FIRESTORE_QUOTA_EXCEEDED: 'Kota aşıldı. Lütfen daha sonra tekrar deneyin.',
    
    // Community errors
    POST_NOT_FOUND: 'Gönderi bulunamadı.',
    COMMENT_NOT_FOUND: 'Yorum bulunamadı.',
    UNAUTHORIZED_DELETE: 'Bu içeriği silme yetkiniz yok.',
    INVALID_CONTENT_LENGTH: 'İçerik çok uzun veya çok kısa.',
  },
  en: {
    // General errors
    GENERIC_ERROR: 'An error occurred. Please try again.',
    NETWORK_ERROR: 'Please check your internet connection.',
    UNAUTHORIZED: 'You do not have permission for this action.',
    NOT_FOUND: 'The requested item was not found.',
    
    // Validation errors
    INVALID_EMAIL: 'Please enter a valid email address.',
    INVALID_PASSWORD: 'Password must be at least 6 characters.',
    INVALID_INPUT: 'Please enter a valid value.',
    REQUIRED_FIELD: 'This field is required.',
    INVALID_MOOD_TYPE: 'Invalid mood type.',
    INVALID_CRAVING_INTENSITY: 'Craving intensity must be between 0-10.',
    INVALID_CIGARETTE_COUNT: 'Cigarette count must be a valid number.',
    
    // CheckIn errors
    CHECKIN_ALREADY_COMPLETED: 'Today\'s check-in is already completed.',
    CHECKIN_NOT_FOUND: 'Check-in record not found.',
    CHECKIN_INCOMPLETE: 'Check-in is not complete.',
    
    // Firestore errors
    FIRESTORE_PERMISSION_DENIED: 'You do not have permission for this operation.',
    FIRESTORE_NOT_FOUND: 'Record not found.',
    FIRESTORE_ALREADY_EXISTS: 'This record already exists.',
    FIRESTORE_QUOTA_EXCEEDED: 'Quota exceeded. Please try again later.',
    
    // Community errors
    POST_NOT_FOUND: 'Post not found.',
    COMMENT_NOT_FOUND: 'Comment not found.',
    UNAUTHORIZED_DELETE: 'You do not have permission to delete this content.',
    INVALID_CONTENT_LENGTH: 'Content is too long or too short.',
  },
};

/**
 * Get error message based on language
 * @param {string} key - Error message key
 * @param {string} lang - Language code ('tr' | 'en')
 * @returns {string} Error message
 */
export const getErrorMessage = (key, lang = 'tr') => {
  return ERROR_MESSAGES[lang]?.[key] || ERROR_MESSAGES.en[key] || ERROR_MESSAGES.en.GENERIC_ERROR;
};

