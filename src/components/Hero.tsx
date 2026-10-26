import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { LotusArt, SacredGeometryRing, BotanicalSprig } from './DecorativeArt';
import { sanctuaryAudio } from '../utils/sound';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const handlePlayChime = () => {
    sanctuaryAudio.playChime();
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden flex items-center bg-gradient-to-b from-[#EAF2FC] via-[#F4F8FD] to-[#EAF2FC]"
    >
      {/* Soft atmospheric watercolor layers & subtle light rays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Lavender ethereal glow at top right */}
        <div className="absolute -top-24 -right-24 w-[550px] h-[550px] rounded-full bg-[#E5D7F4]/40 blur-3xl" />
        
        {/* Warm Ivory radiance behind practitioner */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#FFF8EF]/80 blur-3xl" />

        {/* Muted Coral delicate warm wash */}
        <div className="absolute bottom-10 left-10 w-[420px] h-[420px] rounded-full bg-[#E9B9AC]/20 blur-3xl" />

        {/* Champagne gold delicate halo */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#D1B477]/10 blur-[100px]" />

        {/* Sacred Geometry background line art */}
        <div className="absolute top-12 right-12 opacity-35">
          <SacredGeometryRing className="w-[450px] h-[450px] text-[#D1B477]" />
        </div>

        {/* Delicate floating botanical sprigs */}
        <div className="absolute bottom-16 left-6 opacity-30 hidden sm:block">
          <BotanicalSprig className="w-20 h-36 text-muted-sage" />
        </div>
        <div className="absolute top-28 left-1/3 opacity-25 hidden md:block">
          <BotanicalSprig className="w-16 h-28 text-muted-sage" flipped />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Editorial Content Column (7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-[#D1B477]/35 w-fit mb-6 shadow-sm">
              <LotusArt className="w-4 h-4 text-champagne-gold" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-deep-blue-grey uppercase">
                Heal Your Trauma • Space For Your Soul
              </span>
            </div>

            {/* Headline with expressive editorial serif typography */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] font-normal text-deep-blue-grey mb-6">
              Reconnect With the{' '}
              <span className="italic font-light text-[#2a3c52] bg-gradient-to-r from-deep-blue-grey via-[#4A5D77] to-deep-blue-grey bg-clip-text">
                Peace Within You.
              </span>
            </h1>

            {/* Supporting paragraph incorporating authentic reference */}
            <p className="text-base sm:text-lg text-soft-slate max-w-xl font-light leading-relaxed mb-8">
              Discover inner peace, trauma healing, and emotional resilience with <strong className="font-medium text-deep-blue-grey">Jefferin Sequeira</strong>. A gentle, dedicated sanctuary to heal inner wounds, release emotional blockages, and restore your authentic self.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
              <button
                onClick={onOpenContact}
                type="button"
                className="group inline-flex items-center space-x-3 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide text-white bg-gradient-to-r from-[#34455C] to-[#253345] hover:from-[#253345] hover:to-[#192433] shadow-md hover:shadow-glow-soft transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book a Session</span>
                <ArrowUpRight className="w-4 h-4 text-[#D1B477] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full text-sm font-medium tracking-wide text-deep-blue-grey bg-[#FFF8EF]/80 hover:bg-[#FFF8EF] border border-[#D1B477]/40 shadow-sm hover:border-[#D1B477] transition-all duration-300"
              >
                <Compass className="w-4 h-4 text-champagne-gold" />
                <span>Explore Offerings</span>
              </a>

              <button
                onClick={onOpenContact}
                type="button"
                className="text-xs font-semibold uppercase tracking-wider text-soft-slate hover:text-deep-blue-grey underline decoration-[#D1B477]/50 underline-offset-4 py-2 px-1 transition-colors"
              >
                Direct Inquiry
              </button>
            </div>

            {/* Subtle Sound & Sanctuary interactive prompt */}
            <div className="pt-6 border-t border-[#D1B477]/20 flex flex-wrap items-center gap-6 text-xs text-soft-slate">
              <button
                onClick={handlePlayChime}
                type="button"
                className="group flex items-center space-x-2.5 hover:text-deep-blue-grey transition-colors cursor-pointer"
              >
                <span className="w-7 h-7 rounded-full bg-[#E5D7F4]/60 border border-[#D1B477]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
                </span>
                <span className="tracking-wide">Ring singing bowl chime</span>
              </button>

              <span className="w-1 h-1 rounded-full bg-[#D1B477]/50 hidden sm:inline-block" />

              <span className="italic tracking-wide text-soft-slate/90">
                A safe, confidential container for your healing journey
              </span>
            </div>
          </motion.div>

          {/* Practitioner Authentic Portrait Composition (5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Ambient decorative backdrops and architectural framing */}
            <div className="relative w-full max-w-[440px] sm:max-w-[480px]">
              
              {/* Golden celestial arch halo behind the portrait */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-t-full border border-[#D1B477]/35 pointer-events-none" />
              <div className="absolute -inset-8 sm:-inset-10 rounded-t-full border border-dashed border-[#D1B477]/20 pointer-events-none" />

              {/* Atmospheric Glow behind the portrait */}
              <div className="absolute -inset-4 bg-gradient-to-t from-[#E5D7F4]/40 via-[#FFF8EF]/50 to-transparent rounded-t-full blur-xl" />

              {/* The Authentic Portrait Frame with an elegant arch top */}
              <div className="relative rounded-t-[220px] rounded-b-3xl overflow-hidden shadow-2xl border-2 border-white/80 bg-[#FFF8EF]/60">
                <img
                  src="/assets/practitioner-main.jpg"
                  alt="Jefferin Sequeira - Healing Guide and Transformation Coach"
                  width={1024}
                  height={682}
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-102"
                  loading="eager"
                  decoding="async"
                />

                {/* Soft gradient bottom blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#EAF2FC]/80 via-transparent to-transparent pointer-events-none" />

                {/* Subtle light vignette */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FFF8EF]/10 to-[#E5D7F4]/20 pointer-events-none" />
              </div>

              {/* Floating Ethereal Badge: Authentic Practitioner Presence */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute -bottom-4 left-2 sm:-bottom-5 sm:-left-6 bg-white/95 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-[#D1B477]/30 shadow-lg flex items-center space-x-2.5 sm:space-x-3 z-10"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FFF8EF] border border-[#D1B477]/40 flex items-center justify-center text-champagne-gold shrink-0">
                  <LotusArt className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="font-serif text-xs sm:text-sm font-semibold text-deep-blue-grey leading-tight">
                    Gentle Presence
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-soft-slate">
                    Holding space for your healing
                  </p>
                </div>
              </motion.div>

              {/* Floating Ethereal Pill: Warmth & Balance */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="absolute -top-3 right-2 sm:-right-5 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border border-[#D1B477]/30 shadow-md flex items-center space-x-2 z-10"
              >
                <span className="w-2 h-2 rounded-full bg-[#E9B9AC] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-deep-blue-grey">
                  Heal Your Trauma
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
