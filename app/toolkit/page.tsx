'use client';

import { useState } from 'react';
import { techItems } from '@/lib/data';
import styles from './page.module.css';
import CommunicationChatbot from '@/components/CommunicationChatbot';
import AcousticMeter from '@/components/AcousticMeter';
import FlightTracker from '@/components/FlightTracker';

const techCategories = ['All', 'Speech to Text', 'Hearing Technology', 'Travel Alarms', 'Signal Devices', 'Sign Language Apps'];
const tabs = ['Communication Card', 'Acoustic Check', 'Visual Flight Alert', 'The Tech Edit'];

export default function ToolkitPage() {
  const [activeTab, setActiveTab] = useState('Communication Card');
  const [activeTech, setActiveTech] = useState('All');

  const filteredTech = techItems.filter((t) => activeTech === 'All' || t.category === activeTech);

  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <span className="label label--accent">Digital Travel Companion</span>
          <h1 className={styles.title}>Pocket Toolkit</h1>
          <p className={styles.sub}>
            Every practical tool for a seamless journey. Multilingual communication flashcards,
            acoustic noise scanning, visual flight tracking, and vetted tech reviews — all in one pocket dashboard.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Tab Navigation */}
        <div className={styles.toolkitTabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tabBtn} ${activeTab === tab ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        <div className={styles.tabContent}>
          {activeTab === 'Communication Card' && (
            <CommunicationChatbot />
          )}

          {activeTab === 'Acoustic Check' && (
            <AcousticMeter />
          )}

          {activeTab === 'Visual Flight Alert' && (
            <FlightTracker />
          )}

          {activeTab === 'The Tech Edit' && (
            <section className={styles.section} id="tech">
              <div className={styles.section__header}>
                <div style={{ textAlign: 'center' }}>
                  <span className="label label--sage">Reviewed & Rated</span>
                  <h2 className={styles.section__title}>The Tech Edit</h2>
                  <p className={styles.section__sub} style={{ margin: '0 auto' }}>
                    Hardware, apps, and devices reviewed specifically for travel use. Ratings reflect
                    performance in transit environments, hotels, and public spaces.
                  </p>
                </div>
              </div>

              <div className={styles.tech__filters}>
                {techCategories.map((cat) => (
                  <button
                    key={cat}
                    className={`${styles.tech__filter} ${activeTech === cat ? styles.tech__filter__active : ''}`}
                    onClick={() => setActiveTech(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className={styles.tech__grid}>
                {filteredTech.map((item) => (
                  <div key={item.slug} className={styles.tech__card}>
                    <div className={styles.tech__top}>
                      <span className={styles.tech__cat}>{item.category}</span>
                      <div className={styles.stars}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={i < item.rating ? styles.star__on : styles.star__off}>
                            &#9733;
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className={styles.tech__name}>{item.name}</h3>
                    <p className={styles.tech__desc}>{item.description}</p>
                    <div className={styles.tags}>
                      {item.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
