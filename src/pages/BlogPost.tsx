import React, { useEffect } from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { Clock, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CodeBlock from '../components/CodeBlock';
import SEO from '../components/SEO';
import AuthorCard from '../components/AuthorCard';
import SocialShare from '../components/SocialShare';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const handleCategoryClick = (category: string) => {
    navigate(`/?category=${category}`);
    window.scrollTo(0, 0);
  };

  // Get the current URL for sharing
  const currentUrl = window.location.href;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={post.title}
        description={post.excerpt}
        image={post.imageUrl}
        article={true}
      />
      <Header />
      <main className="flex-grow">
        <article>
          <div className="w-full h-[500px] relative">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <button
                    onClick={() => handleCategoryClick(post.category)}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors dark:bg-indigo-500/20 dark:text-indigo-200 dark:hover:bg-indigo-500/30"
                  >
                    <Tag className="w-4 h-4 mr-2" />
                    {post.category}
                  </button>
                  <span className="text-white/90 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </span>
                </div>
                <h1 className="text-5xl font-bold text-white mb-6">{post.title}</h1>
                <div className="flex items-center space-x-6 text-white/90">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {format(new Date(post.publishedAt), 'd MMMM yyyy', { locale: tr })}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {format(new Date(post.publishedAt), 'HH:mm')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="prose prose-lg prose-indigo dark:prose-invert max-w-none">
              {post.content.map((section, index) => {
                if (typeof section === 'string') {
                  return <p key={index} className="mb-4 text-gray-800 dark:text-gray-100">{section.trim()}</p>;
                }
                if (section.type === 'code') {
                  return (
                    <CodeBlock
                      key={index}
                      code={section.content}
                      language={section.language}
                    />
                  );
                }
                return null;
              })}
            </div>

            <SocialShare
              url={currentUrl}
              title={post.title}
              description={post.excerpt}
            />

            <AuthorCard />

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">Benzer Yazılar</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {blogPosts
                  .filter(p => p.slug !== post.slug && p.category === post.category)
                  .slice(0, 2)
                  .map(relatedPost => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group block"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <img
                          src={relatedPost.imageUrl}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {relatedPost.title}
                      </h3>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}