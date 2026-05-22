'use client';

import { useState } from 'react';
import styles from './CommunicationChatbot.module.css';

export default function CommunicationChatbot() {
  const [language, setLanguage] = useState('');
  const [situation, setSituation] = useState('');
  const [communicationNeeds, setCommunicationNeeds] = useState('');
  const [card, setCard] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to an AI model
    // to generate the communication card. For this example, we'll
    // simulate a response.
    const generatedCard = `Language: ${language}\nSituation: ${situation}\nNeeds: ${communicationNeeds}\n\nThis is a simulated communication card.`;
    setCard(generatedCard);
  };

  return (
    <section className={styles.chatbotSection} id="communication-chatbot">
      <div className={styles.section__header}>
        <div>
          <span className="label label--accent">AI-Powered</span>
          <h2 className={styles.section__title}>Communication Chatbot</h2>
          <p className={styles.section__sub}>
            Generate personalized communication cards by answering a few questions.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.chatbotForm}>
        <div className={styles.formGroup}>
          <label htmlFor="language" className={styles.label}>What language do you need?</label>
          <input
            type="text"
            id="language"
            className={styles.input}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="e.g., French, Japanese"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="situation" className={styles.label}>What situation are you in?</label>
          <input
            type="text"
            id="situation"
            className={styles.input}
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            placeholder="e.g., At a restaurant, checking into a hotel"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="communicationNeeds" className={styles.label}>What are your communication needs?</label>
          <textarea
            id="communicationNeeds"
            className={styles.textarea}
            value={communicationNeeds}
            onChange={(e) => setCommunicationNeeds(e.target.value)}
            placeholder="e.g., I need to explain I am deaf and rely on visual cues, I need to ask for a vegetarian meal."
            rows={4}
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>Generate Communication Card</button>
      </form>

      {card && (
        <div className={styles.generatedCard}>
          <h3>Generated Card:</h3>
          <p>{card}</p>
        </div>
      )}
    </section>
  );
}
