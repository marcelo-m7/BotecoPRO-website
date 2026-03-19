import React from 'react';
import { Helmet } from 'react-helmet-async';
import { appConfig } from '@/config/app';

interface SeoProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  locale?: string;
  keywords?: string[];
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage = '/og-image.jpg',
  locale = 'pt',
  keywords = [],
}) => {
  const canonicalUrl = ogUrl || (typeof window !== 'undefined' ? window.location.href : appConfig.brand.websiteUrl);
  const language = locale.split('_')[0];

  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:site_name" content={appConfig.brand.productName} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default Seo;
