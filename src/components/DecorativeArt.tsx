import React from 'react';

export const LotusArt: React.FC<{ className?: string }> = ({ className = "w-12 h-12 text-champagne-gold" }) => (
  <svg
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Central Petal */}
    <path d="M50 8 C47 25 45 45 50 62 C55 45 53 25 50 8 Z" fill="rgba(209, 180, 119, 0.08)" />
    
    {/* Inner Left Petal */}
    <path d="M50 20 C40 28 35 44 48 62" />
    <path d="M48 62 C38 48 42 30 50 20" />
    
    {/* Inner Right Petal */}
    <path d="M50 20 C60 28 65 44 52 62" />
    <path d="M52 62 C62 48 58 30 50 20" />
    
    {/* Mid Left Petal */}
    <path d="M47 34 C30 38 22 52 44 65" />
    <path d="M44 65 C26 55 32 40 47 34" />
    
    {/* Mid Right Petal */}
    <path d="M53 34 C70 38 78 52 56 65" />
    <path d="M56 65 C74 55 68 40 53 34" />
    
    {/* Lower Base Leaves */}
    <path d="M30 63 C18 64 12 70 35 72 C45 73 48 67 48 65" />
    <path d="M70 63 C82 64 88 70 65 72 C55 73 52 67 52 65" />
    
    {/* Base Calyx */}
    <path d="M40 70 C46 74 54 74 60 70" />
    <circle cx="50" cy="30" r="1.5" fill="currentColor" />
  </svg>
);

export const SacredGeometryRing: React.FC<{ className?: string }> = ({ className = "w-64 h-64 text-champagne-gold/30" }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="0.8"
  >
    <circle cx="100" cy="100" r="95" strokeDasharray="3 3" />
    <circle cx="100" cy="100" r="82" />
    <circle cx="100" cy="100" r="68" strokeDasharray="1 4" />
    <circle cx="100" cy="100" r="50" />
    
    {/* Delicate 8-point intersecting radiant arches */}
    <path d="M100 18 C100 60 100 140 100 182" strokeWidth="0.5" strokeOpacity="0.5" />
    <path d="M18 100 C60 100 140 100 182 100" strokeWidth="0.5" strokeOpacity="0.5" />
    <path d="M42 42 C70 70 130 130 158 158" strokeWidth="0.5" strokeOpacity="0.3" />
    <path d="M158 42 C130 70 70 130 42 158" strokeWidth="0.5" strokeOpacity="0.3" />
    
    {/* Tiny celestial stars */}
    <circle cx="100" cy="18" r="1.5" fill="currentColor" />
    <circle cx="100" cy="182" r="1.5" fill="currentColor" />
    <circle cx="18" cy="100" r="1.5" fill="currentColor" />
    <circle cx="182" cy="100" r="1.5" fill="currentColor" />
  </svg>
);

export const BotanicalSprig: React.FC<{ className?: string; flipped?: boolean }> = ({ className = "w-16 h-24 text-muted-sage/40", flipped = false }) => (
  <svg
    viewBox="0 0 60 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flipped ? 'scale-x-[-1]' : ''}`}
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
  >
    <path d="M30 110 C32 80 25 50 40 10" />
    {/* Leaves */}
    <path d="M31 90 C22 86 16 90 20 98 C26 98 30 94 31 90 Z" fill="currentColor" fillOpacity="0.25" />
    <path d="M30 75 C40 70 45 74 42 82 C35 83 31 79 30 75 Z" fill="currentColor" fillOpacity="0.25" />
    <path d="M28 58 C18 52 14 58 19 65 C25 65 28 61 28 58 Z" fill="currentColor" fillOpacity="0.25" />
    <path d="M31 42 C42 36 46 41 43 48 C37 49 32 45 31 42 Z" fill="currentColor" fillOpacity="0.25" />
    <path d="M34 26 C26 20 22 24 27 31 C32 32 35 29 34 26 Z" fill="currentColor" fillOpacity="0.25" />
    <path d="M39 12 C44 7 47 11 44 16 C40 18 38 15 39 12 Z" fill="currentColor" fillOpacity="0.25" />
  </svg>
);
