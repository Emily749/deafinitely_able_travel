import styles from '../privacy/page.module.css';

export const metadata = { title: 'Terms of Use' };

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <span className="label label--accent">Legal</span>
        <h1 className={styles.title}>Terms of Use</h1>
        <div className={styles.body}>
          <p>By accessing and using Deafinitely Able Travel, you accept the following terms in full.</p>
          <h2>Content</h2>
          <p>All editorial content on this site is original. Reviews and recommendations represent the experiences and opinions of our editorial team and are not influenced by commercial relationships.</p>
          <h2>Accuracy</h2>
          <p>We make every effort to ensure listings and guides are accurate at the time of publication. Venues, services, and accessibility features change. Always verify current accessibility provisions directly with the venue before travel.</p>
          <h2>External Links</h2>
          <p>Links to third-party sites are provided for convenience. We take no responsibility for the content or accessibility of external sites.</p>
          <h2>Intellectual Property</h2>
          <p>All text, design, and imagery on this site is the property of Deafinitely Able Travel unless otherwise credited. Do not reproduce without permission.</p>
        </div>
      </div>
    </div>
  );
}
