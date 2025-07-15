import { useState, useEffect } from 'react';
import { Language } from '../types';

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'am', name: 'አማርኛ', flag: '🇪🇹' }
];

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang) {
      const lang = languages.find(l => l.code === savedLang);
      if (lang) setCurrentLanguage(lang);
    }
  }, []);

  const changeLanguage = (langCode: 'en' | 'am') => {
    const lang = languages.find(l => l.code === langCode);
    if (lang) {
      setCurrentLanguage(lang);
      localStorage.setItem('preferred-language', langCode);
    }
  };

  return {
    currentLanguage,
    languages,
    changeLanguage,
    t: (text: { en: string; am: string }) => text[currentLanguage.code]
  };
};