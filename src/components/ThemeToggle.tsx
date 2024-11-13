import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export default function ThemeToggle() {
  const { isDark, toggle } = useDarkMode();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative overflow-hidden group"
      aria-label={isDark ? 'Light mode' : 'Dark mode'}
    >
      <div className="relative z-10 transition-transform duration-500 rotate-0 dark:-rotate-180">
        {isDark ? (
          <Moon className="w-5 h-5 text-blue-500" />
        ) : (
          <Sun className="w-5 h-5 text-amber-500" />
        )}
      </div>
      <div className="absolute inset-0 transform transition-transform duration-500 scale-0 group-hover:scale-150">
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-50 to-amber-100 dark:from-blue-900 dark:to-blue-950 opacity-50 rounded-lg" />
      </div>
    </button>
  );
}