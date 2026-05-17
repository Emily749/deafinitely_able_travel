import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.wordmark}>Deafinitely Able Travel</span>
            <p className={styles.tagline}>
              Seamless journeys. No audio required.
            </p>
          </div>

          <nav className={styles.nav}>
            <div className={styles.col}>
              <span className="label">Explore</span>
              <Link href="/journal">The Journal</Link>
              <Link href="/journal#transit">The Transit Guide</Link>
              <Link href="/journal#stays">Stays &amp; Hideaways</Link>
            </div>
            <div className={styles.col}>
              <span className="label">Discover</span>
              <Link href="/concierge">The Concierge</Link>
              <Link href="/concierge#dining">Acoustic Dining</Link>
              <Link href="/concierge#self-guided">Self-Guided Curations</Link>
            </div>
            <div className={styles.col}>
              <span className="label">Tools</span>
              <Link href="/toolkit">Pocket Toolkit</Link>
              <Link href="/toolkit#flashcards">Visual Flashcards</Link>
              <Link href="/toolkit#tech">The Tech Edit</Link>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Deafinitely Able Travel. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
