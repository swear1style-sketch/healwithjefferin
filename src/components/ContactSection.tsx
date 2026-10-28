import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Clock, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { LotusArt, WhatsAppIcon } from './DecorativeArt';
import { PRACTITIONER_PHONE_DISPLAY, PRACTITIONER_PHONE_NUMBER, openWhatsApp } from '../utils/whatsapp';

interface ContactSectionProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledOffering?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  isOpen,
  onClose,
  prefilledOffering = '',
}) => {
  const [selectedPractice, setSelectedPractice] = useState(prefilledOffering || 'Inner Healing');
  const [name, setName] = useState('');
  const [personalNote, setPersonalNote] = useState('');

  const practices = [
    'Inner Healing',
    'Past Life Regression Therapy',
    'Emotional Healing',
    'Transformative Life Coaching',
    'Workshops & Group Circles',
    'General Inquiry & Consultation',
  ];

  const quickPrompts = [
    {
      title: 'Inner Healing Session',
      service: 'Inner Healing',
      prompt: 'Hello Jefferin, I would love to book an Inner Healing session.',
    },
    {
      title: 'Past Life Regression',
      service: 'Past Life Regression Therapy',
      prompt: 'Hello Jefferin, I am interested in Past Life Regression Therapy and would like to know the next steps.',
    },
    {
      title: 'Emotional Wellness Coaching',
      service: 'Emotional Healing',
      prompt: 'Hello Jefferin, I am looking for guidance around emotional wellness and healing.',
    },
    {
      title: 'Quick Consultation',
      service: 'General Inquiry & Consultation',
      prompt: 'Hello Jefferin, I have a few questions before booking a session with you.',
    },
  ];

  const handleLaunchWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const fullNote = name.trim()
      ? `My name is ${name.trim()}.${personalNote.trim() ? ` ${personalNote.trim()}` : ''}`
      : personalNote.trim();

    openWhatsApp(selectedPractice, fullNote);
    onClose();
  };

  const handleQuickPrompt = (promptText: string) => {
    const url = `https://wa.me/${PRACTITIONER_PHONE_NUMBER}?text=${encodeURIComponent(promptText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#34455C]/45 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-xl bg-[#FFF8EF] rounded-3xl p-6 sm:p-9 border border-[#D1B477]/40 shadow-2xl z-10 my-8 overflow-hidden"
      >
        <button
          onClick={onClose}
          type="button"
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-white text-soft-slate hover:text-deep-blue-grey border border-[#D1B477]/30 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-[#E5D7F4]/50 border border-[#D1B477]/30 flex items-center justify-center">
            <LotusArt className="w-4 h-4 text-champagne-gold" />
          </div>
          <span className="text-xs uppercase tracking-widest text-[#D1B477] font-semibold">
            Direct WhatsApp Connect
          </span>
        </div>

        <h3 className="font-serif text-3xl font-normal text-deep-blue-grey mb-1.5">
          Connect With <span className="italic">Jefferin</span>
        </h3>
        <p className="text-sm text-soft-slate font-light mb-6 leading-relaxed">
          Reach out directly to Jefferin on WhatsApp for unhurried, confidential support and session bookings.
        </p>

        {/* WhatsApp Verified Practitioner Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#25D366]/10 via-white to-[#EAF2FC] border border-[#25D366]/30 mb-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md">
              <WhatsAppIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif text-base font-semibold text-deep-blue-grey leading-tight">
                Jefferin Sequeira
              </p>
              <a
                href={`https://wa.me/${PRACTITIONER_PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-medium text-green-700 hover:underline flex items-center space-x-1 mt-0.5"
              >
                <span>{PRACTITIONER_PHONE_DISPLAY}</span>
                <ArrowUpRight className="w-3 h-3 inline" />
              </a>
            </div>
          </div>

          <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-[#D1B477]/25 text-[11px] text-soft-slate">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Available on WhatsApp</span>
          </div>
        </div>

        {/* Quick 1-Tap Prompts */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-deep-blue-grey uppercase tracking-wider mb-2.5">
            Quick 1-Tap Booking Topics
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {quickPrompts.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => handleQuickPrompt(item.prompt)}
                className="flex items-center justify-between p-3 rounded-xl bg-white/85 hover:bg-white border border-[#D1B477]/25 hover:border-[#25D366]/60 text-left transition-all duration-200 group shadow-2xs hover:shadow-sm"
              >
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-3.5 h-3.5 text-green-600 shrink-0" />
                  <span className="text-xs font-medium text-deep-blue-grey group-hover:text-black">
                    {item.title}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D1B477] group-hover:text-green-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            ))}
          </div>
        </div>

        {/* Personalized Session Builder Form */}
        <form onSubmit={handleLaunchWhatsApp} className="space-y-4 pt-2 border-t border-[#D1B477]/20">
          <div>
            <label className="block text-xs font-medium text-deep-blue-grey uppercase tracking-wider mb-1.5">
              Select Session / Inquiry Area
            </label>
            <select
              value={selectedPractice}
              onChange={(e) => setSelectedPractice(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D1B477]/35 focus:border-green-600 focus:ring-1 focus:ring-green-600 text-sm text-deep-blue-grey outline-none transition-all shadow-2xs"
            >
              {practices.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-deep-blue-grey uppercase tracking-wider mb-1">
                Your Name <span className="text-soft-slate/70 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Maya"
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#D1B477]/35 focus:border-green-600 focus:ring-1 focus:ring-green-600 text-sm text-deep-blue-grey outline-none transition-all placeholder:text-soft-slate/40"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-deep-blue-grey uppercase tracking-wider mb-1">
                Short Note <span className="text-soft-slate/70 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={personalNote}
                onChange={(e) => setPersonalNote(e.target.value)}
                placeholder="What brings you here..."
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#D1B477]/35 focus:border-green-600 focus:ring-1 focus:ring-green-600 text-sm text-deep-blue-grey outline-none transition-all placeholder:text-soft-slate/40"
              />
            </div>
          </div>

          {/* Response time note */}
          <div className="flex items-center space-x-2 text-[11px] text-soft-slate bg-[#EAF2FC]/70 p-2.5 rounded-xl border border-[#D1B477]/20">
            <Clock className="w-3.5 h-3.5 text-champagne-gold shrink-0" />
            <span>Clicking below opens your WhatsApp directly with a pre-filled message.</span>
          </div>

          {/* Primary WhatsApp Action Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Chat on WhatsApp ({PRACTITIONER_PHONE_DISPLAY})</span>
            </button>

            <a
              href={`tel:+${PRACTITIONER_PHONE_NUMBER}`}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-full text-xs font-medium text-deep-blue-grey bg-white hover:bg-[#FFF8EF] border border-[#D1B477]/35 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D1B477]" />
              <span>Direct Call</span>
            </a>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
