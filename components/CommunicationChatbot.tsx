'use client';

import { useState } from 'react';
import styles from './CommunicationChatbot.module.css';

export default function CommunicationChatbot() {
  const [language, setLanguage] = useState('');
  const [situation, setSituation] = useState('');
  const [communicationNeeds, setCommunicationNeeds] = useState('');
  const [card, setCard] = useState<{ lang: string; sit: string; needs: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCard({
      lang: language,
      sit: situation,
      needs: communicationNeeds,
    });
  };

  return (
    <section className={styles.generatorSection} id="communication-card">
      <div className={styles.section__header}>
        <div>
          <span className="label label--accent">Instant Translation</span>
          <h2 className={styles.section__title}>Communication Card</h2>
          <p className={styles.section__sub}>
            Generate a clear, visual card to communicate your needs instantly.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.generatorForm}>
        <div className={styles.formGroup}>
          <label htmlFor="language" className={styles.label}>Which language do you need?</label>
          <select
            id="language"
            className={styles.select}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          >
            <option value="" disabled>Select a language...</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            <option value="Italian">Italian</option>
            <option value="German">German</option>
            <option value="Japanese">Japanese</option>
            <option value="English">English</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="situation" className={styles.label}>What is the situation?</label>
          <input
            type="text"
            id="situation"
            className={styles.input}
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            placeholder="e.g., Checking into my room, Ordering at a restaurant"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="communicationNeeds" className={styles.label}>What are your communication needs?</label>
          <select
            id="communicationNeeds"
            className={styles.select}
            value={communicationNeeds}
            onChange={(e) => setCommunicationNeeds(e.target.value)}
            required
          >
            <option value="" disabled>Select your primary need...</option>
            <option value="I am deaf and rely on visual cues. Please write things down for me.">I need you to write things down.</option>
            <option value="I am hard of hearing. Please look directly at me and speak clearly.">I rely on lip-reading.</option>
            <option value="I use assistive devices. Please guide me to a quiet, well-lit environment.">I need a quiet/well-lit table.</option>
            <option value="I cannot hear standard announcements. Please notify me visually or via text.">I require visual or text-based updates.</option>
          </select>
        </div>

        <button type="submit" className={styles.submitButton}>Generate Card</button>
      </form>

      {card && (
        <div className={styles.cardContainer}>
          <div className={styles.generatedCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardLang}>{card.lang}</span>
              <span className={styles.cardSit}>{card.sit}</span>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardNeeds}>{card.needs}</p>
              <p className={styles.cardFooter}>Thank you for your assistance.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
