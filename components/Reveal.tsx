'use client';

import { useEffect } from 'react';

/** Görsel çerçevelerini ([data-reveal]) ekrana girdiklerinde bir kez açar. JS çalışmazsa görseller zaten görünür kalır. */
export default function Reveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.documentElement;
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '0px 0px 12% 0px' },
    );
    items.forEach((el) => io.observe(el));
    root.classList.add('has-reveal');
    return () => {
      io.disconnect();
      root.classList.remove('has-reveal');
    };
  }, []);

  return null;
}
