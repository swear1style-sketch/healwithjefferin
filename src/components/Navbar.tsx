import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { sanctuaryAudio } from '../utils/sound';
import { LotusArt } from './DecorativeArt';

interface NavbarProps {
  onOpenContact: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'The Journey', href: '#journey' },
    { name: 'Sanctuary', href: '#sanctuary' },
    { name: 'Stories', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleAudioToggle = () => {
    sanctuaryAudio.toggleAmbient((playing) => {
      setIsAudioActive(playing);
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FFF8EF]/85 backdrop-blur-md shadow-ethereal py-3.5 border-b border-[#D1B477]/15'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#home"
          className="group flex items-center space-x-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-gold rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-full bg-[#E5D7F4]/50 border border-[#D1B477]/30 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
            <LotusArt className="w-5 h-5 text-champagne-gold" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-wide font-normal text-deep-blue-grey group-hover:text-[#263548] transition-colors">
              Jefferin Sequeira
            </span>
            <span className="text-[10px] tracking-[0.22em] uppercase text-soft-slate/85 font-medium -mt-1">
              Heal Your Trauma
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-[13.5px] font-medium tracking-wide text-deep-blue-grey/85">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 hover:text-[#1e2a38] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1.5px] after:bg-[#D1B477] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls & CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* 528 Hz Ambient Sound Toggle */}
          <button
            onClick={handleAudioToggle}
            type="button"
            title={isAudioActive ? "Pause 528 Hz Meditation Tone" : "Play 528 Hz Solfeggio Meditation Tone"}
            aria-label={isAudioActive ? "Pause 528 Hz meditation tone" : "Play 528 Hz Solfeggio meditation tone"}
            className={`p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center ${
              isAudioActive
                ? 'bg-[#E5D7F4] border-[#D1B477] text-deep-blue-grey shadow-glow-soft animate-soft-pulse'
                : 'bg-white/60 hover:bg-white border-[#D1B477]/30 text-soft-slate hover:text-deep-blue-grey'
            }`}
          >
            {isAudioActive ? (
              <Volume2 className="w-4 h-4 text-champagne-gold" />
            ) : (
              <VolumeX className="w-4 h-4 text-soft-slate" />
            )}
          </button>

          {/* Book a Session CTA */}
          <button
            onClick={() => onOpenContact()}
            type="button"
            className="group relative inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-deep-blue-grey bg-gradient-to-r from-[#FFF8EF] via-[#F0EAF8] to-[#EAF2FC] border border-[#D1B477]/40 shadow-sm hover:shadow-glow-gold hover:border-[#D1B477] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-champagne-gold transition-transform group-hover:rotate-12 duration-300" />
            <span>Book a Session</span>
          </button>
        </div>

        {/* Mobile Hamburger & Audio */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={handleAudioToggle}
            type="button"
            aria-label="Toggle 528 Hz meditation tone"
            className="p-2 rounded-full border border-[#D1B477]/30 bg-white/70 text-soft-slate"
          >
            {isAudioActive ? <Volume2 className="w-4 h-4 text-champagne-gold" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="p-2.5 rounded-full border border-[#D1B477]/30 bg-white/80 text-deep-blue-grey hover:bg-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF8EF]/98 backdrop-blur-xl border-b border-[#D1B477]/20 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 text-base font-medium text-deep-blue-grey hover:text-champagne-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[#D1B477]/20 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-deep-blue-grey shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
                <span>Book a Session</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
