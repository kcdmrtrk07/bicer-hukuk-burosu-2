'use client';

import { useEffect, useState } from 'react';
import { nav } from '../content/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  // Hero bittikten sonra başlık koyu bir zemine oturur; açık renkli bölümlerde de okunur kalır.
  useEffect(() => {
    const hero = document.getElementById('top');
    const onScroll = () => {
      const limit = hero ? hero.offsetTop + hero.offsetHeight - 90 : 0;
      setSolid(window.scrollY > limit);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <header className="header" data-open={open} data-solid={solid}>
      <a className="brand" href="#top" aria-label="Biçer Hukuk Bürosu">
        <span className="brandName">BİÇER</span>
        <span className="brandSub">HUKUK BÜROSU</span>
      </a>
      <button
        className="menuBtn"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? 'KAPAT' : 'MENÜ'}
      </button>
      <nav className="nav" id="site-nav" aria-label="Ana menü">
        {nav.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
