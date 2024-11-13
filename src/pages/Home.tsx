import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Code2, Cpu } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import Header from '../components/Header';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CategoryFilter from '../components/CategoryFilter';

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category')
  );

  const categories = useMemo(() => {
    return Array.from(new Set(blogPosts.map(post => post.category))).sort();
  }, []);

  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return blogPosts;
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    const category = searchParams.get('category');
    setSelectedCategory(category);
  }, [searchParams]);

  const handleCategorySelect = (category: string | null) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
    setSelectedCategory(category);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Ana Sayfa"
        description="Modern teknoloji ve yazılım geliştirme üzerine güncel blog yazıları. React, TypeScript, Node.js ve daha fazlası."
      />
      <Header />
      
      <main className="flex-grow pt-28 md:pt-24">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center p-2 rounded-2xl mb-6">
                <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-xl shadow-sm">
                  <Code2 className="w-5 h-5 text-indigo-600" />
                  <Cpu className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <h1 className="pb-6 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 mb-6">
                Yazılım ve Teknoloji Blogu
              </h1>
              <p className="text-xl text-gray-600">
                Modern teknolojiler, yazılım geliştirme, sanat ve insan beyni hakkında içerikler.
              </p>
            </div>
            
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
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
                <p className="text-gray-600">Bu kategoride henüz yazı bulunmuyor.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}