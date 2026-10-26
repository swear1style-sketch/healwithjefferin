import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { LotusArt } from './DecorativeArt';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Real client stories from Jefferin's practice
  const testimonials = [
    {
      id: 1,
      quote:
        '“Jefferin helped me navigate through a very difficult period in my life. Their guidance was invaluable, and I feel much stronger and more at peace now.”',
      author: 'Verified Client',
      context: 'Inner Healing & Emotional Support',
      location: 'Personal 1-on-1 Guidance',
      rating: 5,
    },
    {
      id: 2,
      quote:
        '“The workshops offered by Heal Your Trauma are truly transformative. I learned practical tools that I use daily to manage stress and anxiety.”',
      author: 'Workshop Participant',
      context: 'Mindfulness & Trauma Release',
      location: 'Group Workshop',
      rating: 5,
    },
    {
      id: 3,
      quote:
        '“I was hesitant at first, but working with Jefferin was the best decision I made for my mental well-being. Highly recommend!”',
      author: 'Satisfied Client',
      context: 'Life Coaching & Healing Journey',
      location: 'Comprehensive Care',
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-[#EAF2FC]/50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/70 border border-[#D1B477]/30 mb-4">
            <LotusArt className="w-4 h-4 text-champagne-gold" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-deep-blue-grey uppercase">
              Client Stories
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-deep-blue-grey mb-3">
            Voices of <span className="italic">Transformation</span>
          </h2>
          <p className="text-sm text-soft-slate font-light leading-relaxed">
            Real stories from individuals who have found healing, resilience, and renewed hope through their journey with Jefferin.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative max-w-3xl mx-auto">
          <div className="relative bg-[#FFF8EF] rounded-3xl p-8 sm:p-12 border border-[#D1B477]/35 shadow-lg min-h-[320px] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <Quote className="w-10 h-10 text-[#D1B477]/40" />
              
              {/* Star Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-champagne-gold fill-champagne-gold" />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex-1 flex flex-col justify-center"
              >
                <p className="font-serif text-xl sm:text-2xl font-light italic text-deep-blue-grey leading-relaxed mb-6">
                  {testimonials[currentIndex].quote}
                </p>

                <div className="pt-4 border-t border-[#D1B477]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-base font-semibold text-deep-blue-grey">
                      — {testimonials[currentIndex].author}
                    </h3>
                    <p className="text-xs text-soft-slate">
                      {testimonials[currentIndex].context} • {testimonials[currentIndex].location}
                    </p>
                  </div>

                  <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-[#EAF2FC] border border-[#D1B477]/20 text-deep-blue-grey w-fit">
                    Verified Transformation
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#D1B477]/15">
              <div className="flex items-center space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to story ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-8 bg-[#D1B477]' : 'w-2 bg-[#D1B477]/30'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  type="button"
                  aria-label="Previous story"
                  className="p-2.5 rounded-full bg-white border border-[#D1B477]/30 text-soft-slate hover:text-deep-blue-grey hover:border-[#D1B477] transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  type="button"
                  aria-label="Next story"
                  className="p-2.5 rounded-full bg-white border border-[#D1B477]/30 text-soft-slate hover:text-deep-blue-grey hover:border-[#D1B477] transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
