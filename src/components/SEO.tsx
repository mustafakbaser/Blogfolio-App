import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
  keywords?: string[];
  canonicalUrl?: string;
  lang?: string;
}

export default function SEO({ 
  title, 
  description, 
  image, 
  article,
  keywords = [],
  canonicalUrl,
  lang = 'tr'
}: SEOProps) {
  const siteTitle = 'BlogFolio - Teknoloji ve Yazılım Blogu';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultImage = '/favicon.webp';

 
  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph */}
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@mustafakbaser" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Helmet>
  );
}