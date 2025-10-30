import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { t } from '../translations';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  
  const translate = (path, params = {}) => {
    return t(path, language, params);
  };
  
  return { t: translate, language };
};

