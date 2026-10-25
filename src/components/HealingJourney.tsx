import React from 'react';
import { motion } from 'framer-motion';
import { PauseCircle, Eye, Sparkles, Footprints } from 'lucide-react';
import { LotusArt, SacredGeometryRing, BotanicalSprig } from './DecorativeArt';

export const HealingJourney: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: PauseCircle,
      title: 'Pause & Reconnect',
      subtitle: 'The Sacred Pause',
      tagline: 'Slowing down to hear what is quiet within you',
      narrative:
        'Every true healing journey begins by stepping off the treadmill of daily demands. Here, there are no expectations, no performances, and no hurry. You are invited to arrive, take an unhurried breath, and simply notice how you are feeling in this moment.',
      accentColor: 'border-[#D1B477]',
      bgGlow: 'from-[#FFF8EF] to-[#EAF2FC]',
    },
    {
      num: '02',
      icon: Eye,
      title: 'Cultivate Awareness',
      subtitle: 'Deep Inner Listening',
      tagline: 'Meeting yourself with compassionate curiosity',
      narrative:
        'With calm guidance, we turn gentle attention inward. We notice physical tensions, quiet emotional undercurrents, and energetic blocks without trying to immediately force or change them. Healing begins when awareness meets acceptance.',
      accentColor: 'border-[#E5D7F4]',
      bgGlow: 'from-[#EAF2FC] to-[#F0EAF8]',
    },
    {
      num: '03',
      icon: Sparkles,
      title: 'Create Space for Reflection',
      subtitle: 'Releasing What Weighs You Down',
      tagline: 'Opening the heart to lightness and grace',
      narrative:
        'Through singing bowl resonance, subtle energetic balancing, and still meditation, we gently soften accumulated heaviness. Like clearing mist from a quiet pond, space opens for renewed clarity, intuition, and heartfelt peace.',
      accentColor: 'border-[#E9B9AC]',
      bgGlow: 'from-[#F0EAF8] to-[#FFF8EF]',
    },
    {
      num: '04',
      icon: Footprints,
      title: 'Explore Your Personal Journey',
      subtitle: 'Embodied Walking Forward',
      tagline: 'Carrying peace into the rhythm of your days',
      narrative:
        'Spiritual awareness is not confined to the meditation cushion—it becomes a living sanctuary you carry into your relationships, your work, and your dreams. You leave grounded, centered, and rooted in your true self.',
      accentColor: 'border-[#B9CCBA]',
      bgGlow: 'from-[#FFF8EF] to-[#EAF2FC]',
    },
  ];

  return (
    <section id="journey" className="relative py-24 lg:py-36 bg-[#FFF8EF]/60 overflow-hidden">
      {/* Delicate background art */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
        <SacredGeometryRing className="w-[650px] h-[650px] text-[#D1B477]" />
      </div>
      <div className="absolute top-20 right-10 opacity-30 pointer-events-none hidden md:block">
        <BotanicalSprig className="w-24 h-40 text-muted-sage" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 lg:mb-28">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#D1B477]/30 mb-4">
            <LotusArt className="w-4 h-4 text-champagne-gold" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-deep-blue-grey uppercase">
              The Path Inward
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-deep-blue-grey mb-5">
            The Healing <span className="italic">Journey</span>
          </h2>
          <p className="text-base text-soft-slate font-light leading-relaxed">
            A flowing rhythm designed to accompany you from the noise of the external world back into the peace of your own center.
          </p>
        </div>

        {/* Vertical Flowing Storyline */}
        <div className="relative">
          
          {/* Champagne gold connecting central timeline line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-[#D1B477]/10 via-[#D1B477]/40 to-[#D1B477]/10" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Step Card Content */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:text-right' : 'lg:col-start-8 lg:text-left'
                    }`}
                  >
                    <div className="p-7 sm:p-9 rounded-3xl bg-white/85 backdrop-blur-md border border-[#D1B477]/25 shadow-sm hover:shadow-md transition-shadow">
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isEven ? 'lg:justify-end' : 'justify-start'
                        }`}
                      >
                        <span className="font-serif text-xs uppercase tracking-widest text-[#D1B477] font-semibold px-2.5 py-0.5 rounded-full bg-[#FFF8EF] border border-[#D1B477]/20">
                          Phase {step.num}
                        </span>
                        <span className="text-xs text-soft-slate tracking-wide">
                          {step.subtitle}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-deep-blue-grey mb-2">
                        {step.title}
                      </h3>

                      <p className="text-xs uppercase tracking-wider text-[#D1B477] font-medium mb-4 italic">
                        {step.tagline}
                      </p>

                      <p className="text-sm text-soft-slate font-light leading-relaxed">
                        {step.narrative}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Indicator */}
                  <div className="hidden lg:flex lg:col-span-2 justify-center items-center relative">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-[#D1B477] flex items-center justify-center shadow-glow-gold z-10 transform group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-champagne-gold" />
                    </div>
                  </div>

                  {/* Empty visual counterpart spacer for editorial balance */}
                  <div
                    className={`hidden lg:block lg:col-span-5 ${
                      isEven ? 'lg:col-start-8' : 'lg:col-start-1 lg:row-start-1'
                    }`}
                  >
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-white/40 to-transparent border border-white/60 flex items-center justify-center min-h-[160px]">
                      <div className="text-center">
                        <LotusArt className="w-8 h-8 text-[#D1B477]/40 mx-auto mb-2" />
                        <span className="text-xs font-serif italic text-soft-slate/80">
                          {step.tagline}
                        </span>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
