import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Sun, Shield, Quote } from 'lucide-react';
import { BotanicalSprig } from './DecorativeArt';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Inner Healing & Release',
      description: 'Deep therapeutic work to gently heal inner wounds, release emotional blockages, and restore your authentic self.',
    },
    {
      icon: Heart,
      title: 'Compassionate Container',
      description: 'Creating an unhurried, safe, and nurturing space to explore difficult seasons without judgment or pressure.',
    },
    {
      icon: Sun,
      title: 'Resilience & Empowerment',
      description: 'Unlocking your innate inner strength and providing practical, lifelong tools to navigate challenges with confidence.',
    },
    {
      icon: Shield,
      title: 'Holistic & Grounded',
      description: 'Harmoniously blending evidence-based coaching methods with mindful spiritual depth and intuitive stillness.',
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
              Meet Your Guide to Healing
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-deep-blue-grey mb-5">
            Meet <span className="italic">Jefferin Sequeira</span>
          </h2>
          <p className="text-base text-soft-slate font-light leading-relaxed">
            Compassionate expertise meets personalized care on your sacred journey to emotional freedom and inner wellness.
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
                  alt="Jefferin Sequeira, Spiritual Healing Practitioner smiling with meditation singing bowl, candles and healing crystals"
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
                  — Jefferin Sequeira
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
            <div className="space-y-4 text-soft-slate font-light leading-relaxed mb-6">
              <p className="text-lg text-deep-blue-grey font-serif leading-relaxed italic">
                “At Heal Your Trauma, we believe in empowering you to unlock your inner strength and navigate life's challenges with confidence. Our mission is to create a safe and nurturing space where you can explore, heal, and grow.”
              </p>
              
              <p className="text-sm sm:text-base">
                Jefferin is a compassionate and experienced emotional wellness coach and inner healing guide dedicated to guiding individuals through their personal transformation. With a holistic approach, Jefferin combines evidence-based techniques with empathetic, heartfelt support to help clients overcome trauma, build resilience, and cultivate a life of purpose and joy.
              </p>

              <p className="text-sm sm:text-base">
                Whether you are seeking to untangle past experiences, heal karmic patterns through past life regression, or cultivate emotional equilibrium in daily life, each session is thoughtfully tailored to your unique journey and pacing.
              </p>

              {/* Elevated Mission Quote Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-white/90 via-[#FFF8EF] to-[#EAF2FC]/70 border border-[#D1B477]/35 shadow-sm relative overflow-hidden mt-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-[#E5D7F4]/50 text-champagne-gold shrink-0 mt-0.5">
                    <Quote className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-serif italic text-sm sm:text-base text-deep-blue-grey leading-relaxed">
                      "To provide compassionate, evidence-based emotional wellness and spiritual support that empowers individuals to heal from trauma, build resilience, and create meaningful, fulfilling lives."
                    </p>
                    <p className="text-[11px] uppercase tracking-widest text-[#D1B477] font-semibold mt-2">
                      — Our Guiding Mission
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Guiding Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-2xl bg-white/70 hover:bg-white border border-[#D1B477]/25 transition-all duration-300 shadow-sm hover:shadow-md group"
                  >
                    <div className="flex items-center space-x-3 mb-1.5">
                      <div className="w-8 h-8 rounded-lg bg-[#E5D7F4]/50 border border-[#D1B477]/30 flex items-center justify-center text-deep-blue-grey group-hover:scale-110 transition-transform">
                        <IconComponent className="w-4 h-4 text-[#D1B477]" />
                      </div>
                      <h3 className="font-serif text-base font-medium text-deep-blue-grey">
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
