import Link from 'next/link';
import Image from 'next/image';
import { cities } from '@/lib/data';
import styles from './ConciergeTeaser.module.css';

export default function ConciergeTeaser() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="label label--sage">Curated City Directories</span>
          <h2 className={styles.title}>The Concierge</h2>
          <p className={styles.sub}>
            Acoustic dining. Visual museums. Self-guided districts. Every listing
            chosen for how well it works without audio dependency.
          </p>
        </div>

        <div className={styles.grid}>
          {cities.map((city) => (
            <Link key={city.city} href={`/concierge/${city.city.toLowerCase().replace(' ', '-')}`} className={styles.card}>
              <div className={styles.card__img}>
                <Image
                  src={city.image}
                  alt={city.city}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.img}
                />
                <div className={styles.overlay} />
                <div className={styles.card__text}>
                  <p className={styles.country}>{city.country}</p>
                  <h3 className={styles.city}>{city.city}</h3>
                  <span className={styles.count}>
                    {city.dining.length + city.selfGuided.length} curated listings
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/concierge" className={styles.link}>
            Browse All Cities &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
