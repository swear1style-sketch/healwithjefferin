import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './DecorativeArt';
import { PRACTITIONER_PHONE_DISPLAY, PRACTITIONER_PHONE_NUMBER } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${PRACTITIONER_PHONE_NUMBER}?text=${encodeURIComponent(
    'Hello Jefferin, I am reaching out from your website Heal Your Trauma and would love to connect with you.'
  )}`;

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-40">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with Jefferin on WhatsApp at ${PRACTITIONER_PHONE_DISPLAY}`}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center space-x-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white"
      >
        {/* Glowing breathing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-sm animate-pulse pointer-events-none" />

        <div className="relative flex items-center justify-center">
          <WhatsAppIcon className="w-5 h-5 text-white" />
        </div>

        <div className="hidden sm:flex flex-col text-left pr-1">
          <span className="text-[10px] uppercase tracking-wider text-white/90 font-medium leading-none">
            Chat With Jefferin
          </span>
          <span className="text-xs font-semibold tracking-wide text-white leading-tight font-mono">
            {PRACTITIONER_PHONE_DISPLAY}
          </span>
        </div>
      </motion.a>
    </aside>
  );
};
