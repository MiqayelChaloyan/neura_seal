import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en/translation.json";
import arTranslations from "./locales/ar/translation.json";

// Function to detect language from URL or localStorage
const detectLanguage = () => {
  // Check URL first (e.g., /ar/technology, /en/technology)
  const pathSegments = window.location.pathname.split('/');
  const urlLang = pathSegments[1];
  
  if (urlLang === 'ar' || urlLang === 'en') {
    return urlLang;
  }
  
  // If no language in URL, check localStorage
  const storedLang = localStorage.getItem('i18nextLng');
  if (storedLang === 'ar' || storedLang === 'en') {
    return storedLang;
  }
  
  // Check browser language
  const browserLang = navigator.language.split('-')[0];
  if (browserLang === 'ar') {
    return 'ar';
  }
  
  // Default to English
  return 'en';
};

// Initialize language
const initialLanguage = detectLanguage();

// Ensure localStorage is updated with the detected language
localStorage.setItem('i18nextLng', initialLanguage);

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      ar: {
        translation: arTranslations
      }
    },
    lng: initialLanguage,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

// Listen for language changes and save to localStorage
i18n.on('languageChanged', (language) => {
  localStorage.setItem('i18nextLng', language);
});

// Additional sync after initialization to catch any race conditions
setTimeout(() => {
  const currentLang = i18n.language;
  const storedLang = localStorage.getItem('i18nextLng');
  const urlLang = window.location.pathname.split('/')[1];
  
  if (urlLang === 'ar' || urlLang === 'en') {
    if (currentLang !== urlLang) {
      console.log(`[i18n] Post-init sync: changing language from ${currentLang} to ${urlLang}`);
      i18n.changeLanguage(urlLang);
    }
  } else if (storedLang && storedLang !== currentLang) {
    i18n.changeLanguage(storedLang);
  }
}, 100);

export default i18n;