import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#04070f',
          900: '#0a1120',
          800: '#111a2e',
          700: '#1a2540',
        },
        accent: {
          blue: '#3b7bff',
          cyan: '#22d3ee',
          amber: '#f5a524',
          violet: '#8b7bff',
          emerald: '#2dd4a7',
          rose: '#fb7185',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(59,123,255,0.35)',
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, #16213899 1px, transparent 1px), linear-gradient(to bottom, #16213899 1px, transparent 1px)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
