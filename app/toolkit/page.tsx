'use client';

import { useState } from 'react';
import { flashCards, techItems } from '@/lib/data';
import type { Metadata } from 'next';
import styles from './page.module.css';

const languages = ['All', 'French', 'Japanese', 'Spanish', 'Italian'];
const situations = ['All', 'General', 'Hotel', 'Dining', 'Transport'];
const techCategories = ['All', 'Speech to Text', 'Hearing Technology', 'Travel Alarms', 'Signal Devices', 'Sign Language Apps'];

export default function ToolkitPage() {
  const [activeLang, setActiveLang] = useState('All');
  const [activeSit, setActiveSit] = useState('All');
  const [activeTech, setActiveTech] = useState('All');
  const [copied, setCopied] = useState<string | null>(null);

  const filteredCards = flashCards.filter((c) => {
    const langMatch = activeLang === 'All' || c.language === activeLang;
    const sitMatch = activeSit === 'All' || c.situation === activeSit;
    return langMatch && sitMatch;
  });

  const filteredTech = techItems.filter((t) => activeTech === 'All' || t.category === activeTech);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <span className="label label--accent">Digital Travel Companion</span>
          <h1 className={styles.title}>Pocket Toolkit</h1>
          <p className={styles.sub}>
            Every practical tool for a seamless journey. Multilingual communication flashcards,
            tech reviews, and airport navigation guides — all in one place.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Flashcards */}
        <section className={styles.section} id="flashcards">
          <div className={styles.section__header}>
            <div>
              <span className="label label--accent">Communication</span>
              <h2 className={styles.section__title}>Visual Flashcards</h2>
              <p className={styles.section__sub}>
                Copy any card to display on your phone. Each phrase is designed to communicate your
                needs clearly, without requiring the other person to know sign language or your
                situation in advance.
              </p>
            </div>
          </div>

          <div className={styles.filter__row}>
            <div className={styles.filter__group}>
              <span className={styles.filter__label}>Language</span>
              <div className={styles.pills}>
                {languages.map((l) => (
                  <button
                    key={l}
                    className={`${styles.pill} ${activeLang === l ? styles.pill__active : ''}`}
                    onClick={() => setActiveLang(l)}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.filter__group}>
              <span className={styles.filter__label}>Situation</span>
              <div className={styles.pills}>
                {situations.map((s) => (
                  <button
                    key={s}
                    className={`${styles.pill} ${activeSit === s ? styles.pill__active : ''}`}
                    onClick={() => setActiveSit(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.cards}>
            {filteredCards.map((card) => (
              <div key={card.id} className={styles.flash}>
                <div className={styles.flash__top}>
                  <div className={styles.flash__meta}>
                    <span className={styles.flash__lang}>{card.language}</span>
                    <span className={styles.flash__sit}>{card.situation}</span>
                  </div>
                  <button
                    className={styles.copy}
                    onClick={() => handleCopy(card.text, card.id)}
                    aria-label="Copy to clipboard"
                  >
                    {copied === card.id ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <p className={styles.flash__text}>{card.text}</p>
                {card.phonetic && (
                  <p className={styles.flash__phonetic}>{card.phonetic}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Tech Edit */}
        <section className={styles.section} id="tech">
          <div className={styles.section__header}>
            <div>
              <span className="label label--sage">Reviewed & Rated</span>
              <h2 className={styles.section__title}>The Tech Edit</h2>
              <p className={styles.section__sub}>
                Hardware, apps, and devices reviewed specifically for travel use. Ratings reflect
                performance in transit environments, hotels, and public spaces.
              </p>
            </div>
          </div>

          <div className={styles.tech__filters}>
            {techCategories.map((cat) => (
              <button
                key={cat}
                className={`${styles.tech__filter} ${activeTech === cat ? styles.tech__filter__active : ''}`}
                onClick={() => setActiveTech(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.tech__grid}>
            {filteredTech.map((item) => (
              <div key={item.slug} className={styles.tech__card}>
                <div className={styles.tech__top}>
                  <span className={styles.tech__cat}>{item.category}</span>
                  <div className={styles.stars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < item.rating ? styles.star__on : styles.star__off}>
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className={styles.tech__name}>{item.name}</h3>
                <p className={styles.tech__desc}>{item.description}</p>
                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
