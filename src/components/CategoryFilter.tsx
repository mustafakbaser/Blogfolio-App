import React from 'react';
import { Tag, Zap } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="relative mb-12 py-6">
      <div className="absolute inset-0" />
      <div className="relative">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onSelectCategory(null)}
            className={`group relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out hover:scale-105 ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
            }`}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity" />
            <span className="flex items-center">
              <Tag className="w-4 h-4 mr-2" />
              Tümü
            </span>
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`group relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity" />
              <span className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {category}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}