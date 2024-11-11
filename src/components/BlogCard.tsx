import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Tag } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
  readTime: string;
  category: string;
}

export default function BlogCard({ 
  title, 
  excerpt, 
  date, 
  imageUrl, 
  slug,
  readTime,
  category 
}: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <Link to={`/blog/${slug}`} className="block aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            <Tag className="w-3 h-3 mr-1" />
            {category}
          </span>
          <span className="flex items-center" title="Tahmini okuma süresi">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 leading-tight mb-2 hover:text-indigo-600 transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h2>
        <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4 flex-grow">
          {excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <time className="text-sm text-gray-500">{date}</time>
          <Link 
            to={`/blog/${slug}`}
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
          >
            Devamını Oku 
            <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}