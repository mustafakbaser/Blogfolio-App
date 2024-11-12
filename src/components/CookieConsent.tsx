import React, { useState, useEffect } from 'react';
import { Cookie, Settings } from 'lucide-react';

interface ConsentState {
  analytics: boolean;
  advertising: boolean;
  functional: boolean;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    analytics: true,
    advertising: true,
    functional: true
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (!savedConsent) {
      setIsVisible(true);
    } else {
      const { analytics, advertising, functional } = JSON.parse(savedConsent);
      setConsent({ analytics, advertising, functional });
    }
  }, []);

  const handleAcceptAll = () => {
    const newConsent = {
      analytics: true,
      advertising: true,
      functional: true,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent));
    setConsent(newConsent);
    setIsVisible(false);
    
    // Google Analytics ve Adsense için consent güncelle
    window.gtag?.('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted'
    });
    
    // Adsense için reklam isteklerini etkinleştir
    (window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0;
    
    // Sayfayı yenile
    window.location.reload();
  };

  const handleAcceptSelected = () => {
    const analytics = document.getElementById('analytics') as HTMLInputElement;
    const advertising = document.getElementById('advertising') as HTMLInputElement;
    
    const newConsent = {
      analytics: analytics.checked,
      advertising: advertising.checked,
      functional: true,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent));
    setConsent(newConsent);
    setIsVisible(false);
    
    // Google Analytics ve Adsense için consent güncelle
    window.gtag?.('consent', 'update', {
      'analytics_storage': analytics.checked ? 'granted' : 'denied',
      'ad_storage': advertising.checked ? 'granted' : 'denied'
    });
    
    // Adsense için reklam isteklerini güncelle
    (window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = advertising.checked ? 0 : 1;
    
    // Sayfayı yenile
    window.location.reload();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <Cookie className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Çerez Tercihleri</h3>
            </div>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Size daha iyi bir deneyim sunabilmek için çerezleri kullanıyoruz. Analitik ve reklam amaçlı çerezler hakkında detaylı bilgi için ayarları özelleştirebilirsiniz.
          </p>

          {showDetails && (
            <div className="mt-4 space-y-3">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="functional"
                  checked={consent.functional}
                  disabled
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <div>
                  <span className="block text-sm font-medium text-gray-900">Gerekli Çerezler</span>
                  <span className="block text-xs text-gray-500">Sitenin çalışması için gerekli olan temel çerezler</span>
                </div>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="analytics"
                  defaultChecked={consent.analytics}
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <div>
                  <span className="block text-sm font-medium text-gray-900">Analitik Çerezler</span>
                  <span className="block text-xs text-gray-500">Siteyi nasıl kullandığınızı anlamamıza yardımcı olur</span>
                </div>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="advertising"
                  defaultChecked={consent.advertising}
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <div>
                  <span className="block text-sm font-medium text-gray-900">Reklam Çerezleri</span>
                  <span className="block text-xs text-gray-500">Size özel reklamlar göstermemizi sağlar</span>
                </div>
              </label>
            </div>
          )}

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            {showDetails ? (
              <button
                onClick={handleAcceptSelected}
                className="flex-1 px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Seçilenleri Kabul Et
              </button>
            ) : (
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Tümünü Kabul Et
              </button>
            )}
            {!showDetails && (
              <button
                onClick={() => setShowDetails(true)}
                className="flex-1 px-4 py-2.5 bg-gray-50 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors"
              >
                Özelleştir
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}