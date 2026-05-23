'use client';

import { useState } from 'react';
import styles from './InteractiveAirportMap.module.css';

interface Hotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  name: string;
  category: 'assistance' | 'technology' | 'visual' | 'loop';
  description: string;
  tip: string;
}

const AIRPORT_MAPS: Record<string, { title: string; subtitle: string; hotspots: Hotspot[] }> = {
  'heathrow-airport': {
    title: 'Heathrow Terminal 5 Visual Map',
    subtitle: 'Sensory and visual accessibility hotspots across the main T5 Departures Hall',
    hotspots: [
      {
        id: 'assistance-t5',
        x: 22,
        y: 28,
        name: 'Assisted Travel Zone (Zone G)',
        category: 'assistance',
        description: 'Heathrow\'s main designated assistance reception. You can request a physical vibrating pager here that will alert you when your gate starts boarding.',
        tip: 'Ask the host for the "Vibrating Pager Pod" specifically to stay relaxed in any lounge or restaurant.',
      },
      {
        id: 'convo-t5',
        x: 48,
        y: 35,
        name: 'Convo BSL QR Stations',
        category: 'technology',
        description: 'Posters and desk placards featuring QR codes to connect to a free British Sign Language (BSL) video interpreter.',
        tip: 'Scan the code with your phone camera; it opens instantly in your mobile web browser — no signup required.',
      },
      {
        id: 'fids-t5',
        x: 74,
        y: 45,
        name: 'Master Visual Flight Board (FIDS)',
        category: 'visual',
        description: 'The giant overhead flight boards. T5 gates are assigned last-minute, and localized terminal sections do not announce gate changes audibly.',
        tip: 'Position yourself with a direct line of sight to these main screens. They are the single source of truth.',
      },
      {
        id: 'loop-t5',
        x: 40,
        y: 78,
        name: 'Induction T-Loop Payphones',
        category: 'loop',
        description: 'Induction loop phone systems designed for hearing aid and cochlear implant users.',
        tip: 'Switch your hearing aid or processor to the "T" (Telecoil) position to hear phone audio directly in your device.',
      },
    ],
  },
  'gatwick-airport': {
    title: 'Gatwick Terminal Transfer Map',
    subtitle: 'Visual navigation nodes connecting North and South terminal links',
    hotspots: [
      {
        id: 'shuttle-lgw',
        x: 18,
        y: 50,
        name: 'Automated Shuttle Link',
        category: 'visual',
        description: 'The driverless inter-terminal shuttle. Signage is completely visual with countdown clocks above doors.',
        tip: 'Just follow the yellow overhead signs. Once inside, high-contrast screens show the upcoming stop.',
      },
      {
        id: 'lounge-lgw',
        x: 58,
        y: 28,
        name: 'Action for Deafness Lounge',
        category: 'assistance',
        description: 'Special Assistance Seating Lounge fitted with audio-loop desks and direct flight screens.',
        tip: 'All key flight announcements are duplicated visually on LCD screens inside the seating rows.',
      },
      {
        id: 'security-lgw',
        x: 82,
        y: 68,
        name: 'Color-Coded Security Lanes',
        category: 'visual',
        description: 'High-contrast overhead red/green arrow displays to direct travelers to open security scanners.',
        tip: 'Flash the security staff a written note on your phone. They will guide you using standard hand signals.',
      },
    ],
  },
  'stansted-airport': {
    title: 'Stansted Monorail & Terminal Map',
    subtitle: 'Key visual touchpoints across the single-terminal satellite loops',
    hotspots: [
      {
        id: 'monorail-stn',
        x: 32,
        y: 58,
        name: 'Automated Track Transit Platform',
        category: 'visual',
        description: 'Platform screen doors fitted with scrolling LED displays showing gate ranges accessed by incoming monorails.',
        tip: 'Do not board the monorail until the screen above the glass doors lists your specific gate range.',
      },
      {
        id: 'signlive-stn',
        x: 68,
        y: 32,
        name: 'SignLive BSL Hub',
        category: 'technology',
        description: 'Video Relay Service (VRS) access points to communicate with terminal staff through live sign language translators.',
        tip: 'Available at the main airport services desk. Ask the representative to launch the SignLive app.',
      },
      {
        id: 'concourse-stn',
        x: 52,
        y: 80,
        name: 'Central FIDS Seating',
        category: 'visual',
        description: 'The main concourse display seating. Satellite gates have very limited food options and visual board sightlines.',
        tip: 'Stay seated in the main central hall until your screen flashes "Go to Gate" or "Boarding".',
      },
    ],
  },
};

