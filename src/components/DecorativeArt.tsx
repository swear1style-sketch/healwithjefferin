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

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.716 1.456h.005c6.554 0 11.89-5.335 11.893-11.892a11.82 11.82 0 00-3.475-8.411" />
  </svg>
);
