import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Have a travel question or ideas for Deafinitely Able Travel? Send a message to Emily Wright.',
};

export default function ContactPage() {
  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <span className="label label--accent">Get in Touch</span>
          <h1 className={styles.title}>Contact</h1>
        </div>
      </div>

      <div className="container">
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <h2 className={styles.heading}>Let's Start a Conversation</h2>
            <p className={styles.text}>
              Have a question about an accessibility guide, a destination review, or ideas for the site?
              Or perhaps you'd just like to share your own experiences travelling as a deaf or
              hard-of-hearing adventurer. I'd love to hear from you.
            </p>
            <p className={styles.text}>
              Fill out the form, and I will get back to you as soon as possible. Because I am
              often travelling or working in different time zones, email is the best way to reach me.
            </p>

            <div className={styles.infoSection}>
              <h3 className={styles.infoTitle}>Other Ways to Connect</h3>
              <ul className={styles.infoList}>
                <li className={styles.infoItem}>
                  <span className={styles.infoLabel}>Direct Email</span>
                  <a href="mailto:emily@deafinitelyabletravel.com" className={styles.infoValue}>
                    emily@deafinitelyabletravel.com
                  </a>
                </li>
                <li className={styles.infoItem}>
                  <span className={styles.infoLabel}>Based In</span>
                  <span className={styles.infoValue}>London, UK & Worldwide</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.formContainer}>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
