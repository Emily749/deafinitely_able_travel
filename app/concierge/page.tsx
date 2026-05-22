'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cities } from '@/lib/data';
import styles from './page.module.css';

export default function ConciergePage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return cities;
    const q = query.toLowerCase();
    return cities.filter((c) => {
      if (c.city.toLowerCase().includes(q)) return true;
      if (c.country.toLowerCase().includes(q)) return true;
      if (c.dining.some((v) => v.name.toLowerCase().includes(q) || v.description.toLowerCase().includes(q))) return true;
      if (c.selfGuided.some((v) => v.name.toLowerCase().includes(q) || v.description.toLowerCase().includes(q))) return true;
      return false;
    });
  }, [query]);

  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <span className="label label--sage">Curated City Directories</span>
          <h1 className={styles.title}>The Concierge</h1>
          <p className={styles.sub}>
            Every city. Every listing chosen for its acoustic environment, lighting quality,
            visual communication, and self-guided accessibility.
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.intro}>
          <div className={styles.intro__item}>
            <span className={styles.intro__icon}>&#9675;</span>
            <div>
              <h3 className={styles.intro__h}>Acoustic & Ambient Dining</h3>
              <p className={styles.intro__body}>Restaurants with intimate lighting for lip-reading and signing, managed acoustics, and staff who communicate clearly in writing or gesture.</p>
            </div>
          </div>
          <div className={styles.intro__item}>
            <span className={styles.intro__icon}>&#9651;</span>
            <div>
              <h3 className={styles.intro__h}>Visual & Self-Guided Curations</h3>
              <p className={styles.intro__body}>Museums, galleries, and districts with rich printed materials, QR code guides, and visual storytelling that stands alone without audio narration.</p>
            </div>
          </div>
        </div>

        <div className={styles.search__row}>
          <div className={styles.search__wrap}>
            <svg className={styles.search__icon} width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search cities, restaurants, museums..."
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
          {query && (
            <p className={styles.search__count}>
              {filtered.length} {filtered.length === 1 ? 'city' : 'cities'} found
            </p>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <p>No cities found for &ldquo;{query}&rdquo;. Try a different search term.</p>
          </div>
        ) : (
          <div className={styles.cities}>
            {filtered.map((city) => (
              <Link
                key={city.city}
                href={`/concierge/${city.city.toLowerCase().replace(' ', '-')}`}
                className={styles.city}
              >
                <div className={styles.city__img}>
                  <Image
                    src={city.image}
                    alt={city.city}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.img}
                  />
                  <div className={styles.city__overlay} />
                </div>
                <div className={styles.city__body}>
                  <p className={styles.city__country}>{city.country}</p>
                  <h2 className={styles.city__name}>{city.city}</h2>
                  <div className={styles.city__counts}>
                    <span>{city.dining.length} dining listings</span>
                    <span className={styles.sep} />
                    <span>{city.selfGuided.length} self-guided curations</span>
                  </div>
                  <span className={styles.city__cta}>Explore Directory &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
