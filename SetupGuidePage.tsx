import { useEffect } from 'react';

interface Props {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const IMG = 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200';
const BASE = 'https://www.zenvetix.com';

export default function SEOHead({ title, description, canonical, ogImage = IMG, noIndex = false }: Props) {
  useEffect(() => {
    document.title = title;
    const set = (attr: 'name' | 'property', key: string, val: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.content = val;
    };
    const url = canonical ? `${BASE}${canonical}` : BASE;
    let canon = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canon) { canon = document.createElement('link'); canon.rel = 'canonical'; document.head.appendChild(canon); }
    canon.href = url;
    set('name', 'description', description);
    set('name', 'robots', noIndex ? 'noindex,nofollow' : 'index,follow');
    set('property', 'og:title', title);
    set('property', 'og:description', description);
    set('property', 'og:url', url);
    set('property', 'og:image', ogImage);
    set('property', 'og:type', 'website');
    set('property', 'og:site_name', 'ZENVETIX');
    set('name', 'twitter:card', 'summary_large_image');
    set('name', 'twitter:title', title);
    set('name', 'twitter:description', description);
    set('name', 'twitter:image', ogImage);
  }, [title, description, canonical, ogImage, noIndex]);
  return null;
}
