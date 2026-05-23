'use client';

import { useState, useEffect } from 'react';
import styles from './FlightTracker.module.css';

interface FlightData {
  number: string;
  airline: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  departure: string;
  gate: string;
  terminal: string;
  status: 'Check-in' | 'Security' | 'Proceed to Gate' | 'Boarding' | 'Final Call' | 'Departed';
  countdownMinutes: number;
  securityWait: number;
}

const PRESET_FLIGHTS: Record<string, FlightData> = {
  BA249: {
    number: 'BA249',
    airline: 'British Airways',
    from: 'London Heathrow',
    fromCode: 'LHR',
    to: 'Paris Charles de Gaulle',
    toCode: 'CDG',
    departure: '12:45',
    gate: 'A14',
    terminal: 'T5',
    status: 'Final Call',
    countdownMinutes: 8,
    securityWait: 6,
  },
  AA100: {
    number: 'AA100',
    airline: 'American Airlines',
    from: 'London Heathrow',
    fromCode: 'LHR',
    to: 'New York JFK',
    toCode: 'JFK',
    departure: '15:10',
    gate: '22',
    terminal: 'T3',
    status: 'Proceed to Gate',
    countdownMinutes: 95,
    securityWait: 14,
  },
  LH2480: {
    number: 'LH2480',
    airline: 'Lufthansa',
    from: 'London Heathrow',
    fromCode: 'LHR',
    to: 'Munich',
    toCode: 'MUC',
    departure: '10:30',
    gate: 'B38',
    terminal: 'T2',
    status: 'Departed',
    countdownMinutes: 0,
    securityWait: 4,
  },
};

