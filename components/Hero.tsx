import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrap}>
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2400&q=85&auto=format&fit=crop"
          alt="Dramatic mountain landscape above the clouds"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.eyebrow}>
          <span className={styles.line} />
          <span className={styles.eyebrow__text}>High-End. Independent. Fully Visual.</span>
        </div>

        <h1 className={styles.headline}>
          Travel Without<br />
          <em>Limits.</em>
        </h1>

        <p className={styles.sub}>
          Curated guides, city directories, and digital tools for deaf and hard-of-hearing
          travellers who refuse to compromise on the quality of their journey.
        </p>

        <div className={styles.actions}>
          <Link href="/journal" className={styles.btn__primary}>
            Read the Journal
          </Link>
          <Link href="/toolkit" className={styles.btn__ghost}>
            Get the Toolkit
          </Link>
        </div>
      </div>

      <div className={styles.scroll}>
        <span className={styles.scroll__label}>Scroll</span>
        <span className={styles.scroll__line} />
      </div>
    </section>
  );
}
