import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { LotusArt } from './DecorativeArt';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#FFF8EF] border-t border-[#D1B477]/25 pt-16 pb-12 overflow-hidden text-deep-blue-grey">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#D1B477]/20">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#E5D7F4]/50 border border-[#D1B477]/30 flex items-center justify-center">
                  <LotusArt className="w-5 h-5 text-champagne-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-normal text-deep-blue-grey leading-tight">
                    Jefrin
                  </h3>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-soft-slate">
                    Spiritual Healing Practitioner
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-soft-slate font-light leading-relaxed max-w-sm mb-6">
                A gentle space to pause, reconnect with yourself, and explore a deeper sense of balance, awareness, and inner harmony.
              </p>
            </div>

            <div className="text-xs text-soft-slate">
              <span className="font-medium text-deep-blue-grey block mb-1">
                Direct Inquiries
              </span>
              <p className="text-[#34455C]/90 font-mono text-[11px]">
                contact@jefrinspiritualhealing.com
              </p>
              <p className="text-[11px] text-soft-slate mt-0.5">
                (Configurable practitioner contact email)
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-deep-blue-grey mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-soft-slate">
              <li>
                <a href="#home" className="hover:text-deep-blue-grey transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-deep-blue-grey transition-colors">
                  About Jefrin
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-deep-blue-grey transition-colors">
                  The Healing Journey
                </a>
              </li>
              <li>
                <a href="#offerings" className="hover:text-deep-blue-grey transition-colors">
                  Spiritual Offerings
                </a>
              </li>
              <li>
                <a href="#sanctuary" className="hover:text-deep-blue-grey transition-colors">
                  Breathing Sanctuary
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-deep-blue-grey transition-colors">
                  Client Reflections
                </a>
              </li>
            </ul>
          </div>

          {/* Spiritual Sanctuary & Respect Note */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-deep-blue-grey mb-4">
                Sacred Sanctuary
              </h4>
              <p className="text-xs text-soft-slate leading-relaxed mb-4">
                Every session is conducted with reverence, compassionate listening, and utmost respect for your individual spiritual journey. Available for both in-person quiet sessions and virtual distance consultations.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center space-x-2 text-xs font-medium text-soft-slate hover:text-deep-blue-grey transition-colors w-fit pt-2"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#D1B477]" />
              <span>Return to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar & Ethical Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-soft-slate gap-4">
          <p>
            © {new Date().getFullYear()} Jefrin. All rights reserved. A peaceful journey inward.
          </p>

          <div className="flex items-center space-x-1 text-[11px] text-soft-slate/80">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-[#E9B9AC] fill-current" />
            <span>for peace and inner harmony</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
