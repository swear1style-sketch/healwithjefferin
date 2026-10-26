import React from 'react';
import { motion } from 'framer-motion';
import { Feather, Heart, Sun, Shield } from 'lucide-react';
import { BotanicalSprig } from './DecorativeArt';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Feather,
      title: 'Gentle Presence',
      description: 'Creating an unhurried, quiet space where you can let down inner armor and breathe freely.',
    },
    {
      icon: Heart,
      title: 'Soul Compassion',
      description: 'Meeting every thought, emotion, and life season with profound gentleness and non-judgment.',
    },
    {
      icon: Sun,
      title: 'Innate Wholeness',
      description: 'Guiding you to remember that the peace you seek is not outside yourself, but waiting within.',
    },
    {
      icon: Shield,
      title: 'Sacred Sanctuary',
      description: 'An emotionally safe, grounded environment honoring your personal beliefs and inner timing.',
    },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#FFF8EF]/50 overflow-hidden">
      {/* Delicate background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#E5D7F4]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-[#DCE8F8]/40 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/70 border border-[#D1B477]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D1B477]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-deep-blue-grey uppercase">
              About The Practitioner
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-deep-blue-grey mb-5">
            A Journey Toward <span className="italic">Inner Harmony</span>
          </h2>
          <p className="text-base text-soft-slate font-light leading-relaxed">
            Spiritual healing is not about fixing what is broken; it is a gentle journey of remembering who you are beneath the noise of the world.
          </p>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait and Framing (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[420px]">
              {/* Outer decorative gold ring offset */}
              <div className="absolute -inset-3.5 rounded-[42px] border border-[#D1B477]/40 pointer-events-none" />
              <div className="absolute -inset-6 rounded-[48px] border border-dashed border-[#D1B477]/20 pointer-events-none" />
              
              <div className="absolute -bottom-6 -right-6 hidden sm:block opacity-40">
                <BotanicalSprig className="w-20 h-32 text-muted-sage" />
              </div>

              {/* Portrait frame containing authentic second photo */}
              <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-[#FFF8EF]">
                <img
                  src="/assets/practitioner-about.jpg"
                  alt="Jefrin, Spiritual Healing Practitioner smiling with meditation singing bowl, candles and healing crystals"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover aspect-square transform transition-transform duration-700 hover:scale-103"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8EF]/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Quote pill */}
              <div className="mt-6 text-center">
                <span className="font-serif italic text-base text-deep-blue-grey/90 block">
                  “When we still the mind, the soul begins to whisper.”
                </span>
                <span className="text-xs uppercase tracking-widest text-[#D1B477] font-medium mt-1 block">
                  — Jefrin
                </span>
              </div>
            </div>
          </motion.div>

          {/* Sincere, Grounded Biography & Philosophy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="prose prose-lg text-soft-slate font-light leading-relaxed mb-8">
              <p className="text-lg text-deep-blue-grey font-serif leading-relaxed italic mb-4">
                “Welcome to this quiet corner. Whether you are walking through a season of transition, feeling emotionally weary, or simply seeking a deeper connection with your true self, you are welcome here exactly as you are.”
              </p>
              
              <p className="mb-4">
                My work as a spiritual healing practitioner is rooted in compassion, stillness, and creating space. In our busy, demanding lives, it is easy to become disconnected from our heart and natural rhythm. When we pause, listen, and bring loving awareness to our inner world, natural healing and clarity emerge.
              </p>

              <p className="text-sm bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-[#D1B477]/25 text-deep-blue-grey/90">
                <span className="font-semibold block mb-1 text-xs uppercase tracking-wider text-[#D1B477]">
                  Practitioner Biography Placeholder
                </span>
                This space is thoughtfully reserved for your personal journey, background story, and specific spiritual practices. Your authentic voice and lived experience will shine here.
              </p>
            </div>

            {/* 4 Guiding Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-2xl bg-white/60 hover:bg-white border border-[#D1B477]/20 transition-all duration-300 shadow-sm hover:shadow-md group"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#E5D7F4]/50 border border-[#D1B477]/30 flex items-center justify-center text-deep-blue-grey group-hover:scale-110 transition-transform">
                        <IconComponent className="w-4 h-4 text-[#D1B477]" />
                      </div>
                      <h3 className="font-serif text-lg font-medium text-deep-blue-grey">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-soft-slate leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
