import { useEffect } from 'react';
import { SEOMetadata, defaultSEO } from '@/utils/seo';

interface SEOProps {
  metadata: SEOMetadata;
}

const SEO = ({ metadata }: SEOProps) => {
  const seo = { ...defaultSEO, ...metadata };
  const baseUrl = window.location.origin;
  const currentUrl = window.location.href;

  useEffect(() => {
    document.title = seo.title;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);

      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }

      element.setAttribute('href', href);
    };

    updateMetaTag('description', seo.description);

    if (seo.keywords) {
      updateMetaTag('keywords', seo.keywords);
    }

    updateMetaTag('og:title', seo.ogTitle || seo.title, true);
    updateMetaTag('og:description', seo.ogDescription || seo.description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', seo.ogUrl || currentUrl, true);

    if (seo.ogImage) {
      const fullImageUrl = seo.ogImage.startsWith('http')
        ? seo.ogImage
        : `${baseUrl}${seo.ogImage}`;
      updateMetaTag('og:image', fullImageUrl, true);
    }

    updateMetaTag('twitter:card', seo.twitterCard || 'summary_large_image');
    updateMetaTag('twitter:title', seo.twitterTitle || seo.title);
    updateMetaTag('twitter:description', seo.twitterDescription || seo.description);

    if (seo.twitterImage || seo.ogImage) {
      const imageUrl = seo.twitterImage || seo.ogImage;
      const fullImageUrl = imageUrl?.startsWith('http')
        ? imageUrl
        : `${baseUrl}${imageUrl}`;
      updateMetaTag('twitter:image', fullImageUrl);
    }

    updateLinkTag('canonical', seo.canonical || currentUrl);

    return () => {
      document.title = defaultSEO.title;
    };
  }, [seo, baseUrl, currentUrl]);

  return null;
};

export default SEO;
