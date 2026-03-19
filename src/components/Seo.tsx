import React from 'react';
import { Helmet } from 'react-helmet-async';
import { runtimeConfig } from '@/config/runtime';

interface SeoProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  locale?: string;
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage = '/og-image.jpg',
  locale = 'pt_BR',
}) => {
  const normalizedLocale = locale.includes('_') ? locale : `${locale}_${locale.toUpperCase()}`;
  const canonicalUrl = ogUrl ?? (typeof window !== 'undefined' ? window.location.href : runtimeConfig.siteUrl);
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${runtimeConfig.siteUrl}${ogImage}`;

  return (
    <Helmet>
      <html lang={normalizedLocale.split('_')[0]} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:site_name" content="BotecoPro" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={normalizedLocale} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default Seo;
