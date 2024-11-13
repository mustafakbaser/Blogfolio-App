import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X, Github, Search, Home, User, Mail, Loader2, Briefcase } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import SearchResults from './SearchResults';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { results, isSearching, performSearch } = useSearch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    performSearch(query);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <BookOpen className="h-8 w-8 text-indigo-600 transform group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              BlogFolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            <Link 
              to="/" 
              className={`flex items-center space-x-1.5 text-gray-600 hover:text-indigo-600 transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all ${
                isActivePath('/') ? 'text-indigo-600 after:w-full' : ''
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Ana Sayfa</span>
            </Link>

            <Link 
              to="/portfolio" 
              className={`flex items-center space-x-1.5 text-gray-600 hover:text-indigo-600 transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all ${
                isActivePath('/portfolio') ? 'text-indigo-600 after:w-full' : ''
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Portfolyo</span>
            </Link>

            <Link 
              to="/hakkimda" 
              className={`flex items-center space-x-1.5 text-gray-600 hover:text-indigo-600 transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all ${
                isActivePath('/hakkimda') ? 'text-indigo-600 after:w-full' : ''
              }`}
            >
              <User className="w-4 h-4" />
              <span>Hakkımda</span>
            </Link>

            <Link 
              to="/iletisim" 
              className={`flex items-center space-x-1.5 text-gray-600 hover:text-indigo-600 transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all ${
                isActivePath('/iletisim') ? 'text-indigo-600 after:w-full' : ''
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>İletişim</span>
            </Link>

            <a 
              href="https://github.com/mustafakbaser" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 text-gray-600 hover:text-indigo-600 transition-colors hover:scale-110 transform duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Search Modal */}
        {isSearchOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
            <div className="min-h-screen px-4 flex items-start justify-center pt-16">
              <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl transform animate-slideDown">
                <div className="p-4">
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchInputChange}
                      placeholder="Blog yazılarında ara..."
                      className="w-full pl-12 pr-4 py-3 text-gray-900 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      autoFocus
                    />
                    {isSearching ? (
                      <Loader2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 animate-spin" />
                    ) : (
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    )}
                  </form>

                  {searchQuery && (
                    <div className="mt-6">
                      <SearchResults 
                        results={results} 
                        onResultClick={closeSearch}
                      />
                    </div>
                  )}

                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={closeSearch}
                      className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Kapat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            <nav className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
              <div className="p-6 space-y-8">
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <X className="h-6 w-6 text-gray-600" />
                  </button>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Blog yazılarında ara..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className="w-full pl-10 pr-4 py-2.5 text-gray-900 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  {isSearching ? (
                    <Loader2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 animate-spin" />
                  ) : (
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  )}
                </div>

                {searchQuery && (
                  <div className="mt-4 max-h-[50vh] overflow-y-auto">
                    <SearchResults 
                      results={results}
                      onResultClick={() => {
                        closeSearch();
                        setIsMenuOpen(false);
                      }}
                    />
                  </div>
                )}

                <div className="space-y-6">
                  <Link 
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      isActivePath('/') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Home className="w-5 h-5" />
                    <span>Ana Sayfa</span>
                  </Link>

                  <Link 
                    to="/portfolio"
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      isActivePath('/portfolio') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Briefcase className="w-5 h-5" />
                    <span>Portfolyo</span>
                  </Link>

                  <Link 
                    to="/hakkimda"
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      isActivePath('/hakkimda') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <User className="w-5 h-5" />
                    <span>Hakkımda</span>
                  </Link>

                  <Link 
                    to="/iletisim"
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      isActivePath('/iletisim') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                    <span>İletişim</span>
                  </Link>

                  <a 
                    href="https://github.com/mustafakbaser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}