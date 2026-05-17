import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <span className="label label--accent">404</span>
      <h1 className={styles.title}>Page not found.</h1>
      <p className={styles.body}>
        The page you were looking for does not exist, or has moved.
      </p>
      <Link href="/" className={styles.link}>
        Return Home &rarr;
      </Link>
    </div>
  );
}
