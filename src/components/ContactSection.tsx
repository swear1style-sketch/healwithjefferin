import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, Copy, AlertCircle, X, Clock } from 'lucide-react';
import { LotusArt } from './DecorativeArt';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPractice, setSelectedPractice] = useState(prefilledOffering || 'Inner Healing');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submittedEmailPrepared, setSubmittedEmailPrepared] = useState(false);

  // Configurable email address for Jefferin Sequeira
  const PRACTITIONER_CONTACT_EMAIL = 'contact@healwithjefferin.in';

  const practices = [
    'Inner Healing',
    'Past Life Regression Therapy',
    'Emotional Healing',
    'Transformative Life Coaching',
    'Workshops & Group Circles',
    'General Inquiry & Consultation',
  ];

  const handleCreateEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Healing Session Inquiry: ${selectedPractice} - ${name || 'New Client'}`
    );
    const body = encodeURIComponent(
      `Hello Jefferin,\n\nMy name is ${name}.\nI would love to book or inquire about: ${selectedPractice}.\n\nMessage / What brings me here:\n${message}\n\nWarm regards,\n${name}\nEmail: ${email}`
    );

    const mailtoUrl = `mailto:${PRACTITIONER_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setSubmittedEmailPrepared(true);
  };

  const handleCopyInquiry = () => {
    const textToCopy = `To: ${PRACTITIONER_CONTACT_EMAIL}\nSubject: Healing Session Inquiry: ${selectedPractice}\nFrom: ${name} (${email})\n\nMessage:\n${message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
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
        className="relative w-full max-w-2xl bg-[#FFF8EF] rounded-3xl p-6 sm:p-10 border border-[#D1B477]/40 shadow-2xl z-10 my-8"
      >
        <button
          onClick={onClose}
          type="button"
          aria-label="Close contact modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-white text-soft-slate hover:text-deep-blue-grey border border-[#D1B477]/30 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-[#E5D7F4]/50 border border-[#D1B477]/30 flex items-center justify-center">
            <LotusArt className="w-4 h-4 text-champagne-gold" />
          </div>
          <span className="text-xs uppercase tracking-widest text-[#D1B477] font-semibold">
            Begin Your Transformation
          </span>
        </div>

        <h3 className="font-serif text-3xl font-normal text-deep-blue-grey mb-2">
          Connect With <span className="italic">Jefferin</span>
        </h3>
        <p className="text-sm text-soft-slate font-light mb-6">
          Ready to start your transformation? Share a few details below and Jefferin will reach out to you with care and confidentiality within 24 hours.
        </p>

        {submittedEmailPrepared ? (
          <div className="p-6 rounded-2xl bg-white border border-[#B9CCBA] text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#B9CCBA]/20 text-[#34455C] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-medium text-deep-blue-grey">
              Your Email Application Has Been Launched
            </h4>
            <p className="text-xs text-soft-slate leading-relaxed">
              We have pre-filled your healing inquiry in your email client addressed to <strong className="text-deep-blue-grey">{PRACTITIONER_CONTACT_EMAIL}</strong>. If your email application did not launch automatically, you can copy your message text below.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={handleCopyInquiry}
                type="button"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-medium bg-[#EAF2FC] border border-[#D1B477]/30 text-deep-blue-grey"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Message Text'}</span>
              </button>

              <button
                onClick={() => setSubmittedEmailPrepared(false)}
                type="button"
                className="px-4 py-2 rounded-full text-xs font-medium text-soft-slate hover:text-deep-blue-grey"
              >
                Edit Message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleCreateEmail} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-deep-blue-grey uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-[#D1B477]/30 focus:border-[#D1B477] focus:ring-1 focus:ring-[#D1B477] text-sm text-deep-blue-grey outline-none transition-all placeholder:text-soft-slate/50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-deep-blue-grey uppercase tracking-wider mb-1.5">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. sarah@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-[#D1B477]/30 focus:border-[#D1B477] focus:ring-1 focus:ring-[#D1B477] text-sm text-deep-blue-grey outline-none transition-all placeholder:text-soft-slate/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-deep-blue-grey uppercase tracking-wider mb-1.5">
                Session or Offering Preference
              </label>
              <select
                value={selectedPractice}
                onChange={(e) => setSelectedPractice(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-[#D1B477]/30 focus:border-[#D1B477] focus:ring-1 focus:ring-[#D1B477] text-sm text-deep-blue-grey outline-none transition-all"
              >
                {practices.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-deep-blue-grey uppercase tracking-wider mb-1.5">
                What would you like to explore or heal?
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share a few words about what you are currently moving through, your goals, or any questions..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-[#D1B477]/30 focus:border-[#D1B477] focus:ring-1 focus:ring-[#D1B477] text-sm text-deep-blue-grey outline-none transition-all placeholder:text-soft-slate/50 resize-none"
              />
            </div>

            {/* Quick response badge */}
            <div className="flex items-center space-x-2 text-xs text-[#34455C] bg-[#EAF2FC] p-3 rounded-xl border border-[#D1B477]/20">
              <Clock className="w-4 h-4 text-champagne-gold shrink-0" />
              <span>We respect your time and privacy. You will receive a response within 24 hours.</span>
            </div>

            <div className="flex items-start space-x-2 text-[11px] text-soft-slate pt-1">
              <AlertCircle className="w-3.5 h-3.5 text-[#D1B477] shrink-0 mt-0.5" />
              <span>
                Inquiry connects directly to Jefferin's practitioner inbox: <code>{PRACTITIONER_CONTACT_EMAIL}</code>.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
              <button
                type="submit"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-deep-blue-grey hover:bg-[#253345] shadow-md transition-all"
              >
                <Send className="w-3.5 h-3.5 text-[#D1B477]" />
                <span>Send Booking Inquiry</span>
              </button>

              <button
                type="button"
                onClick={handleCopyInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-full text-xs font-medium text-deep-blue-grey bg-[#EAF2FC] hover:bg-white border border-[#D1B477]/30 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};
