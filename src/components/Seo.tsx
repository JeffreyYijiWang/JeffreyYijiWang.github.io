import { useEffect } from 'react';

const siteUrl = 'https://jeffreyyijiwang.dev';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, unknown>;
};

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.append(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value));
}

export function Seo({ title, description, path, image, type = 'website', jsonLd }: SeoProps) {
  useEffect(() => {
    const canonical = `${siteUrl}${path === '/' ? '/' : path}`;
    const imageUrl = image ? `${siteUrl}${image}` : undefined;
    document.title = title;
    setMeta('meta[name="description"]', { name: 'description', content: description });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    setMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    setMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: imageUrl ? 'summary_large_image' : 'summary',
    });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    setMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    });

    const canonicalLink =
      document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]') ??
      document.head.appendChild(document.createElement('link'));
    canonicalLink.rel = 'canonical';
    canonicalLink.href = canonical;

    const imageSelectors = ['meta[property="og:image"]', 'meta[name="twitter:image"]'];
    imageSelectors.forEach((selector) => document.head.querySelector(selector)?.remove());
    if (imageUrl) {
      setMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
      setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });
    }

    document.querySelector('#page-json-ld')?.remove();
    if (jsonLd) {
      const script = document.createElement('script');
      script.id = 'page-json-ld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.append(script);
    }
  }, [description, image, jsonLd, path, title, type]);

  return null;
}
