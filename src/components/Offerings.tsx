import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wind, SunMedium, Compass, Eye, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { LotusArt } from './DecorativeArt';

export interface Offering {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  details: string[];
  intention: string;
  icon: React.ElementType;
  accentBg: string;
}

interface OfferingsProps {
  onSelectOfferingForContact: (offeringTitle: string) => void;
}

export const Offerings: React.FC<OfferingsProps> = ({ onSelectOfferingForContact }) => {
  const [selectedOffering, setSelectedOffering] = useState<Offering | null>(null);

  const offerings: Offering[] = [
    {
      id: 'spiritual-healing',
      title: 'Spiritual Healing',
      subtitle: 'Restoring Natural Soul Alignment',
      duration: '60 – 75 Minutes',
      description: 'A serene one-on-one session holding space for emotional release, spiritual reconnection, and quiet restoration of inner harmony.',
      details: [
        'Gentle grounding opening and breath alignment',
        'Intuitive energetic holding and stillness',
        'Sound frequencies with singing bowls',
        'Closing reflection and integration guidance',
      ],
      intention: 'To gently dissolve accumulated emotional tension and invite deep, peaceful presence.',
      icon: Sparkles,
      accentBg: 'from-[#EAF2FC] via-[#FFF8EF] to-[#E5D7F4]',
    },
    {
      id: 'guided-meditation',
      title: 'Guided Meditation & Breathwork',
      subtitle: 'Returning to the Quiet Center',
      duration: '45 – 60 Minutes',
      description: 'Personalized guided meditation sessions designed to soothe the nervous system, release mental chatter, and cultivate profound stillness.',
      details: [
        'Conscious diaphragmatic breathing exercises',
        'Heart-centered visualization journeys',
        'Techniques for everyday stress release',
        'Audio reflection notes for ongoing personal practice',
      ],
      intention: 'To build a stable inner sanctuary you can return to at any moment in daily life.',
      icon: Wind,
      accentBg: 'from-[#FFF8EF] via-[#F0EAF8] to-[#EAF2FC]',
    },
    {
      id: 'chakra-balancing',
      title: 'Chakra Balancing & Subtle Energy',
      subtitle: 'Harmonizing Your Energetic Centers',
      duration: '60 Minutes',
      description: 'A focused practice exploring your energetic subtle body to gently invite balance, fluid flow, and grounding vitality.',
      details: [
        'Intuitive subtle energy assessment',
        'Focused resonance on the 7 core energy centers',
        'Integration with rose quartz, amethyst & healing stones',
        'Suggestions for maintaining energetic clarity',
      ],
      intention: 'To encourage harmonious, uninterrupted flow through your body’s spiritual energy centers.',
      icon: SunMedium,
      accentBg: 'from-[#E5D7F4] via-[#FFF8EF] to-[#EAF2FC]',
    },
    {
      id: 'mindfulness-awareness',
      title: 'Mindfulness & Inner Awareness',
      subtitle: 'Cultivating Conscious Presence',
      duration: '50 Minutes',
      description: 'Practical, contemplative spiritual tools to bring mindful awareness into relationships, decision-making, and daily routines.',
      details: [
        'Observing thoughts without attachment or judgment',
        'Cultivating compassionate self-talk',
        'Embodied body-scan awareness',
        'Gentle morning & evening grounding rituals',
      ],
      intention: 'To transform daily overwhelm into grounded clarity and grateful awareness.',
      icon: Eye,
      accentBg: 'from-[#F0EAF8] via-[#EAF2FC] to-[#FFF8EF]',
    },
    {
      id: 'spiritual-guidance',
      title: 'Personal Spiritual Guidance',
      subtitle: 'Compassionate Mentorship for Your Path',
      duration: '75 Minutes',
      description: 'A deep, confidential listening container to explore life transitions, spiritual awakenings, purpose, and questions of the soul.',
      details: [
        'Deep empathetic listening without judgment',
        'Exploring life lessons and spiritual themes',
        'Clarifying intuition vs. reactive fear',
        'Crafting personal spiritual commitments',
      ],
      intention: 'To receive heartfelt counsel and discover clarity on your individual journey forward.',
      icon: Compass,
      accentBg: 'from-[#FFF8EF] via-[#E9B9AC]/20 to-[#EAF2FC]',
    },
  ];

  return (
    <section id="offerings" className="relative py-24 lg:py-32 bg-[#EAF2FC]/70 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#E5D7F4]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#FFF8EF]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/70 border border-[#D1B477]/30 mb-4">
            <LotusArt className="w-4 h-4 text-champagne-gold" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-deep-blue-grey uppercase">
              Intentional Practices
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-deep-blue-grey mb-5">
            Spiritual Offerings for <span className="italic">Body &amp; Soul</span>
          </h2>
          <p className="text-base text-soft-slate font-light leading-relaxed">
            Each offering is an invitation to slow down, soften, and reconnect with your inner light. These sessions can be experienced in-person or virtually.
          </p>
        </div>

        {/* Asymmetrical Editorial Panels Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {offerings.map((offering, idx) => {
            const Icon = offering.icon;
            const isFeatured = idx === 0;

            return (
              <motion.div
                key={offering.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 border ${
                  isFeatured
                    ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white via-[#FFF8EF]/80 to-[#EAF2FC] border-[#D1B477]/40 shadow-md hover:shadow-xl'
                    : 'bg-white/75 hover:bg-white border-[#D1B477]/25 hover:border-[#D1B477]/50 shadow-sm hover:shadow-md'
                } group`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#EAF2FC] to-[#E5D7F4] border border-[#D1B477]/30 flex items-center justify-center text-deep-blue-grey group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-champagne-gold" />
                    </div>
                    <span className="text-[11px] tracking-wider uppercase font-medium px-3 py-1 rounded-full bg-[#FFF8EF] border border-[#D1B477]/25 text-soft-slate">
                      {offering.duration}
                    </span>
                  </div>

                  {/* Titles */}
                  <h3 className="font-serif text-2xl lg:text-2xl font-normal text-deep-blue-grey mb-1 group-hover:text-black transition-colors">
                    {offering.title}
                  </h3>
                  <p className="text-xs tracking-wider uppercase text-[#D1B477] font-medium mb-3">
                    {offering.subtitle}
                  </p>

                  <p className="text-sm text-soft-slate font-light leading-relaxed mb-6">
                    {offering.description}
                  </p>

                  {/* Highlight bullets for featured */}
                  {isFeatured && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 pt-2 border-t border-[#D1B477]/20">
                      {offering.details.map((item) => (
                        <div key={item} className="flex items-center space-x-2 text-xs text-deep-blue-grey/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B9CCBA] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#D1B477]/15 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedOffering(offering)}
                    type="button"
                    className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-deep-blue-grey hover:text-[#D1B477] transition-colors"
                  >
                    <span>Explore This Practice</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onSelectOfferingForContact(offering.title)}
                    type="button"
                    className="text-[11px] font-medium text-soft-slate hover:text-deep-blue-grey underline decoration-[#D1B477]/40 underline-offset-4"
                  >
                    Inquire
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Ethical / Medical Disclaimer Banner */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-white/60 border border-[#D1B477]/25 text-center text-xs text-soft-slate leading-relaxed">
          <p className="font-medium text-deep-blue-grey mb-1">
            Ethical Spiritual Practice Note
          </p>
          <p>
            Spiritual healing and mindfulness practices are gentle modalities for personal reflection, relaxation, and inner harmony. They are complementary in nature and do not diagnose, treat, or replace professional medical or psychiatric care.
          </p>
        </div>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedOffering && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedOffering(null)}
              className="absolute inset-0 bg-[#34455C]/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-xl bg-[#FFF8EF] rounded-3xl p-6 sm:p-8 border border-[#D1B477]/40 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedOffering(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-white text-soft-slate hover:text-deep-blue-grey border border-[#D1B477]/30 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-3 mb-3">
                <span className="text-xs uppercase tracking-widest text-[#D1B477] font-semibold">
                  Offering Overview
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#EAF2FC] border border-[#D1B477]/25 text-deep-blue-grey">
                  {selectedOffering.duration}
                </span>
              </div>

              <h3 className="font-serif text-3xl font-normal text-deep-blue-grey mb-2">
                {selectedOffering.title}
              </h3>
              <p className="text-sm text-soft-slate italic mb-5">
                {selectedOffering.subtitle}
              </p>

              <div className="p-4 rounded-2xl bg-[#EAF2FC]/70 border border-[#D1B477]/20 mb-6">
                <p className="text-xs uppercase tracking-wider text-deep-blue-grey font-semibold mb-1">
                  Core Intention
                </p>
                <p className="text-sm text-soft-slate">
                  {selectedOffering.intention}
                </p>
              </div>

              <h4 className="text-xs uppercase tracking-wider text-deep-blue-grey font-semibold mb-3">
                What Each Session Encompasses
              </h4>
              <div className="space-y-2.5 mb-8">
                {selectedOffering.details.map((point) => (
                  <div key={point} className="flex items-start space-x-3 text-sm text-soft-slate">
                    <CheckCircle2 className="w-4 h-4 text-[#B9CCBA] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#D1B477]/25">
                <button
                  onClick={() => {
                    const title = selectedOffering.title;
                    setSelectedOffering(null);
                    onSelectOfferingForContact(title);
                  }}
                  type="button"
                  className="w-full sm:w-auto flex-1 inline-flex justify-center items-center space-x-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-deep-blue-grey hover:bg-[#253345] shadow-md transition-all"
                >
                  <span>Inquire About This Session</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D1B477]" />
                </button>

                <button
                  onClick={() => setSelectedOffering(null)}
                  type="button"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full text-xs font-medium tracking-wide text-soft-slate hover:text-deep-blue-grey transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
