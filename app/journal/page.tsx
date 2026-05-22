'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/data';
import styles from './page.module.css';

const filters = ['All', 'Transit Guide', 'Stays & Hideaways'];

export default function JournalPage() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let list = posts;
    if (active !== 'All') {
      list = list.filter((p) =>
        active === 'Transit Guide' ? p.category === 'transit' : p.category === 'stays'
      );
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)
      );
    }
    return list;
  }, [active, query]);

  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <span className="label label--accent">The Archive</span>
          <h1 className={styles.hero__title}>The Journal</h1>
          <p className={styles.hero__sub}>
            High-end travel writing built around visual experience. Transit guides, hotel
            reviews, and destination features — all grounded in seamless, audio-free navigation.
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.controls}>
          <div className={styles.filters}>
            {filters.map((f) => (
              <button
                key={f}
                className={`${styles.filter} ${active === f ? styles.filter__active : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className={styles.search__wrap}>
            <svg className={styles.search__icon} width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search by destination, airport, hotel..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.search}
            />
            {query && (
              <button className={styles.search__clear} onClick={() => setQuery('')} aria-label="Clear search">
                &times;
              </button>
            )}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <p>No results for &ldquo;{query}&rdquo;. Try a different search term.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((post, i) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className={`${styles.post} ${i === 0 && active === 'All' && !query ? styles.post__featured : ''}`}
              >
                <div className={styles.post__img}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.img}
                  />
                  <div className={styles.img__overlay} />
                  <span className={`label ${styles.cat}`}>
                    {post.category === 'transit' ? 'Transit Guide' : 'Stays & Hideaways'}
                  </span>
                </div>
                <div className={styles.post__body}>
                  <div className={styles.post__meta}>
                    <span>{post.location}</span>
                    <span>&bull;</span>
                    <span>{post.date}</span>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className={styles.post__title}>{post.title}</h2>
                  <p className={styles.post__sub}>{post.subtitle}</p>
                  <p className={styles.post__excerpt}>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
