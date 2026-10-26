import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LotusArt, SacredGeometryRing } from './DecorativeArt';
import { sanctuaryAudio } from '../utils/sound';

interface DesignerLoadingScreenProps {
  onComplete: () => void;
}

export const DesignerLoadingScreen: React.FC<DesignerLoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Gentle progress increment simulating sacred space preparation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 600);
          }, 350);
          return 100;
        }
        // Smooth random progression
        const step = Math.floor(Math.random() * 14) + 8;
        return Math.min(prev + step, 100);
      });
    }, 110);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handlePlayChime = () => {
    sanctuaryAudio.playChime();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-[#FFF8EF] via-[#EAF2FC] to-[#F0EAF8] overflow-hidden select-none"
        >
          {/* Ambient Ethereal Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#E5D7F4]/40 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#FFF8EF]/80 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-40" />

          {/* Rotating Celestial Sacred Geometry */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            className="absolute opacity-25 pointer-events-none"
          >
            <SacredGeometryRing className="w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] text-[#D1B477]" />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-sm">
            {/* Blooming Lotus Blossom with Soft Pulse */}
            <div className="relative mb-8">
              {/* Outer Radiant Aura */}
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.35, 0.7, 0.35],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#E5D7F4] via-[#D1B477]/30 to-[#FFF8EF] blur-md"
              />

              {/* Central Lotus Container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                onClick={handlePlayChime}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 backdrop-blur-md border border-[#D1B477]/40 shadow-glow-gold flex items-center justify-center cursor-pointer group"
                title="Click for a gentle singing bowl chime"
              >
                <LotusArt className="w-10 h-10 sm:w-12 sm:h-12 text-champagne-gold transform transition-transform group-hover:scale-110 duration-300" />
              </motion.div>
            </div>

            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-serif text-3xl sm:text-4xl font-normal text-deep-blue-grey tracking-wide mb-1.5"
            >
              Jefferin Sequeira
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-[11px] uppercase tracking-[0.3em] text-[#D1B477] font-semibold mb-6"
            >
              Heal Your Trauma • Space For Your Soul
            </motion.p>

            {/* Inspiring Positive Affirmation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-serif italic text-sm text-soft-slate mb-8 h-6"
            >
              “Entering a peaceful journey inward...”
            </motion.p>

            {/* Minimal Champagne-Gold Progress Bar */}
            <div className="w-48 sm:w-56 h-[2px] bg-[#D1B477]/20 rounded-full overflow-hidden relative mb-3">
              <motion.div
                className="h-full bg-gradient-to-r from-[#D1B477] via-[#E9B9AC] to-[#D1B477]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>

            <span className="text-[10px] tracking-widest uppercase text-soft-slate/70 font-mono">
              {progress}%
            </span>
          </div>

          {/* Calming bottom footer note */}
          <div className="absolute bottom-8 text-[11px] tracking-wider text-soft-slate/80 font-light">
            Take a deep breath and soften your shoulders
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
