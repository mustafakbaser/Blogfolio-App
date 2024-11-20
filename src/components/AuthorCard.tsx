import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function AuthorCard() {
  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700/50 my-12 backdrop-blur-sm">
      <div className="flex items-start gap-6">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200"
          alt="Yazar"
          className="w-24 h-24 rounded-lg object-cover ring-2 ring-gray-100 dark:ring-gray-700"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">Author Name</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            A passionate writer and tech enthusiast who loves to explore the intersection of technology, culture, and everyday life.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}