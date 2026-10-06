import { useEffect, useState, type PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        document.querySelector(hash)?.scrollIntoView();
      } else {
        window.scrollTo({ top: 0 });
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash, pathname]);

  return null;
}

export function SiteLayout({ children }: PropsWithChildren) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <ScrollManager />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <button
        type="button"
        className={`back-to-top ${showTop ? 'is-visible' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </>
  );
}
