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
    
    window.gtag?.('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted'
    });
    
    (window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0;
    
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
    
    window.gtag?.('consent', 'update', {
      'analytics_storage': analytics.checked ? 'granted' : 'denied',
      'ad_storage': advertising.checked ? 'granted' : 'denied'
    });
    
    (window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = advertising.checked ? 0 : 1;
    
    window.location.reload();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 md:right-4 md:left-auto md:w-[28rem] z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-4 sm:p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                <Cookie className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Cookie Preferences</h3>
            </div>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            We use cookies to provide you with a better experience. You can customize your settings for detailed information about analytics and advertising cookies.
          </p>

          {showDetails && (
            <div className="mt-4 space-y-3">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="functional"
                  checked={consent.functional}
                  disabled
                  className="w-4 h-4 text-indigo-600 border-gray-300 dark:border-gray-600 rounded focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
                <div>
                  <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">Necessary Cookies</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Essential cookies required for the site's functionality</span>
                </div>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="analytics"
                  defaultChecked={consent.analytics}
                  className="w-4 h-4 text-indigo-600 border-gray-300 dark:border-gray-600 rounded focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
                <div>
                  <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">Analytical Cookies</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Helps us understand how you use the site</span>
                </div>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="advertising"
                  defaultChecked={consent.advertising}
                  className="w-4 h-4 text-indigo-600 border-gray-300 dark:border-gray-600 rounded focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
                <div>
                  <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">Advertising Cookies</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Allow us to show you personalized ads</span>
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
                Accept Selected
              </button>
            ) : (
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Accept All
              </button>
            )}
            {!showDetails && (
              <button
                onClick={() => setShowDetails(true)}
                className="flex-1 px-4 py-2.5 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-colors"
              >
                Customize
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}