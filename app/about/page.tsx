import Image from 'next/image';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Emily, the deaf software engineer and avid traveller behind Deafinitely Able Travel.',
};

export default function AboutPage() {
  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <span className="label label--accent">The Person Behind the Platform</span>
          <h1 className={styles.title}>About</h1>
        </div>
      </div>

      <div className="container">
        <div className={styles.layout}>
          <div className={styles.photo__col}>
            <div className={styles.photo__wrap}>
              <Image
                src="/emily.jpeg"
                alt="Emily standing on coastal limestone cliffs overlooking a calm sea"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className={styles.photo}
                priority
              />
            </div>
            <div className={styles.photo__caption}>
              <span className={styles.caption__line} />
              <span className={styles.caption__text}>January 2026</span>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.intro}>
              <h2 className={styles.name}>Hi, I'm Emily.</h2>
              <span className={styles.rule} />
            </div>

            <p className={styles.bio}>
              A deaf software engineer and avid traveller. Ever since I took part in a global
              exchange program when I was 16 years old, I have never wanted to stop travelling
              and discovering new places since.
            </p>

            <p className={styles.bio}>
              It can be a little tricky being deaf and finding places that are accessible.
              Navigating new environments such as airports presents its own challenges.
              Communicating your needs across a language barrier adds another layer on top of
              that. Every deaf traveller knows this feeling.
            </p>

            <p className={styles.bio}>
              That is why I built this website — to bring all accessible travel needs to one
              place. Accessibility guides, hotel reviews, communication tools, and travel
              product recommendations. Everything I wish had existed before my first trip.
            </p>

            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <span className="label label--sage">Accessibility Guides</span>
                <p>Terminal-by-terminal visual navigation for the world's busiest airports.</p>
              </div>
              <div className={styles.pillar}>
                <span className="label label--accent">Hotel Reviews</span>
                <p>Properties assessed on lighting, acoustics, and staff communication responsiveness.</p>
              </div>
              <div className={styles.pillar}>
                <span className="label label--sage">Communication Tools</span>
                <p>Multilingual flashcards and real-time speech-to-text app reviews for travel use.</p>
              </div>
              <div className={styles.pillar}>
                <span className="label label--accent">Product Recommendations</span>
                <p>Hearing technology, vibrating alarms, and assistive devices tested on the road.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
