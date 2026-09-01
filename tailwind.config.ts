import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sparkles: {
          primary: '#D81B60',       // Primary Vibrant Pink
          primaryDark: '#AD1457',   // Deep Pink
          dark: '#3A0B22',          // Deep Plum-Pink background
          wine: '#6A123A',          // Rich Velvet Rose / Wine-Pink
          accent: '#D81B60',        // Main Pink Brand Accent
          pinkAccent: '#EC407A',    // Rose Pink Accent
          blush: '#FCE4EC',         // Soft Pink Surface
          ivory: '#FFF5F8',         // Light Blush Background
          cream: '#FCE4EC',         // Soft Pink Cream
          gold: '#D4AF6A',          // Champagne Accent
          goldLight: '#F5E6C8',     // Light Champagne
          textDark: '#2A1020',      // Dark Plum Text
          textMuted: '#6B4A58',     // Secondary Muted Text
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 20px 40px -15px rgba(216, 27, 96, 0.08)',
        glow: '0 0 30px 0 rgba(216, 27, 96, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
