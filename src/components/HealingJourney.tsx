import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Eye, Sparkles, PenTool, Heart } from 'lucide-react';
import { LotusArt, SacredGeometryRing, BotanicalSprig } from './DecorativeArt';

export const HealingJourney: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: Compass,
      title: 'Where Are You Currently in Your Life?',
      subtitle: 'Understanding Your Present Ground',
      tagline: 'Meeting yourself honestly in this season',
      narrative:
        'Every transformation begins by acknowledging where you are currently in your life. Through a gentle process free from rush or expectation, we pause to take stock of your emotional state, life transitions, and what your heart is seeking in this chapter.',
      accentColor: 'border-[#D1B477]',
      bgGlow: 'from-[#FFF8EF] to-[#EAF2FC]',
    },
    {
      num: '02',
      icon: Eye,
      title: 'Self-Awareness',
      subtitle: 'Awakening the Inner Witness',
      tagline: 'Healing starts from self awareness',
      narrative:
        'Real healing starts from self awareness. When we quiet external demands and tune within, we learn to observe our emotional triggers, bodily sensations, and recurring patterns without judgment. Awareness illuminates the pathways that were previously hidden in reaction.',
      accentColor: 'border-[#E5D7F4]',
      bgGlow: 'from-[#EAF2FC] to-[#F0EAF8]',
    },
    {
      num: '03',
      icon: Sparkles,
      title: 'Self-Reflection',
      subtitle: 'Tracing Your Past Roots',
      tagline: 'Uncovering the roots of your emotional landscape',
      narrative:
        'In this contemplative space, we engage in gentle self-reflection to understand your past roots. We examine early childhood conditioning, inherited family narratives, and emotional imprints, giving voice to suppressed pain so it can finally soften and release.',
      accentColor: 'border-[#E9B9AC]',
      bgGlow: 'from-[#F0EAF8] to-[#FFF8EF]',
    },
    {
      num: '04',
      icon: PenTool,
      title: 'Rewriting Your Life Script',
      subtitle: 'Reprogramming the Subconscious Mind',
      tagline: 'Releasing outdated stories to author your true destiny',
      narrative:
        'So much of our habitual struggle lives within the subconscious mind. By gently unwinding limiting beliefs and emotional baggage, we rewrite your life script—shifting from trauma-driven survival patterns into conscious self-authorship, joy, and empowerment.',
      accentColor: 'border-[#D1B477]',
      bgGlow: 'from-[#FFF8EF] to-[#E5D7F4]',
    },
    {
      num: '05',
      icon: Heart,
      title: 'Build a Relationship With Yourself',
      subtitle: 'Embodied Self-Compassion & Wholeness',
      tagline: 'Becoming your own safest, loving sanctuary',
      narrative:
        'The sacred pinnacle of this journey is to build a relationship with yourself founded on tenderness, trust, and healthy boundaries. You emerge rooted in genuine self-love, navigating the world with inner resilience, emotional equilibrium, and lasting peace.',
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
            A 5-step flowing path designed to accompany you from the noise of the external world back into deep connection, awareness, and peace within yourself.
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
                          Step {step.num}
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
