import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { LotusArt, SacredGeometryRing, BotanicalSprig } from './DecorativeArt';

interface ClosingCTAProps {
  onOpenContact: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onOpenContact }) => {
  return (
    <section className="relative py-28 lg:py-36 bg-gradient-to-b from-[#EAF2FC] via-[#F0EAF8] to-[#E5D7F4]/60 overflow-hidden text-center">
      {/* Background artwork */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
        <SacredGeometryRing className="w-[600px] h-[600px] text-[#D1B477]" />
      </div>

      <div className="absolute top-12 left-12 opacity-30 hidden sm:block pointer-events-none">
        <BotanicalSprig className="w-16 h-28 text-muted-sage" />
      </div>
      <div className="absolute bottom-12 right-12 opacity-30 hidden sm:block pointer-events-none">
        <BotanicalSprig className="w-16 h-28 text-muted-sage" flipped />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 sm:p-16 rounded-[40px] bg-white/70 backdrop-blur-xl border border-[#D1B477]/40 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle warm wash */}
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#FFF8EF] rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-[#E5D7F4] rounded-full blur-2xl pointer-events-none" />

          {/* Lotus Icon */}
          <div className="w-14 h-14 rounded-full bg-[#FFF8EF] border border-[#D1B477]/40 flex items-center justify-center mx-auto mb-6 text-champagne-gold shadow-sm">
            <LotusArt className="w-7 h-7" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-deep-blue-grey mb-6 leading-tight">
            Your Journey Begins With a{' '}
            <span className="italic block sm:inline font-light">
              Moment for Yourself.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-soft-slate font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Take a breath, make a little space, and begin wherever you are. There is no rush—peace unfolds one gentle step at a time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-deep-blue-grey to-[#223142] hover:from-[#223142] hover:to-[#172330] shadow-lg hover:shadow-glow-soft transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Mail className="w-4 h-4 text-[#D1B477]" />
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-[#D1B477]" />
            </button>

            <a
              href="#sanctuary"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-deep-blue-grey bg-[#FFF8EF] hover:bg-white border border-[#D1B477]/40 shadow-sm transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
              <span>Pause in Stillness</span>
            </a>
          </div>

          <p className="text-[11px] uppercase tracking-widest text-[#D1B477] font-medium mt-8">
            Welcoming in-person &amp; virtual sessions worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};
