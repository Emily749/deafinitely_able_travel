import styles from './page.module.css';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <span className="label label--accent">Legal</span>
        <h1 className={styles.title}>Privacy Policy</h1>
        <div className={styles.body}>
          <p>This privacy policy outlines how Deafinitely Able Travel collects, uses, and protects information from visitors to this site.</p>
          <h2>Data We Collect</h2>
          <p>This site does not collect personal data unless you choose to contact us directly. Any contact information you provide is used solely to respond to your enquiry.</p>
          <h2>Analytics</h2>
          <p>We use privacy-respecting analytics tools that do not track individuals across websites or share data with third parties.</p>
          <h2>Cookies</h2>
          <p>This site uses no advertising cookies. Functional cookies are used only to remember your preferences within a single session.</p>
          <h2>Contact</h2>
          <p>For any data-related questions, contact us directly via the email address on the About page.</p>
        </div>
      </div>
    </div>
  );
}
