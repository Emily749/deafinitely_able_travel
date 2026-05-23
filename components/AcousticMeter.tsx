'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './AcousticMeter.module.css';

export default function AcousticMeter() {
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [db, setDb] = useState(30);
  const [error, setError] = useState<string | null>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const startMeter = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const audioContext = new AudioContextClass();
      audioContextRef.current = audioContext;

      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 512;
      source.connect(analyser);

      const bufferLength = analyser.fftSize;
      const dataArray = new Float32Array(bufferLength);

      setIsMeasuring(true);

      const updateMeter = () => {
        analyser.getFloatTimeDomainData(dataArray);

        // Calculate Root Mean Square (RMS)
        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
          sum += dataArray[i] * dataArray[i];
        }
        const rms = Math.sqrt(sum / bufferLength);

        // Map RMS to decibels.
        // A value of 0.0001 (low background noise) maps to ~30dB.
        // A normal speaking voice (rms ~0.02) maps to ~60-70dB.
        let dbValue = Math.round(20 * Math.log10(rms || 0.00001) + 110);

        if (dbValue < 30) dbValue = 30; // Quiet room floor
        if (dbValue > 115) dbValue = 115; // Extreme cap

        setDb(dbValue);
        animationFrameRef.current = requestAnimationFrame(updateMeter);
      };

      updateMeter();
    } catch (err: any) {
      console.error('Error accessing microphone:', err);
      setError(
        'Could not access microphone. Please check your browser permissions to enable the acoustic check.'
      );
      setIsMeasuring(false);
    }
  };

  const stopMeter = () => {
    setIsMeasuring(false);
    setDb(30);

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  };

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  // Classify decibel ranges
  let category = 'calm';
  let advice = 'Optimal environment. Background noise is low, making this an excellent space for lip-reading and tuning assistive listening devices.';
  
  if (db >= 55 && db <= 72) {
    category = 'moderate';
    advice = 'Fair environment. Ambient noise is noticeable. We recommend sitting face-to-face, ensuring your partner\'s face is well-lit for lip-reading.';
  } else if (db > 72) {
    category = 'loud';
    advice = 'Challenging environment. Assistive devices and lip-reading will be strained. We suggest finding a quieter corner or utilizing written communication.';
  }

  // Calculate meter needle angle (-90deg to +90deg based on 30dB - 110dB range)
  const minDb = 30;
  const maxDb = 110;
  const percentage = Math.min(100, Math.max(0, ((db - minDb) / (maxDb - minDb)) * 100));
  const rotation = -90 + (percentage / 100) * 180;

  return (
    <section className={styles.meterSection} id="acoustic-check">
      <div className={styles.section__header}>
        <span className="label label--sage">Acoustic Check</span>
        <h2 className={styles.section__title}>Ambient Decibel Analyzer</h2>
        <p className={styles.section__sub}>
          Analyze background noise levels in restaurants, airport lounges, or hotels to find the ideal environment.
        </p>
      </div>

      <div className={styles.meterContainer}>
        {error && <div className={styles.errorAlert}>{error}</div>}

        <div className={styles.gaugeOuter}>
          <div className={styles.gaugeInner}>
            {/* The Arch Gauge */}
            <div className={styles.gaugeArch}>
              <div className={`${styles.gaugeSector} ${styles.sectorCalm}`} />
              <div className={`${styles.gaugeSector} ${styles.sectorModerate}`} />
              <div className={`${styles.gaugeSector} ${styles.sectorLoud}`} />
            </div>

            {/* The Needle */}
            <div
              className={styles.needle}
              style={{ transform: `rotate(${rotation}deg)` }}
            />
            
            {/* Display Readout */}
            <div className={styles.readout}>
              <span className={styles.dbValue}>{db}</span>
              <span className={styles.dbLabel}>dBA</span>
            </div>
          </div>
        </div>

        {/* Level Tag indicator */}
        <div className={styles.statusRow}>
          <span className={`${styles.statusBadge} ${styles[`status--${category}`]}`}>
            {category.toUpperCase()}
          </span>
        </div>

        {/* Dynamic Advice */}
        <div className={styles.adviceBox}>
          <p className={styles.adviceText}>{advice}</p>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          {!isMeasuring ? (
            <button className={styles.startBtn} onClick={startMeter}>
              Start Ambient Scan
            </button>
          ) : (
            <button className={styles.stopBtn} onClick={stopMeter}>
              Stop Scanning
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
