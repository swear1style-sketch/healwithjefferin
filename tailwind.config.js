/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'powder-blue': '#DCE8F8',
        'pale-blue': '#EAF2FC',
        'soft-lavender': '#E5D7F4',
        'light-lilac': '#F0EAF8',
        'warm-ivory': '#FFF8EF',
        'muted-coral': '#E9B9AC',
        'coral-accent': '#D9826C',
        'champagne-gold': '#D1B477',
        'gold-soft': '#E6D3A3',
        'muted-sage': '#B9CCBA',
        'deep-blue-grey': '#34455C',
        'soft-slate': '#556882',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'ethereal': '0 10px 40px -15px rgba(52, 69, 92, 0.07)',
        'glow-gold': '0 0 35px -5px rgba(209, 180, 119, 0.25)',
        'glow-soft': '0 15px 50px -10px rgba(229, 215, 244, 0.35)',
      },
      borderRadius: {
        'arch': '120px 120px 16px 16px',
        'arch-full': '240px 240px 16px 16px',
      }
    },
  },
  plugins: [],
}
