import { useEffect, useState } from 'react';

export type Route =
  | '/'
  | '/career'
  | '/privacy'
  | '/terms'
  | '/contact'
  | '/articles'
  | '/success-stories'
  | '/whitepapers'
  | '/industries'
  | '/about'
  | '/core-values'
  | '/leadership'
  | '/ai-sdr'
  | '/case-studies'
  | '/ai-search-visibility'
  | '/resources'
  | string;

export const navigate = (path: string) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export const useRouter = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return { path, navigate };
};

export const getViewFromPath = (path: string): { view: string; slug?: string } => {
  if (path === '/') return { view: 'home' };
  if (path === '/career' || path === '/careers') return { view: 'careers' };
  if (path === '/privacy' || path === '/privacy-policy') return { view: 'privacy-policy' };
  if (path === '/terms' || path === '/terms-of-service') return { view: 'terms-of-service' };
  if (path === '/contact' || path === '/contact-us') return { view: 'contact-us' };
  if (path === '/articles' || path === '/blog') return { view: 'articles' };
  if (path === '/success-stories') return { view: 'success-stories' };
  if (path === '/whitepapers') return { view: 'whitepapers' };
  if (path === '/industries') return { view: 'industries' };
  if (path === '/about' || path === '/about-firstscience') return { view: 'about-firstscience' };
  if (path === '/core-values') return { view: 'core-values' };
  if (path === '/leadership' || path === '/leadership-team') return { view: 'leadership-team' };
  if (path.startsWith('/ai-sdr')) return { view: 'ai-sdr' };
  if (path === '/case-studies') return { view: 'case-studies' };
  if (path === '/ai-search-visibility') return { view: 'ai-search-visibility' };
  if (path === '/resources') return { view: 'resources' };

  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '');
    return { view: 'blog', slug };
  }

  if (path.startsWith('/articles/')) {
    const slug = path.replace('/articles/', '');
    return { view: 'blog', slug };
  }

  return { view: 'home' };
};
