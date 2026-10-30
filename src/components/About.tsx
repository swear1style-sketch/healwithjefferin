import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Sparkles,
  Compass,
  Globe,
  MapPin,
  Heart,
  Sun,
  Shield,
  Quote,
} from 'lucide-react';
import { BotanicalSprig } from './DecorativeArt';

export const About: React.FC = () => {
  const qualifications = [
    {
      title: 'Psychologist',
      degree: 'Masters in Industrial Psychology',
      diploma: 'Diploma in Counseling Psychology',
      badge: 'Psychological Foundation',
      icon: GraduationCap,
      accent: 'from-[#FFF8EF] to-[#EAF2FC]',
    },
    {
      title: 'Clinical Hypnotherapist',
      degree: 'University of West London',
      diploma: 'Accredited Training • Singapore',
      badge: 'Subconscious Mastery',
      icon: Award,
      accent: 'from-[#EAF2FC] to-[#F0EAF8]',
    },
    {
      title: 'Past Life Regression Therapist',
      degree: 'Soul Memory & Karmic Healing',
      diploma: 'Certified Practitioner',
      badge: 'Deep Soul Therapy',
      icon: Sparkles,
      accent: 'from-[#F0EAF8] to-[#FFF8EF]',
    },
    {
      title: 'Certified Life Coach',
      degree: 'Transformational Arts College',
      diploma: 'Diploma in Coaching • Toronto, Canada',
      badge: 'Mindset & Empowerment',
      icon: Compass,
      accent: 'from-[#FFF8EF] to-[#E5D7F4]',
    },
  ];

  const globalRegions = [
    { region: 'India', cities: 'Mumbai & Pune' },
    { region: 'Middle East', cities: 'Dubai & Bahrain' },
    { region: 'Australia', cities: 'Sydney' },
    { region: 'Europe', cities: 'Luxembourg' },
    { region: 'South East Asia', cities: 'Singapore' },
    { region: 'North America', cities: 'Toronto, Canada' },
  ];

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
      description: 'Harmoniously blending academic psychological mastery with subconscious depth and intuitive stillness.',
    },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#FFF8EF]/50 overflow-hidden">
      {/* Delicate background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#E5D7F4]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-[#DCE8F8]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/70 border border-[#D1B477]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D1B477]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-deep-blue-grey uppercase">
              Meet Your Guide to Healing
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-deep-blue-grey mb-3">
            Meet <span className="italic">Jefferin Sequeira</span>
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#D1B477] font-semibold">
            Psychologist • Clinical Hypnotherapist • Past Life Regression Therapist • Life Coach
          </p>
        </div>

        {/* Editorial Split Grid (Portrait + Biography) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">

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

              {/* Portrait frame containing authentic photo */}
              <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-[#FFF8EF]">
                <img
                  src="/assets/practitioner-about.jpg"
                  alt="Jefferin Sequeira - Psychologist, Clinical Hypnotherapist, and Emotional Wellness Guide"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover aspect-square transform transition-transform duration-700 hover:scale-103"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8EF]/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Global Experience Badge */}
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

          {/* Sincere, Grounded Biography & Cross-Cultural Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="space-y-4 text-soft-slate font-light leading-relaxed mb-8">
              <p className="text-lg text-deep-blue-grey font-serif leading-relaxed italic">
                “Turning every difficulty into an opportunity to reach the height of becoming the catalyst in the healing of others.”
              </p>

              <p className="text-sm sm:text-base">
                Meet <strong className="font-semibold text-deep-blue-grey">Jefferin Sequeira</strong> — a highly credentialed <strong className="font-medium text-deep-blue-grey">Psychologist</strong> (Masters in Industrial Psychology with a Diploma in Counseling Psychology), <strong className="font-medium text-deep-blue-grey">Clinical Hypnotherapist</strong> (University of West London, Singapore), <strong className="font-medium text-deep-blue-grey">Past Life Regression Therapist</strong>, and certified <strong className="font-medium text-deep-blue-grey">Life Coach</strong> (Diploma from Transformational Arts College, Toronto).
              </p>

              <p className="text-sm sm:text-base">
                For over <strong className="font-semibold text-deep-blue-grey">34 years in total</strong>, Jefferin has enjoyed the unique privilege of living overseas across diverse global cultures—spanning <strong className="font-medium text-deep-blue-grey">India (Mumbai &amp; Pune), the Middle East (Dubai &amp; Bahrain), South East Asia (Singapore), Australia (Sydney), Europe (Luxembourg), and North America (Toronto, Canada)</strong>.
              </p>

              <p className="text-sm sm:text-base">
                Her healing journey commenced with the emotional turbulence and upheaval that ensued as she navigated diverse cultures, adapted to unfamiliar worlds, and had to <em className="italic text-deep-blue-grey">Start Again, all over again</em>.
              </p>

              <p className="text-sm sm:text-base">
                Through her own profound process of healing, she discovered her true potential—learning to <strong className="font-semibold text-deep-blue-grey">Ascend from Pain to Progress, Trauma to Triumph</strong>. That personal healing became the impetus that enabled her to reinvent herself, transforming every adversity into a bridge of empathy and strength.
              </p>

              <p className="text-sm sm:text-base">
                Today, these numerous cross-cultural experiences have refined her abilities in deeply engaging with and discerning the nuanced emotional and spiritual needs of her clients across the world with extraordinary compassion and cultural attunement.
              </p>

              {/* Elevated Mission Quote Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-white/90 via-[#FFF8EF] to-[#EAF2FC]/70 border border-[#D1B477]/35 shadow-sm relative overflow-hidden mt-6">
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
          </motion.div>

        </div>

        {/* Academic & Professional Accreditations Grid */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D1B477] uppercase block mb-2">
              Academic &amp; Clinical Excellence
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-deep-blue-grey">
              Formal Qualifications &amp; Accreditations
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {qualifications.map((q, idx) => {
              const Icon = q.icon;
              return (
                <motion.div
                  key={q.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-3xl bg-white/85 backdrop-blur-md border border-[#D1B477]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#EAF2FC] to-[#E5D7F4] border border-[#D1B477]/30 flex items-center justify-center text-deep-blue-grey group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5 text-champagne-gold" />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-[#FFF8EF] border border-[#D1B477]/20 text-[#D1B477]">
                        {q.badge}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl font-normal text-deep-blue-grey mb-1.5">
                      {q.title}
                    </h4>
                    <p className="text-xs font-semibold text-deep-blue-grey/90 mb-1">
                      {q.degree}
                    </p>
                    <p className="text-xs text-soft-slate font-light leading-relaxed">
                      {q.diploma}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 34-Year Global Journey Showcase */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/90 via-[#FFF8EF] to-[#EAF2FC]/60 border border-[#D1B477]/35 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#D1B477]/20">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#E5D7F4]/60 border border-[#D1B477]/40 flex items-center justify-center text-champagne-gold">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D1B477] font-semibold block">
                  A Unique Global Perspective
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-deep-blue-grey">
                  34 Years Living Across the Globe
                </h3>
              </div>
            </div>
            <p className="text-xs text-soft-slate max-w-md font-light leading-relaxed">
              Living across 6 continents and international hubs has uniquely shaped Jefferin’s cross-cultural depth, cultural sensitivity, and emotional discernment for clients of every background.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {globalRegions.map((loc) => (
              <div
                key={loc.region}
                className="p-3.5 rounded-2xl bg-white/70 border border-[#D1B477]/25 hover:border-[#D1B477]/60 transition-all text-center group"
              >
                <div className="flex items-center justify-center space-x-1 text-[#D1B477] mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-xs font-semibold tracking-wide text-deep-blue-grey">
                    {loc.region}
                  </span>
                </div>
                <p className="text-[11px] text-soft-slate font-light">
                  {loc.cities}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Guiding Pillars */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D1B477] uppercase block mb-2">
              The Sanctuary Philosophy
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-deep-blue-grey">
              The Four Pillars of Her Practice
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-white/75 hover:bg-white border border-[#D1B477]/25 transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#E5D7F4]/50 border border-[#D1B477]/30 flex items-center justify-center text-deep-blue-grey group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4 text-[#D1B477]" />
                    </div>
                    <h4 className="font-serif text-base font-medium text-deep-blue-grey">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-soft-slate leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
