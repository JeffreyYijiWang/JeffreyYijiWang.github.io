import { useEffect, useRef, useState } from 'react';
import type { ProjectMedia } from '../types';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './Icons';

function MediaImage({ media, eager = false }: { media: ProjectMedia; eager?: boolean }) {
  const reduced = useReducedMotion();
  const animated = media.src.toLowerCase().endsWith('.gif');
  const [motionEnabled, setMotionEnabled] = useState(false);

  if (animated && reduced && !motionEnabled) {
    return (
      <div className="motion-placeholder">
        <p>Animated preview paused for reduced-motion preferences.</p>
        <button type="button" onClick={() => setMotionEnabled(true)}>
          Load animation
        </button>
      </div>
    );
  }

  return (
    <img
      src={media.src}
      alt={media.alt}
      width="1200"
      height="750"
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
    />
  );
}

export function MediaGallery({ media, title }: { media: ProjectMedia[]; title: string }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const reducedMotion = useReducedMotion();
  const [autoplayPaused, setAutoplayPaused] = useState(reducedMotion);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion || autoplayPaused || lightbox || media.length < 2) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % media.length), 6500);
    return () => window.clearInterval(timer);
  }, [autoplayPaused, lightbox, media.length, reducedMotion]);

  useEffect(() => {
    if (!lightbox) return;
    const previous = document.activeElement as HTMLElement | null;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(false);
      if (event.key === 'ArrowLeft')
        setActive((index) => (index - 1 + media.length) % media.length);
      if (event.key === 'ArrowRight') setActive((index) => (index + 1) % media.length);
      if (event.key === 'Tab') {
        const focusable = Array.from(
          dialogRef.current?.querySelectorAll<HTMLElement>('button, [href], [tabindex]') ?? [],
        ).filter((element) => !element.hasAttribute('disabled'));
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.body.classList.add('has-dialog');
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.classList.remove('has-dialog');
      document.removeEventListener('keydown', onKey);
      previous?.focus();
    };
  }, [lightbox, media.length]);

  const previous = () => setActive((index) => (index - 1 + media.length) % media.length);
  const next = () => setActive((index) => (index + 1) % media.length);
  const current = media[active];

  return (
    <div className="media-gallery" aria-label={`${title} media gallery`}>
      <button
        type="button"
        className="media-gallery__main"
        aria-label={`Open larger view: ${current.alt}`}
        onClick={() => setLightbox(true)}
      >
        <MediaImage key={current.src} media={current} eager={active === 0} />
      </button>
      {current.caption && (
        <p className="media-caption" aria-live="polite">
          {current.caption}
        </p>
      )}
      {media.length > 1 && (
        <div className="media-gallery__controls">
          <button type="button" onClick={previous} aria-label="Previous image">
            <ChevronLeftIcon />
          </button>
          <div className="media-gallery__dots" role="tablist" aria-label="Choose image">
            {media.map((item, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-label={`Image ${index + 1}: ${item.alt}`}
                key={item.src}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
          <button type="button" onClick={next} aria-label="Next image">
            <ChevronRightIcon />
          </button>
          {!reducedMotion && (
            <button
              type="button"
              className="media-gallery__autoplay"
              aria-label={autoplayPaused ? 'Play slideshow' : 'Pause slideshow'}
              onClick={() => setAutoplayPaused((paused) => !paused)}
            >
              {autoplayPaused ? 'Play' : 'Pause'}
            </button>
          )}
        </div>
      )}
      {lightbox && (
        <div
          ref={dialogRef}
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image viewer`}
        >
          <button
            ref={closeRef}
            type="button"
            className="lightbox__close"
            onClick={() => setLightbox(false)}
          >
            <CloseIcon />
            <span className="visually-hidden">Close image viewer</span>
          </button>
          <div className="lightbox__media">
            <MediaImage key={`lightbox-${current.src}`} media={current} eager />
            <p>{current.caption ?? current.alt}</p>
          </div>
          {media.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox__previous"
                onClick={previous}
                aria-label="Previous image"
              >
                <ChevronLeftIcon />
              </button>
              <button
                type="button"
                className="lightbox__next"
                onClick={next}
                aria-label="Next image"
              >
                <ChevronRightIcon />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
