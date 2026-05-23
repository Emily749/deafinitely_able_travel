'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/journal', label: 'The Journal' },
    { href: '/concierge', label: 'The Concierge' },
    { href: '/toolkit', label: 'Pocket Toolkit' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.wordmark}>
          <span className={styles.wordmark__main}>Deafinitely Able</span>
          <span className={styles.wordmark__sub}>Travel</span>
        </Link>

        <nav className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/toolkit" className={styles.cta} onClick={() => setMenuOpen(false)}>
            Get the Toolkit
          </Link>
        </nav>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.line_open : ''}></span>
          <span className={menuOpen ? styles.line_open : ''}></span>
          <span className={menuOpen ? styles.line_open : ''}></span>
        </button>
      </div>
    </header>
  );
}
