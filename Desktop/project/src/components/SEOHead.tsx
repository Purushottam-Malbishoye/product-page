import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  schema?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  schema
}) => {
  useEffect(() => {
    document.title = title;

    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);

    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.href = canonical;
    }

    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    if (ogImage) updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', 'website', true);
    if (canonical) updateMetaTag('og:url', canonical, true);

    updateMetaTag('twitter:title', twitterTitle || ogTitle || title);
    updateMetaTag('twitter:description', twitterDescription || ogDescription || description);
    if (twitterImage) updateMetaTag('twitter:image', twitterImage || ogImage || '');
    updateMetaTag('twitter:card', 'summary_large_image');

    if (schema) {
      let scriptElement = document.querySelector('script[data-seo-schema]');
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        scriptElement.setAttribute('data-seo-schema', 'true');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription, twitterImage, schema]);

  return null;
};

export default SEOHead;
