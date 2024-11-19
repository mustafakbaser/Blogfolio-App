import React from 'react';
import { Github, Twitter, Linkedin, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700/50 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/mustafakbaser" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/mustafakbaser" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://medium.com/@mustafakbaser" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
            >
              <BookOpen className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com/mustafakbaser" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Mustafa Kürşad Başer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}