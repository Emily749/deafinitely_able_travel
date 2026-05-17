import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/data';
import styles from './FeaturedJournal.module.css';

export default function FeaturedJournal() {
  const featured = posts[0];
  const secondary = posts.slice(1, 3);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="label label--accent">From the Archive</span>
            <h2 className={styles.title}>The Journal</h2>
          </div>
          <Link href="/journal" className={styles.all}>
            View All Stories &rarr;
          </Link>
        </div>

        <div className={styles.grid}>
          {/* Featured */}
          <Link href={`/journal/${featured.slug}`} className={styles.featured}>
            <div className={styles.featured__img}>
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className={styles.img}
              />
              <div className={styles.img__overlay} />
              <span className={`label ${styles.cat}`}>
                {featured.category === 'transit' ? 'Transit Guide' : 'Stays & Hideaways'}
              </span>
            </div>
            <div className={styles.featured__body}>
              <p className={styles.meta}>{featured.location} &bull; {featured.date}</p>
              <h3 className={styles.featured__h}>{featured.title}</h3>
              <p className={styles.featured__sub}>{featured.subtitle}</p>
            </div>
          </Link>

          {/* Secondary */}
          <div className={styles.secondary}>
            {secondary.map((p) => (
              <Link key={p.slug} href={`/journal/${p.slug}`} className={styles.card}>
                <div className={styles.card__img}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className={styles.img}
                  />
                  <div className={styles.img__overlay} />
                </div>
                <div className={styles.card__body}>
                  <span className={`label ${styles.cat__small}`}>
                    {p.category === 'transit' ? 'Transit Guide' : 'Stays & Hideaways'}
                  </span>
                  <h3 className={styles.card__h}>{p.title}</h3>
                  <p className={styles.card__meta}>{p.location} &bull; {p.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
