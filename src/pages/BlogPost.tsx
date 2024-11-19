import React, { useEffect } from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { Clock, Calendar, Tag, AlertCircle, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CodeBlock from '../components/CodeBlock';
import SEO from '../components/SEO';
import AuthorCard from '../components/AuthorCard';
import SocialShare from '../components/SocialShare';
import { ContentSection } from '../types/blog';
import { parseMarkdownLinks } from '../utils/parseMarkdownLinks';

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

  const currentUrl = window.location.href;

  function renderContent(section: ContentSection) {
    switch (section.type) {
      case 'text':
        return (
          <p className="mb-6 text-gray-800 dark:text-gray-200 leading-relaxed">
            {parseMarkdownLinks(section.content)}
          </p>
        );
      case 'code':
        return (
          <CodeBlock
            code={section.content}
            language={section.language}
          />
        );
      case 'heading':
        const HeadingTag = `h${section.level}` as keyof JSX.IntrinsicElements;
        const headingClasses = {
          1: 'text-4xl font-bold mb-8',
          2: 'text-3xl font-bold mb-6',
          3: 'text-2xl font-bold mb-4',
          4: 'text-xl font-bold mb-4',
          5: 'text-lg font-bold mb-3',
          6: 'text-base font-bold mb-3'
        }[section.level];
        
        return (
          <HeadingTag className={`${headingClasses} text-gray-900 dark:text-gray-100`}>
            {parseMarkdownLinks(section.content)}
          </HeadingTag>
        );
      case 'link':
        return (
          <a
            href={section.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline inline-block mb-6"
          >
            {section.content} →
          </a>
        );
      case 'divider':
        return (
          <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />
        );
      case 'image':
        return (
          <figure className="my-8">
            <img
              src={section.url}
              alt={section.alt}
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
            {section.caption && (
              <figcaption className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                {section.caption}
              </figcaption>
            )}
          </figure>
        );
      case 'quote':
        return (
          <blockquote className="my-8 pl-4 border-l-4 border-indigo-500 dark:border-indigo-400">
            <p className="text-lg italic text-gray-800 dark:text-gray-200">
              {parseMarkdownLinks(section.content)}
            </p>
            {(section.author || section.source) && (
              <footer className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {section.author && <span className="font-medium">{section.author}</span>}
                {section.author && section.source && <span className="mx-1">•</span>}
                {section.source && <cite>{section.source}</cite>}
              </footer>
            )}
          </blockquote>
        );
      case 'list':
        const ListTag = section.ordered ? 'ol' : 'ul';
        return (
          <ListTag className={`my-6 pl-6 space-y-2 ${section.ordered ? 'list-decimal' : 'list-disc'}`}>
            {section.items.map((item, index) => (
              <li key={index} className="text-gray-800 dark:text-gray-200">
                {parseMarkdownLinks(item)}
              </li>
            ))}
          </ListTag>
        );
      case 'table':
        return (
          <div className="my-8 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              {section.caption && (
                <caption className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  {section.caption}
                </caption>
              )}
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  {section.headers.map((header, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      {parseMarkdownLinks(header)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                {section.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                      >
                        {parseMarkdownLinks(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'alert':
        const alertStyles = {
          info: {
            bg: 'bg-blue-50 dark:bg-blue-900/20',
            border: 'border-blue-200 dark:border-blue-800',
            text: 'text-blue-800 dark:text-blue-200',
            icon: AlertCircle
          },
          warning: {
            bg: 'bg-yellow-50 dark:bg-yellow-900/20',
            border: 'border-yellow-200 dark:border-yellow-800',
            text: 'text-yellow-800 dark:text-yellow-200',
            icon: AlertTriangle
          },
          success: {
            bg: 'bg-green-50 dark:bg-green-900/20',
            border: 'border-green-200 dark:border-green-800',
            text: 'text-green-800 dark:text-green-200',
            icon: CheckCircle
          },
          error: {
            bg: 'bg-red-50 dark:bg-red-900/20',
            border: 'border-red-200 dark:border-red-800',
            text: 'text-red-800 dark:text-red-200',
            icon: XCircle
          }
        }[section.variant];

        const Icon = alertStyles.icon;

        return (
          <div className={`my-6 p-4 rounded-lg border ${alertStyles.bg} ${alertStyles.border}`}>
            <div className="flex">
              <Icon className={`h-5 w-5 ${alertStyles.text} mr-3 flex-shrink-0 mt-0.5`} />
              <div className={alertStyles.text}>{parseMarkdownLinks(section.content)}</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

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
              {post.content.map((section, index) => (
                <React.Fragment key={index}>
                  {renderContent(section)}
                </React.Fragment>
              ))}
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