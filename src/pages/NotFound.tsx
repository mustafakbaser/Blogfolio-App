import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Home, Loader2, ArrowRight } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');
  const { results, isSearching, performSearch } = useSearch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Sayfa Bulunamadı"
        description="Aradığınız sayfa bulunamadı. Ana sayfaya dönebilir veya arama yapabilirsiniz."
      />
      <Header />
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 pt-28 md:pt-32">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          {/* Glitch Effect */}
          <div className="relative mb-8">
            <h1 className="text-[150px] md:text-[200px] font-bold leading-none select-none">
              <span className="relative inline-block">
                <span className="absolute inset-0 text-indigo-600 dark:text-indigo-500 animate-glitch-1">404</span>
                <span className="absolute inset-0 text-pink-600 dark:text-pink-500 animate-glitch-2">404</span>
                <span className="relative text-gray-900 dark:text-gray-100">404</span>
              </span>
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Houston, bir sorunumuz var!
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Aradığınız sayfa siber uzayda kaybolmuş görünüyor. Ana sayfaya dönebilir veya aşağıdaki arama motorunu kullanarak içerik arayabilirsiniz.
          </p>

          {/* Search Form */}
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Blog yazılarında ara..."
                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent shadow-sm"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                {isSearching ? (
                  <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />
                ) : (
                  <Search className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </form>

            {/* Search Results */}
            {searchQuery && results.length > 0 && (
              <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {results.map((result) => (
                    <Link
                      key={result.id}
                      to={`/blog/${result.slug}`}
                      className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">
                            {result.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                            {result.excerpt}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {searchQuery && results.length === 0 && !isSearching && (
              <div className="mt-6 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300">
                  Aramanızla eşleşen sonuç bulunamadı.
                </p>
              </div>
            )}
          </div>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Ana Sayfaya Dön
          </Link>
        </div>
      </main>

      <Footer />

      <style>
        {`
          @keyframes glitch-1 {
            0% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 2px); }
            20% { clip-path: inset(92% 0 1% 0); transform: translate(1px, -1px); }
            40% { clip-path: inset(43% 0 1% 0); transform: translate(-1px, 1px); }
            60% { clip-path: inset(25% 0 58% 0); transform: translate(2px, -2px); }
            80% { clip-path: inset(54% 0 7% 0); transform: translate(-2px, 2px); }
            100% { clip-path: inset(58% 0 43% 0); transform: translate(2px, -2px); }
          }

          @keyframes glitch-2 {
            0% { clip-path: inset(25% 0 58% 0); transform: translate(2px, -2px); }
            20% { clip-path: inset(54% 0 7% 0); transform: translate(-2px, 2px); }
            40% { clip-path: inset(58% 0 43% 0); transform: translate(2px, -2px); }
            60% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 2px); }
            80% { clip-path: inset(92% 0 1% 0); transform: translate(1px, -1px); }
            100% { clip-path: inset(43% 0 1% 0); transform: translate(-1px, 1px); }
          }

          .animate-glitch-1 {
            animation: glitch-1 0.9s infinite linear alternate-reverse;
          }

          .animate-glitch-2 {
            animation: glitch-2 0.9s infinite linear alternate-reverse;
          }
        `}
      </style>
    </div>
  );
}