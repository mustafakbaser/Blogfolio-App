import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X, Github } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-indigo-600 relative group"
          >
            <BookOpen className="h-8 w-8 transform group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400">
              BlogFolio
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-indigo-600 transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link 
                  to="/hakkimda" 
                  className="text-gray-600 hover:text-indigo-600 transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all"
                >
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link 
                  to="/iletisim" 
                  className="text-gray-600 hover:text-indigo-600 transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all"
                >
                  İletişim
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/mustafakbaser" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link 
                  to="/hakkimda" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link 
                  to="/iletisim" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  İletişim
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/mustafakbaser" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Github className="w-6 h-6" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}