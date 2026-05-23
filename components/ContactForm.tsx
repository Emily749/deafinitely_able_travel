'use client';

import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mqejlazn');

  if (state.succeeded) {
    return (
      <div className={styles.successContainer}>
        <div className={styles.successIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ width: '100%', height: '100%' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className={styles.successTitle}>Thank You!</h2>
        <p className={styles.successText}>
          Your message has been received successfully. I'll read through your note and get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.input}
          placeholder="Emily Wright"
          required
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className={styles.errorText}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          placeholder="hello@example.com"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className={styles.errorText}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.label}>
          Inquiry Type
        </label>
        <select
          id="subject"
          name="subject"
          className={styles.select}
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select a topic...
          </option>
          <option value="Travel Question">Travel Question</option>
          <option value="Site Idea / Feedback">Site Idea / Feedback</option>
          <option value="Partnership / Collaboration">
            Partnership / Collaboration
          </option>
          <option value="Other">Other</option>
        </select>
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
          className={styles.errorText}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          placeholder="Share your travel questions or site ideas..."
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className={styles.errorText}
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className={styles.submitButton}
      >
        {state.submitting ? 'Sending Message...' : 'Send Message'}
      </button>
    </form>
  );
}
