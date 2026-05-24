import Link from 'next/link';
import styles from './ToolkitTeaser.module.css';

const features = [
  {
    num: '01',
    label: 'Visual Flashcards',
    desc: 'Multilingual communication cards ready to display directly from your phone. Cover hotels, dining, transport, and general interactions.',
  },
  {
    num: '02',
    label: 'The Tech Edit',
    desc: 'Reviewed speech-to-text apps, waterproof hearing aid equipment, vibrating travel alarms, and real-time captioning tools.',
  },
  {
    num: '03',
    label: 'Airport Fast-Track Guide',
    desc: 'Step-by-step visual navigation guides for the world\'s busiest terminals — covering fast-track, lounges, and gate protocols.',
  },
];

export default function ToolkitTeaser() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className="label label--accent">Digital Travel Companion</span>
          <h2 className={styles.title}>Travel Tools &amp; Resources</h2>
          <p className={styles.body}>
            Accessibility-focused tools designed to enhance your travel experience.
          </p>
        </div>
        <div className={styles.right}>
          {features.map((f) => (
            <div key={f.num} className={styles.feature}>
              <span className={styles.num}>{f.num}</span>
              <div>
                <h3 className={styles.feature__label}>{f.label}</h3>
                <p className={styles.feature__desc}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
