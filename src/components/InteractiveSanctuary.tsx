import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RefreshCw, Sparkles } from 'lucide-react';
import { LotusArt, SacredGeometryRing } from './DecorativeArt';
import { sanctuaryAudio } from '../utils/sound';

export const InteractiveSanctuary: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');
  const [cycleCount, setCycleCount] = useState(0);

  const affirmations = [
    '“Peace is not the absence of noise, but the quiet center within you.”',
    '“You do not have to carry everything all at once. Set it down for this breath.”',
    '“In stillness, your natural clarity gently returns.”',
    '“Breathe in gentleness; breathe out whatever is ready to release.”',
  ];

  const [currentAffirmationIndex, setCurrentAffirmationIndex] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isActive) {
      // 4s Inhale -> 4s Hold -> 6s Exhale
      if (phase === 'Inhale') {
        sanctuaryAudio.playChime();
        timer = setTimeout(() => {
          setPhase('Hold');
        }, 4000);
      } else if (phase === 'Hold') {
        timer = setTimeout(() => {
          setPhase('Exhale');
        }, 3500);
      } else if (phase === 'Exhale') {
        timer = setTimeout(() => {
          setCycleCount((c) => c + 1);
          setPhase('Inhale');
          setCurrentAffirmationIndex((idx) => (idx + 1) % affirmations.length);
        }, 5500);
      }
    }

    return () => clearTimeout(timer);
  }, [isActive, phase]);

  const handleToggle = () => {
    if (!isActive) {
      setIsActive(true);
      setPhase('Inhale');
    } else {
      setIsActive(false);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setPhase('Inhale');
    setCycleCount(0);
  };

  return (
    <section id="sanctuary" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#FFF8EF]/60 via-[#EAF2FC]/80 to-[#FFF8EF]/50 overflow-hidden">
      {/* Background celestial ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
        <SacredGeometryRing className="w-[500px] h-[500px] text-[#D1B477]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#D1B477]/30 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-deep-blue-grey uppercase">
            A Moment of Stillness
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-deep-blue-grey mb-3">
          The <span className="italic">Breathing Sanctuary</span>
        </h2>
        <p className="text-sm sm:text-base text-soft-slate font-light max-w-lg mx-auto mb-10 leading-relaxed">
          Before continuing your journey, take sixty seconds to pause. Allow this gentle breath pacer to guide your nervous system into restorative stillness.
        </p>

        {/* The Animated Breathing Sphere Container */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto flex items-center justify-center mb-8">
          
          {/* Outer Pulsing Rings */}
          <motion.div
            animate={{
              scale: isActive ? (phase === 'Inhale' ? 1.25 : phase === 'Hold' ? 1.25 : 0.85) : 1,
              opacity: isActive ? (phase === 'Inhale' ? 0.7 : phase === 'Hold' ? 0.8 : 0.4) : 0.4,
            }}
            transition={{
              duration: phase === 'Inhale' ? 4 : phase === 'Hold' ? 3.5 : 5.5,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E5D7F4] via-[#FFF8EF] to-[#E9B9AC]/40 blur-xl"
          />

          <motion.div
            animate={{
              scale: isActive ? (phase === 'Inhale' ? 1.15 : phase === 'Hold' ? 1.15 : 0.9) : 1,
              rotate: isActive ? 180 : 0,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-4 rounded-full border border-dashed border-[#D1B477]/40 pointer-events-none"
          />

          {/* Central Sacred Lotus & Breathing Indicator */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-white/90 backdrop-blur-md border border-[#D1B477]/40 shadow-glow-gold flex flex-col items-center justify-center p-4">
            <LotusArt className="w-10 h-10 sm:w-12 sm:h-12 text-champagne-gold mb-2" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={phase + isActive}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <span className="font-serif text-2xl font-medium text-deep-blue-grey block">
                  {isActive ? phase : 'Stillness'}
                </span>
                <span className="text-[11px] text-soft-slate tracking-widest uppercase">
                  {isActive
                    ? phase === 'Inhale'
                      ? 'Inhale Slowly'
                      : phase === 'Hold'
                      ? 'Rest in Stillness'
                      : 'Gently Exhale'
                    : 'Click to Begin'}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Breathing Controls */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <button
            onClick={handleToggle}
            type="button"
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-deep-blue-grey hover:bg-[#253345] shadow-sm transition-all"
          >
            {isActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span>{isActive ? 'Pause Pacer' : 'Begin Breathing'}</span>
          </button>

          {isActive && (
            <button
              onClick={handleReset}
              type="button"
              className="p-2.5 rounded-full bg-white border border-[#D1B477]/30 text-soft-slate hover:text-deep-blue-grey transition-colors"
              title="Reset cycle"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Subtle Soul Affirmation */}
        <div className="max-w-md mx-auto min-h-[48px] flex items-center justify-center">
          <p className="font-serif italic text-base sm:text-lg text-deep-blue-grey/85 transition-all">
            {affirmations[currentAffirmationIndex]}
          </p>
        </div>

        {cycleCount > 0 && (
          <p className="text-[11px] tracking-wider uppercase text-[#D1B477] font-medium mt-3">
            {cycleCount} Mindful Breath{cycleCount > 1 ? 's' : ''} Completed
          </p>
        )}

      </div>
    </section>
  );
};
