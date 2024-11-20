import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Code2, Cpu, Globe } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import Header from '../components/Header';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';

const POSTS_PER_PAGE = 9; // The number of posts to be displayed per page

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category')
  );
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    return Array.from(new Set(blogPosts.map(post => post.category))).sort();
  }, []);

  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return blogPosts;
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  // Calculate the posts to be displayed on the current page
  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  useEffect(() => {
    const category = searchParams.get('category');
    setSelectedCategory(category);
    // Reset the page number when the category changes
    setCurrentPage(1);
  }, [searchParams]);

  const handleCategorySelect = (category: string | null) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
    setSelectedCategory(category);
    setCurrentPage(1); // Reset the page number when the category changes
    window.scrollTo(0, 0);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Ana Sayfa"
        description="Modern teknoloji ve yazılım geliştirme üzerine güncel blog yazıları. React, TypeScript, Node.js ve daha fazlası."
      />
      <Header />
      
      <main className="flex-grow pt-28 md:pt-24">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="space-y-4">
            {/* Header section */}
            <div className="relative overflow-hidden rounded-3xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-transparent" />
              
              <div className="relative px-6 py-8 sm:px-12 sm:py-12 flex flex-col items-center text-center">
                {/* Icon Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-500 dark:to-indigo-400 shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/10 backdrop-blur-xl rounded-2xl transform hover:scale-105 transition-transform duration-300">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="p-3 bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-500 dark:to-indigo-400 shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/10 backdrop-blur-xl rounded-2xl transform hover:scale-105 transition-transform duration-300">
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <div className="p-3 bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-500 dark:to-indigo-400 shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/10 backdrop-blur-xl rounded-2xl transform hover:scale-105 transition-transform duration-300">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Glowing Text Effect */}
                <h1 className="pb-3 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-indigo-800 to-indigo-900 dark:from-white dark:via-indigo-200 dark:to-purple-200 mb-4 drop-shadow-sm">
                  BlogFolio
                </h1>
                
                {/* Animated Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {['Development', 'Design', 'AI', 'Web3'].map((tag, index) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full text-sm text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Subtitle with Gradient Border */}
                <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 hover:scale-105 transition-transform duration-300">
                  <div className="px-5 py-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Exploring the frontiers of technology and innovation
                    </p>
                  </div>
                </div>
              </div>
            </div>     
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={new Date(post.publishedAt).toLocaleDateString('tr-TR')}
                  imageUrl={post.imageUrl}
                  slug={post.slug}
                  readTime={post.readTime}
                  category={post.category}
                />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-300">Bu kategoride henüz yazı bulunmuyor.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}