export default function FlightTracker() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFlight, setActiveFlight] = useState<FlightData | null>(null);
  const [flashAlerts, setFlashAlerts] = useState(true);
  const [vibrateTriggered, setVibrateTriggered] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toUpperCase().replace(/\s+/g, '');
    if (!query) return;

    if (PRESET_FLIGHTS[query]) {
      setActiveFlight(PRESET_FLIGHTS[query]);
    } else {
      // Dynamically generate a flight based on search query
      setActiveFlight({
        number: searchQuery.trim().toUpperCase(),
        airline: 'Independent Express',
        from: 'London Heathrow',
        fromCode: 'LHR',
        to: 'Rome Fiumicino',
        toCode: 'FCO',
        departure: '14:20',
        gate: 'C53',
        terminal: 'T5',
        status: 'Boarding',
        countdownMinutes: 25,
        securityWait: 8,
      });
    }
  };

  // Simulate vibration and triggers on critical status changes
  useEffect(() => {
    if (!activeFlight) return;

    if (activeFlight.status === 'Final Call' || activeFlight.status === 'Boarding') {
      triggerVibrate();
    }
  }, [activeFlight?.status]);

  const triggerVibrate = () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([300, 100, 300, 100, 500]);
    }
    setVibrateTriggered(true);
    const timer = setTimeout(() => setVibrateTriggered(false), 2000);
    return () => clearTimeout(timer);
  };

  const getStatusColorClass = (status: string) => {
    switch (status) {
      case 'Final Call':
        return styles.statusLoud;
      case 'Boarding':
      case 'Proceed to Gate':
        return styles.statusModerate;
      case 'Departed':
        return styles.statusDark;
      default:
        return styles.statusCalm;
    }
  };

  const steps: FlightData['status'][] = ['Check-in', 'Security', 'Proceed to Gate', 'Boarding', 'Final Call', 'Departed'];
  const currentStepIndex = activeFlight ? steps.indexOf(activeFlight.status) : -1;

  return (
    <section className={styles.trackerSection} id="flight-tracker">
      <div className={styles.section__header}>
        <span className="label label--accent">Visual Flight Hub</span>
        <h2 className={styles.section__title}>Visual Boarding Board</h2>
        <p className={styles.section__sub}>
          Track your flight using dynamic timelines, real-time security queue checks, and high-contrast flash alerts.
        </p>
      </div>

      <div className={styles.trackerContainer}>
        {/* Search */}
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            placeholder="Enter Flight No. (e.g., BA249, AA100)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
            required
          />
          <button type="submit" className={styles.searchBtn}>
            Track Flight
          </button>
        </form>

        {activeFlight ? (
          <div
            className={`${styles.flightBoard} ${
              flashAlerts && activeFlight.status === 'Final Call' ? styles.boardFlash : ''
            }`}
          >
            {/* Upper details */}
            <div className={styles.boardHeader}>
              <div>
                <span className={styles.airlineName}>{activeFlight.airline}</span>
                <h3 className={styles.flightNo}>{activeFlight.number}</h3>
              </div>
              <div className={styles.headerRight}>
                <span className={`${styles.statusBadge} ${getStatusColorClass(activeFlight.status)}`}>
                  {activeFlight.status.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Itinerary */}
            <div className={styles.itinerary}>
              <div className={styles.airportNode}>
                <span className={styles.airportCode}>{activeFlight.fromCode}</span>
                <span className={styles.airportCity}>{activeFlight.from}</span>
              </div>
              <div className={styles.itineraryLine}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                  stroke="currentColor"
                  className={styles.planeIcon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </div>
              <div className={styles.airportNode} style={{ textAlign: 'right' }}>
                <span className={styles.airportCode}>{activeFlight.toCode}</span>
                <span className={styles.airportCity}>{activeFlight.to}</span>
              </div>
            </div>

            {/* Flight info grid */}
            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Terminal</span>
                <span className={styles.detailVal}>{activeFlight.terminal}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Gate</span>
                <span className={styles.detailVal}>{activeFlight.gate || 'TBA'}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Scheduled</span>
                <span className={styles.detailVal}>{activeFlight.departure}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Security Wait</span>
                <span className={styles.detailVal}>{activeFlight.securityWait} Mins</span>
              </div>
            </div>

            {/* Progress Bar / Timeline */}
            <div className={styles.timelineContainer}>
              <span className={styles.timelineTitle}>Flight Timeline</span>
              <div className={styles.timeline}>
                {steps.map((step, idx) => {
                  let stepClass = styles.stepFuture;
                  if (idx === currentStepIndex) {
                    stepClass =
                      step === 'Final Call'
                        ? styles.stepActiveAlert
                        : step === 'Boarding' || step === 'Proceed to Gate'
                        ? styles.stepActiveModerate
                        : styles.stepActive;
                  } else if (idx < currentStepIndex) {
                    stepClass = styles.stepPassed;
                  }

                  return (
                    <div key={step} className={`${styles.timelineStep} ${stepClass}`}>
                      <div className={styles.stepMarker}>
                        {idx < currentStepIndex ? '✓' : idx + 1}
                      </div>
                      <span className={styles.stepLabel}>{step}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Countdown / Flashing alert box */}
            {activeFlight.countdownMinutes > 0 && (
              <div
                className={`${styles.alertNotice} ${
                  activeFlight.status === 'Final Call' ? styles.alertNoticeDanger : ''
                }`}
              >
                <div className={styles.noticeBody}>
                  <strong>
                    {activeFlight.status === 'Final Call'
                      ? 'GATE CLOSING IMMINENTLY'
                      : 'DEPARTURE COUNTDOWN'}
                  </strong>
                  <span>
                    Gate closes in <strong>{activeFlight.countdownMinutes} minutes</strong>. Proceed to
                    Terminal {activeFlight.terminal}, Gate {activeFlight.gate} immediately.
                  </span>
                </div>
              </div>
            )}

            {/* Accessibility features panel */}
            <div className={styles.accessOptions}>
              <div className={styles.optionHeader}>
                <span className={styles.optionTitle}>Deaf Travel Assistance</span>
              </div>
              <div className={styles.optionsList}>
                <label className={styles.optionLabel}>
                  <input
                    type="checkbox"
                    checked={flashAlerts}
                    onChange={(e) => setFlashAlerts(e.target.checked)}
                    className={styles.checkbox}
                  />
                  <div>
                    <strong>Screen-Flash Alerts</strong>
                    <p>Flashes the card board when the gate enters "Final Call".</p>
                  </div>
                </label>

                <div className={styles.vibeSection}>
                  <button onClick={triggerVibrate} className={styles.vibeBtn}>
                    Test Phone Vibration Alert
                  </button>
                  {vibrateTriggered && (
                    <span className={styles.vibeFeedback}>⚠️ Device Vibrate Triggered!</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.boardEmpty}>
            <p>Enter a flight number above to monitor real-time visual progress boarding updates.</p>
          </div>
        )}
      </div>
    </section>
  );
}