export default function InteractiveAirportMap({ slug }: { slug: string }) {
  const mapData = AIRPORT_MAPS[slug];
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);

  if (!mapData) return null;

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'assistance':
        return 'var(--sage)';
      case 'technology':
        return 'var(--champagne)';
      case 'visual':
        return 'var(--terracotta)';
      case 'loop':
        return '#3b82f6'; // Assistive blue
      default:
        return 'var(--mid-tone)';
    }
  };

  return (
    <div className={styles.mapWrapper}>
      <div className={styles.mapHeader}>
        <span className="label label--accent">Interactive Terminal Playbook</span>
        <h3 className={styles.mapTitle}>{mapData.title}</h3>
        <p className={styles.mapSubtitle}>{mapData.subtitle}</p>
      </div>

      <div className={styles.mapContainer}>
        {/* SVG stylized map of a terminal */}
        <svg viewBox="0 0 800 400" className={styles.svgMap}>
          {/* Grid Background Lines for Tech Feel */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(28, 22, 20, 0.03)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Terminal Boundaries */}
          <path
            d="M 50 100 L 750 100 A 30 30 0 0 1 780 130 L 780 320 A 30 30 0 0 1 750 350 L 50 350 A 30 30 0 0 1 20 320 L 20 130 A 30 30 0 0 1 50 100 Z"
            fill="var(--warm-white)"
            stroke="var(--border)"
            strokeWidth="2"
          />

          {/* Runway / Airport Lines */}
          <line x1="20" y1="60" x2="780" y2="60" stroke="var(--border-light)" strokeWidth="1" strokeDasharray="5,5" />

          {/* Structural Hall partitions */}
          <line x1="250" y1="100" x2="250" y2="350" stroke="var(--border-light)" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="550" y1="100" x2="550" y2="350" stroke="var(--border-light)" strokeWidth="1" strokeDasharray="3,3" />

          {/* Text Labels inside SVG */}
          <text x="135" y="140" className={styles.svgText}>Zone A - D</text>
          <text x="400" y="140" className={styles.svgText}>Main Security & Transit</text>
          <text x="665" y="140" className={styles.svgText}>Departure Gates</text>
        </svg>

        {/* Dynamic Hotspots positioned using absolute coordinates */}
        {mapData.hotspots.map((spot) => {
          const isActive = selectedHotspot?.id === spot.id;
          const color = getCategoryColor(spot.category);

          return (
            <button
              key={spot.id}
              className={`${styles.hotspot} ${isActive ? styles.hotspotActive : ''}`}
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
                backgroundColor: color,
                boxShadow: `0 0 0 4px ${isActive ? color : 'rgba(0,0,0,0.1)'}`,
              }}
              onClick={() => setSelectedHotspot(spot)}
              aria-label={`View info for ${spot.name}`}
            >
              <span className={styles.hotspotPulse} style={{ backgroundColor: color }} />
            </button>
          );
        })}
      </div>

      {/* Selected hotspot information block */}
      <div className={styles.detailsBlock}>
        {selectedHotspot ? (
          <div className={styles.detailsCard}>
            <div className={styles.detailsHeader}>
              <span
                className={styles.categoryLabel}
                style={{ color: getCategoryColor(selectedHotspot.category) }}
              >
                {selectedHotspot.category.toUpperCase()}
              </span>
              <h4 className={styles.detailName}>{selectedHotspot.name}</h4>
            </div>
            <p className={styles.detailDesc}>{selectedHotspot.description}</p>
            <div className={styles.tipBox}>
              <span className={styles.tipTitle}>Visual Travel Tip</span>
              <p className={styles.tipText}>{selectedHotspot.tip}</p>
            </div>
          </div>
        ) : (
          <div className={styles.emptyDetails}>
            <p>Click on any pulsing hotspot on the terminal layout map above to review specific visual navigation guidelines and tips.</p>
          </div>
        )}
      </div>
    </div>
  );
}
