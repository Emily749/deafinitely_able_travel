import Link from 'next/link';
import Image from 'next/image';
import { cities } from '@/lib/data';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'The Concierge',
  description: 'Curated city directories for deaf and hard-of-hearing travellers. Acoustic dining, visual museums, and self-guided cultural routes.',
};

export default function ConciergePage() {
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

        <div className={styles.cities}>
          {cities.map((city) => (
            <Link key={city.city} href={`/concierge/${city.city.toLowerCase().replace(' ', '-')}`} className={styles.city}>
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
      </div>
    </>
  );
}
