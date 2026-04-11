/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#ff69b4',
          red:  '#ff1493',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #ff69b4, #ff1493)',
        'shimmer':        'linear-gradient(90deg, #ff69b4, #ffffff, #ff1493, #ffffff, #ff69b4)',
        'particle':       'linear-gradient(135deg, #ff69b4, #a78bfa)',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
        'marquee-scroll': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% / 4))' },
        },
        'orbit-infinity': {
          to: { marginLeft: '0' },   /* placeholder – animation driven by RAF now */
        },
      },
      animation: {
        shimmer:          'shimmer 8s ease-in-out infinite',
        'marquee-scroll': 'marquee-scroll 30s linear infinite',
        'orbit-infinity': 'orbit-infinity 0s linear',  /* driven by RAF, not CSS */
      },
      minHeight: {
        '70vh': '70vh',
      },
    },
  },
  plugins: [],
}
