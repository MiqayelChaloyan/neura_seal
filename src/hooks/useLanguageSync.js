import { useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const useLanguageSync = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const lastPathRef = useRef(location.pathname);
  const initializedRef = useRef(false);

  // Force sync function that can be called externally
  const forceSync = useCallback(() => {
    const pathSegments = location.pathname.split('/');
    const urlLang = pathSegments[1];
    
    if (urlLang === 'ar' || urlLang === 'en') {
      const currentLang = i18n.language;
      if (currentLang !== urlLang) {
        console.log(`[useLanguageSync] Force sync: changing language from ${currentLang} to ${urlLang}`);
        i18n.changeLanguage(urlLang);
        localStorage.setItem('i18nextLng', urlLang);
      }
    } else {
      // If no language in URL, check localStorage and sync
      const storedLang = localStorage.getItem('i18nextLng');
      if (storedLang === 'ar' || storedLang === 'en') {
        const currentLang = i18n.language;
        if (currentLang !== storedLang) {
          console.log(`[useLanguageSync] Force sync with localStorage: ${storedLang}`);
          i18n.changeLanguage(storedLang);
        }
      }
    }
  }, [location.pathname, i18n]);

  // Initial sync when component mounts
  useEffect(() => {
    const syncLanguage = () => {
      const pathSegments = location.pathname.split('/');
      const urlLang = pathSegments[1];
      
      if (urlLang === 'ar' || urlLang === 'en') {
        const currentLang = i18n.language;
        if (currentLang !== urlLang) {
          console.log(`[useLanguageSync] Initial sync: changing language from ${currentLang} to ${urlLang}`);
          i18n.changeLanguage(urlLang);
          localStorage.setItem('i18nextLng', urlLang);
        }
      } else {
        // If no language in URL, check localStorage and sync
        const storedLang = localStorage.getItem('i18nextLng');
        if (storedLang === 'ar' || storedLang === 'en') {
          const currentLang = i18n.language;
          if (currentLang !== storedLang) {
            console.log(`[useLanguageSync] No URL lang, syncing with localStorage: ${storedLang}`);
            i18n.changeLanguage(storedLang);
          }
        }
      }
    };

    // Run immediately
    syncLanguage();
    
    // Also run after a short delay to ensure everything is loaded
    const timeoutId = setTimeout(syncLanguage, 100);
    
    return () => clearTimeout(timeoutId);
  }, []); // Only run on mount

  // Sync when location changes
  useEffect(() => {
    const syncLanguage = () => {
      const pathSegments = location.pathname.split('/');
      const urlLang = pathSegments[1];
      
      if (urlLang === 'ar' || urlLang === 'en') {
        const currentLang = i18n.language;
        if (currentLang !== urlLang) {
          console.log(`[useLanguageSync] Location changed: syncing language from ${currentLang} to ${urlLang}`);
          i18n.changeLanguage(urlLang);
          localStorage.setItem('i18nextLng', urlLang);
        }
      }
    };

    // Only sync if the path has actually changed
    if (lastPathRef.current !== location.pathname) {
      lastPathRef.current = location.pathname;
      syncLanguage();
    }
  }, [location.pathname, i18n]);

  // Handle manual URL changes and programmatic navigation
  useEffect(() => {
    const handleUrlChange = () => {
      const pathSegments = window.location.pathname.split('/');
      const urlLang = pathSegments[1];
      
      if (urlLang === 'ar' || urlLang === 'en') {
        const currentLang = i18n.language;
        if (currentLang !== urlLang) {
          console.log(`[useLanguageSync] URL changed: syncing language from ${currentLang} to ${urlLang}`);
          i18n.changeLanguage(urlLang);
          localStorage.setItem('i18nextLng', urlLang);
        }
      }
    };

    // Listen for various URL change events
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    
    // Override history methods to catch programmatic changes
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      originalPushState.apply(this, args);
      setTimeout(handleUrlChange, 50);
    };

    history.replaceState = function(...args) {
      originalReplaceState.apply(this, args);
      setTimeout(handleUrlChange, 50);
    };

    // Also check periodically for manual URL changes
    const intervalId = setInterval(() => {
      const currentPath = window.location.pathname;
      if (lastPathRef.current !== currentPath) {
        lastPathRef.current = currentPath;
        handleUrlChange();
      }
    }, 200);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
      clearInterval(intervalId);
      
      // Restore original history methods
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, [i18n]);

  return { currentLanguage: i18n.language, forceSync };
};
