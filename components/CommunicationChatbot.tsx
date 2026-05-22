'use client';

import { useState } from 'react';
import styles from './CommunicationChatbot.module.css';

// Pre-translated dictionary for instant, reliable client-side translation
const TRANSLATIONS: Record<string, Record<string, string>> = {
  English: {
    write: "I am deaf and rely on visual cues. Please write things down for me.",
    lipread: "I am hard of hearing. Please look directly at me and speak clearly.",
    quiet: "I use assistive devices. Please guide me to a quiet, well-lit environment.",
    updates: "I cannot hear standard announcements. Please notify me visually or via text.",
    thankYou: "Thank you for your assistance."
  },
  French: {
    write: "Je suis sourd(e) et je dépends des indices visuels. S'il vous plaît, écrivez-moi les choses.",
    lipread: "Je suis malentendant(e). S'il vous plaît, regardez-moi directement et parlez clairement.",
    quiet: "J'utilise des appareils auditifs. S'il vous plaît, guidez-moi vers un endroit calme et bien éclairé.",
    updates: "Je n'entends pas les annonces standard. S'il vous plaît, informez-moi visuellement ou par écrit.",
    thankYou: "Merci pour votre aide."
  },
  Spanish: {
    write: "Soy sordo/a y confío en las pistas visuales. Por favor, escríbame las cosas.",
    lipread: "Tengo dificultades auditivas. Por favor, míreme directamente y hable con claridad.",
    quiet: "Uso dispositivos de asistencia. Por favor, guíeme a un entorno tranquilo y bien iluminado.",
    updates: "No puedo escuchar los anuncios estándar. Por favor, notifíquemelo de forma visual o por texto.",
    thankYou: "Gracias por su ayuda."
  },
  German: {
    write: "Ich bin gehörlos und auf visuelle Hinweise angewiesen. Bitte schreiben Sie es für mich auf.",
    lipread: "Ich bin schwerhörig. Bitte schauen Sie mich direkt an und sprechen Sie deutlich.",
    quiet: "Ich nutze Hörhilfen. Bitte führen Sie mich in eine ruhige, gut beleuchtete Umgebung.",
    updates: "Ich kann Standarddurchsagen nicht hören. Bitte informieren Sie mich visuell oder per Text.",
    thankYou: "Vielen Dank für Ihre Unterstützung."
  },
  Italian: {
    write: "Sono sordo/a e mi affido a segnali visivi. Per favore, scriva le cose per me.",
    lipread: "Sono audoleso/a. Per favore, mi guardi direttamente e parli chiaramente.",
    quiet: "Utilizzo dispositivi di assistenza. Per favore, mi accompagni in un ambiente silenzioso e ben illuminato.",
    updates: "Non riesco a sentire gli annunci standard. Per favore, mi avvisi visivamente o via testo.",
    thankYou: "Grazie per l'assistenza."
  },
  Portuguese: {
    write: "Sou surdo(a) e dependendo de pistas visuais. Por favor, escreva para mim.",
    lipread: "Tenho deficiência auditiva. Por favor, olhe diretamente para mim e fale claramente.",
    quiet: "Uso aparelhos auditivos. Por favor, guie-me para um ambiente calmo e bem iluminado.",
    updates: "Não consigo ouvir os anúncios padrão. Por favor, notifique-me visualmente ou por texto.",
    thankYou: "Obrigado pela sua ajuda."
  },
  Dutch: {
    write: "Ik ben doof en vertrouw auf visuele aanwijzingen. Wilt u dit alstublieft opschrijven?",
    lipread: "Ik ben slechthorend. Alstublieft kijk mij recht aan en spreek duidelijk.",
    quiet: "Ik gebruik hulpmiddelen. Wilt u mij naar een rustige, goed verlichte omgeving begeleiden?",
    updates: "Ik kan de standaard omroepen niet horen. Informeer mij alstublieft visueel of via tekst.",
    thankYou: "Dank u wel voor uw hulp."
  },
  Swedish: {
    write: "Jag är döv och förlitar mig på visuella tecken. Vänligen skriv ner det till mig.",
    lipread: "Jag är hörselskadad. Vänligen titta direkt på mig och tala tydligt.",
    quiet: "Jag använder hjälpmedel. Vänligen visa mig till en lugn och välupplyst miljö.",
    updates: "Jag hör inte vanliga utrop. Vänligen meddela mig visuellt eller via sms.",
    thankYou: "Tack för din hjälp."
  },
  Japanese: {
    write: "私は耳が聞こえません。視覚的なやり取りが必要です。紙に書いて伝えてください。",
    lipread: "私は耳が不自由です。正面から口元を見せて、はっきりと話してください。",
    quiet: "補聴器を使用しています。静かで明るい場所へ案内していただけますか？",
    updates: "アナウンスが聞こえません。視覚的な案内か、文字での通知をお願いします。",
    thankYou: "ご協力ありがとうございます。"
  },
  Mandarin: {
    write: "我是听障人士，需要视觉提示。请帮我写下来。",
    lipread: "我的听力不好。请看着我并清晰地说话。",
    quiet: "我使用助听设备。请带我到一个安静且光线充足的地方。",
    updates: " class=\"notranslate\">我听不到标准广播。请通过视觉或文字方式通知我。",
    thankYou: "谢谢您的帮助。"
  },
  Arabic: {
    write: "أنا أصم وأعتمد على الإشارات البصرية. يرجى كتابة الأشياء لي.",
    lipread: "أنا ضعيف السمع. يرجى النظر إلي مباشرة والتحدث بوضوح.",
    quiet: "أستخدم أجهزة مساعدة. يرجى توجيهي إلى مكان هادئ ومضاء جيداً.",
    updates: "لا أستطيع سماع الإعلانات الصوتية. يرجى إعلامي بصرياً أو عبر رسالة نصية.",
    thankYou: "شكراً لمساعدتك."
  }
};

