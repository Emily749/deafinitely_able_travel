'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/data';
import styles from './page.module.css';

const filters = ['All', 'Transit Guide', 'Stays & Hideaways'];

export default function JournalPage() {
  const [active, setActive] = useState('All');

  const filtered = posts.filter((p) => {
    if (active === 'All') return true;
    if (active === 'Transit Guide') return p.category === 'transit';
    return p.category === 'stays';
  });

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

        <div className={styles.grid}>
          {filtered.map((post, i) => (
            <Link key={post.slug} href={`/journal/${post.slug}`} className={`${styles.post} ${i === 0 && active === 'All' ? styles.post__featured : ''}`}>
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
      </div>
    </>
  );
}
