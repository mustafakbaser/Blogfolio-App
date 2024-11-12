import { useState, useCallback } from 'react';
import { blogPosts } from '../data/blogPosts';

interface SearchResult {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
}

export function useSearch() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const performSearch = useCallback((query: string) => {
    setIsSearching(true);
    
    const searchQuery = query.toLowerCase().trim();
    
    if (!searchQuery) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    const searchResults = blogPosts.filter(post => {
      const titleMatch = post.title.toLowerCase().includes(searchQuery);
      const excerptMatch = post.excerpt.toLowerCase().includes(searchQuery);
      const contentMatch = post.content.some(section => 
        typeof section === 'string' && section.toLowerCase().includes(searchQuery)
      );
      
      return titleMatch || excerptMatch || contentMatch;
    }).map(post => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug,
      category: post.category
    }));

    setResults(searchResults);
    setIsSearching(false);
  }, []);

  return {
    results,
    isSearching,
    performSearch
  };
}