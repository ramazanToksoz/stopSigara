import { en } from './en';
import { tr } from './tr';

export const translations = {
  en,
  tr,
};

// Varsayılan dil
export const defaultLanguage = 'tr';

// Dil değiştirme fonksiyonu
export const setLanguage = (language) => {
  return translations[language] || translations[defaultLanguage];
};

// Çeviri fonksiyonu
export const t = (path, lang = 'tr', params = {}) => {
  const keys = path.split('.');
  let value = translations[lang] || translations[defaultLanguage];
  
  for (const key of keys) {
    if (value && value[key]) {
      value = value[key];
    } else {
      console.warn(`Translation missing for key: ${path}`);
      return path;
    }
  }
  
  // Parametreleri değiştir (örn: {days} -> actual value)
  if (typeof value === 'string' && params && Object.keys(params).length > 0) {
    return Object.keys(params).reduce((str, param) => {
      return str.replace(new RegExp(`{${param}}`, 'g'), params[param]);
    }, value);
  }
  
  return value;
};

