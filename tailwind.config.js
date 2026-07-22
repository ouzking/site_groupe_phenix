/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Exact brand colors extracted from the PHENIX logo
        brand: {
          50:  '#FAF5E8',
          100: '#F3E9CC',
          200: '#E5D09A',
          300: '#D4B15F',
          400: '#B8901A',
          500: '#7B5209', // Primary brand bronze-gold (logo color)
          600: '#6B4A09',
          700: '#573B08',
          800: '#3E2A05',
          900: '#261A03',
        },
        gold: {
          50:  '#FAF5E8',
          100: '#F5ECCE',
          200: '#EDD89A',
          300: '#DFC060',
          400: '#C9A02A',
          500: '#A07818', // warm gold for highlights
          600: '#7B5209', // = brand-500
          700: '#5E3D07',
          800: '#3E2805',
          900: '#1F1402',
        },
        anthracite: {
          50:  '#F5F5F4',
          100: '#E8E7E5',
          200: '#D0CDCA',
          300: '#ABA6A0',
          400: '#7A746E',
          500: '#534D47',
          600: '#3C3833',
          700: '#2C2925',
          800: '#1C1A18',
          900: '#0E0D0C',
          950: '#080706',
        },
        ivory: {
          50:  '#FDFCF8',
          100: '#FAF8F2',
          200: '#F3EFE3',
          300: '#E9E3D1',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Manrope', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.3em',
        premium: '0.12em',
        tight: '-0.025em',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        premium: '0 4px 24px -4px rgba(14,13,12,0.12), 0 1px 3px rgba(14,13,12,0.06)',
        'premium-lg': '0 20px 60px -12px rgba(14,13,12,0.20), 0 4px 16px rgba(14,13,12,0.06)',
        brand: '0 8px 32px -8px rgba(123,82,9,0.40)',
        'brand-lg': '0 12px 48px -8px rgba(123,82,9,0.55)',
        glass: '0 4px 24px rgba(14,13,12,0.08)',
        'glass-dark': '0 8px 32px rgba(0,0,0,0.50)',
        float: '0 32px 72px -16px rgba(14,13,12,0.28)',
        inset: 'inset 0 2px 8px rgba(14,13,12,0.08)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg,#C9A02A 0%,#7B5209 45%,#573B08 100%)',
        'brand-shine':    'linear-gradient(110deg,#573B08 0%,#DFC060 30%,#F5ECCE 50%,#DFC060 70%,#573B08 100%)',
        'brand-soft':     'linear-gradient(135deg,#C9A02A 0%,#A07818 100%)',
        'dark-hero':      'linear-gradient(160deg,#0E0D0C 0%,#1C1A18 60%,#2C2925 100%)',
        'radial-brand':   'radial-gradient(ellipse 80% 50% at 50% -10%,rgba(123,82,9,0.18),transparent)',
        'radial-brand-sm':'radial-gradient(circle at 50% 0%,rgba(123,82,9,0.12),transparent 60%)',
        'grid-faint':     'linear-gradient(rgba(123,82,9,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(123,82,9,0.06) 1px,transparent 1px)',
        'stripe-divider': 'repeating-linear-gradient(90deg,transparent,transparent 4px,rgba(123,82,9,0.08) 4px,rgba(123,82,9,0.08) 8px)',
      },
      keyframes: {
        'fade-up':    { '0%':{ opacity:'0', transform:'translateY(28px)' }, '100%':{ opacity:'1', transform:'translateY(0)' } },
        shimmer:      { '0%':{ backgroundPosition:'-200% 0' }, '100%':{ backgroundPosition:'200% 0' } },
        'float-slow': { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-16px)' } },
        'pulse-brand':{ '0%,100%':{ opacity:'0.35' }, '50%':{ opacity:'0.8' } },
        'spin-slow':  { '0%':{ transform:'rotate(0deg)' }, '100%':{ transform:'rotate(360deg)' } },
        marquee:      { '0%':{ transform:'translateX(0)' }, '100%':{ transform:'translateX(-50%)' } },
        'scale-in':   { '0%':{ opacity:'0', transform:'scale(0.94)' }, '100%':{ opacity:'1', transform:'scale(1)' } },
        'draw':       { '0%':{ strokeDashoffset:'1' }, '100%':{ strokeDashoffset:'0' } },
      },
      animation: {
        'fade-up':    'fade-up 0.75s ease-out forwards',
        shimmer:      'shimmer 3.5s linear infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'pulse-brand':'pulse-brand 4s ease-in-out infinite',
        'spin-slow':  'spin-slow 30s linear infinite',
        marquee:      'marquee 32s linear infinite',
        'scale-in':   'scale-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
