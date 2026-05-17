import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { cities } from '@/lib/data';
import type { Metadata } from 'next';
import styles from './page.module.css';

type Props = { params: { city: string } };

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.city.toLowerCase().replace(' ', '-') }));
}

export function generateMetadata({ params }: Props): Metadata {
  const city = cities.find((c) => c.city.toLowerCase().replace(' ', '-') === params.city);
  if (!city) return { title: 'Not Found' };
  return {
    title: `${city.city} Concierge`,
    description: `Curated acoustic dining and self-guided curations in ${city.city} for deaf and hard-of-hearing travellers.`,
  };
}

export default function CityPage({ params }: Props) {
  const city = cities.find((c) => c.city.toLowerCase().replace(' ', '-') === params.city);
  if (!city) notFound();

  return (
    <>
      <div className={styles.cover}>
        <Image src={city.image} alt={city.city} fill priority sizes="100vw" className={styles.cover__img} />
        <div className={styles.overlay} />
        <div className={`container ${styles.cover__content}`}>
          <Link href="/concierge" className={styles.back}>&larr; All Cities</Link>
          <p className={styles.country}>{city.country}</p>
          <h1 className={styles.title}>{city.city}</h1>
          <p className={styles.meta}>
            {city.dining.length} acoustic dining listings &bull; {city.selfGuided.length} self-guided curations
          </p>
        </div>
      </div>

      <div className="container">
        <section className={styles.section} id="dining">
          <div className={styles.section__header}>
            <span className="label label--sage">Acoustic & Ambient Dining</span>
            <h2 className={styles.section__title}>
              Restaurants curated for intimate lighting and managed acoustics.
            </h2>
          </div>
          <div className={styles.grid}>
            {city.dining.map((venue, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.card__top}>
                  <div>
                    <p className={styles.venue__type}>{venue.type}</p>
                    <h3 className={styles.venue__name}>{venue.name}</h3>
                  </div>
                  <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className={styles.venue__desc}>{venue.description}</p>
                <div className={styles.tags}>
                  {venue.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} id="self-guided">
          <div className={styles.section__header}>
            <span className="label label--accent">Visual & Self-Guided</span>
            <h2 className={styles.section__title}>
              Museums, galleries, and districts built for independent exploration.
            </h2>
          </div>
          <div className={styles.grid}>
            {city.selfGuided.map((venue, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.card__top}>
                  <div>
                    <p className={styles.venue__type}>{venue.type}</p>
                    <h3 className={styles.venue__name}>{venue.name}</h3>
                  </div>
                  <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className={styles.venue__desc}>{venue.description}</p>
                <div className={styles.tags}>
                  {venue.tags.map((tag) => (
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
