import { useEffect, useRef, useState, type PropsWithChildren } from 'react';

export function Reveal({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [visible, setVisible] = useState(reducedMotion);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}
