import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { LotusArt } from './DecorativeArt';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Clearly marked editable placeholders
  const testimonials = [
    {
      id: 1,
      quote:
        '“Entering a session with Jefrin felt like stepping into an oasis of pure calm. Her gentle presence and sound healing allowed me to release months of pent-up tension that I had been holding in my body.”',
      author: 'Client Reflection Placeholder',
      context: 'Guided Meditation & Subtle Energy',
      location: 'Private Session',
    },
    {
      id: 2,
      quote:
        '“I arrived feeling completely scattered and emotionally drained. Jefrin held such a compassionate, safe space without judgment. I walked away feeling centered, peaceful, and reconnected with myself.”',
      author: 'Client Reflection Placeholder',
      context: 'Spiritual Healing Practice',
      location: 'Virtual Sanctuary',
    },
    {
      id: 3,
      quote:
        '“The space she creates is so deeply respectful of where you are. There was no pressure, just an unhurried pause that gave my soul room to breathe.”',
      author: 'Client Reflection Placeholder',
      context: 'Mindfulness & Inner Awareness',
      location: 'Personal Guidance',
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
              Kind Words
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-deep-blue-grey mb-3">
            Words From the <span className="italic">Heart</span>
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#D1B477] font-medium">
            (Editable Client Testimonials)
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative max-w-3xl mx-auto">
          <div className="relative bg-[#FFF8EF] rounded-3xl p-8 sm:p-12 border border-[#D1B477]/35 shadow-lg min-h-[300px] flex flex-col justify-between">
            <Quote className="w-10 h-10 text-[#D1B477]/40 mb-4" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex-1 flex flex-col justify-center"
              >
                <p className="font-serif text-lg sm:text-2xl font-light italic text-deep-blue-grey leading-relaxed mb-6">
                  {testimonials[currentIndex].quote}
                </p>

                <div className="pt-4 border-t border-[#D1B477]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-base font-semibold text-deep-blue-grey">
                      {testimonials[currentIndex].author}
                    </h3>
                    <p className="text-xs text-soft-slate">
                      {testimonials[currentIndex].context} • {testimonials[currentIndex].location}
                    </p>
                  </div>

                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#EAF2FC] border border-[#D1B477]/20 text-[#34455C] w-fit">
                    Verified Experience
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
                    aria-label={`Go to slide ${idx + 1}`}
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
                  aria-label="Previous testimonial"
                  className="p-2.5 rounded-full bg-white border border-[#D1B477]/30 text-soft-slate hover:text-deep-blue-grey hover:border-[#D1B477] transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  type="button"
                  aria-label="Next testimonial"
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
