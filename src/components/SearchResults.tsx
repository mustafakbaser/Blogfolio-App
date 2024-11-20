import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, ArrowRight } from 'lucide-react';

interface SearchResult {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  onResultClick: () => void;
}

export default function SearchResults({ results, onResultClick }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500 dark:text-gray-400">
        No results found.
      </div>
    );
  }

  return (
    <div className="max-h-[60vh] overflow-y-auto">
      <div className="space-y-4">
        {results.map((result) => (
          <Link
            key={result.id}
            to={`/blog/${result.slug}`}
            onClick={onResultClick}
            className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">
                  {result.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {result.excerpt}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300">
                    <Tag className="w-3 h-3 mr-1" />
                    {result.category}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}