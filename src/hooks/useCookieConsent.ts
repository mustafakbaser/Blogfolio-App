import { useEffect } from 'react';

interface CookieConsent {
  analytics: boolean;
  advertising: boolean;
  functional: boolean;
  timestamp: string;
}

export function useCookieConsent() {
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      const { analytics, advertising } = JSON.parse(consent) as CookieConsent;
      
      // Google Analytics kontrolü
      if (!analytics) {
        window['ga-disable-G-XXXXXXXXXX'] = true; // GA measurement ID'nizi buraya ekleyin
        
        // Mevcut çerezleri temizle
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
          const [name] = cookie.split('=');
          if (name.trim().startsWith('_ga')) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
          }
        }
      }

      // Google Adsense kontrolü
      if (!advertising) {
        (window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1;
        
        // Adsense çerezlerini temizle
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
          const [name] = cookie.split('=');
          if (name.trim().startsWith('__gads')) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
          }
        }
      }
    }
  }, []);
}