export default function CommunicationChatbot() {
  const [language, setLanguage] = useState('');
  const [situation, setSituation] = useState('');
  const [needKey, setNeedKey] = useState('');
  const [card, setCard] = useState<{ lang: string; sit: string; translatedNeeds: string; thankYou: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Fallback to English if translation is missing for safety
    const translatedNeeds = TRANSLATIONS[language]?.[needKey] || TRANSLATIONS['English'][needKey];
    const thankYou = TRANSLATIONS[language]?.thankYou || TRANSLATIONS['English'].thankYou;

    setCard({
      lang: language,
      sit: situation,
      translatedNeeds,
      thankYou,
    });
  };

  return (
    <section className={styles.generatorSection} id="communication-card">
      <div className={styles.section__header}>
        <div>
          <span className="label label--accent">Instant Translation</span>
          <h2 className={styles.section__title}>Communication Card</h2>
          <p className={styles.section__sub}>
            Generate a translated visual card to communicate your needs abroad seamlessly.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.generatorForm}>
        <div className={styles.formGroup}>
          <label htmlFor="language" className={styles.label}>Target Language</label>
          <select
            id="language"
            className={styles.select}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          >
            <option value="" disabled>Select a language...</option>
            {Object.keys(TRANSLATIONS).map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="situation" className={styles.label}>Context / Situation (Kept in English for your reference)</label>
          <input
            type="text"
            id="situation"
            className={styles.input}
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            placeholder="e.g., Hotel Check-in, Train Ticket Counter, Restaurant"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="communicationNeeds" className={styles.label}>What do you need to communicate?</label>
          <select
            id="communicationNeeds"
            className={styles.select}
            value={needKey}
            onChange={(e) => setNeedKey(e.target.value)}
            required
          >
            <option value="" disabled>Select your primary request...</option>
            <option value="write">Please write things down for me.</option>
            <option value="lipread">Please face me directly so I can lip-read.</option>
            <option value="quiet">Please guide me to a quiet or well-lit area.</option>
            <option value="updates">Please provide visual or text-based updates instead of announcements.</option>
          </select>
        </div>

        <button type="submit" className={styles.submitButton}>Generate Translated Card</button>
      </form>

      {card && (
        <div className={styles.cardContainer}>
          <div className={styles.generatedCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardLang}>{card.lang}</span>
              <span className={styles.cardSit}>{card.sit}</span>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardNeeds}>{card.translatedNeeds}</p>
              <p className={styles.cardFooter}>{card.thankYou}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
