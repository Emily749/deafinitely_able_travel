import styles from './Manifesto.module.css';

export default function Manifesto() {
  return (
    <section className={styles.manifesto}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className="label label--accent">Our Position</span>
          <span className={styles.rule} />
        </div>
        <div className={styles.right}>
          <h2 className={styles.statement}>
            The travel industry was not designed for you. We are here to change
            that — not with workarounds, but with a better standard.
          </h2>
          <p className={styles.body}>
            Deafinitely Able Travel exists for discerning deaf and hard-of-hearing adults
            who expect the same quality of experience as any other traveller. We do not
            accommodate. We curate. Every guide, review, and tool on this platform starts
            from the same premise: your journey should be seamless, beautiful, and entirely
            on your terms.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.stat__num}>466M</span>
              <span className={styles.stat__label}>People worldwide with disabling hearing loss</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.stat__num}>0</span>
              <span className={styles.stat__label}>High-end travel platforms built around them. Until now.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
