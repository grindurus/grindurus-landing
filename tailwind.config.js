/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['attribute', 'data-theme'],
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
          to: { offsetDistance: '100%' },
        },
        'particle-fly': {
          '0%':   { transform: 'translate(-50%,-50%) translate(0,0) scale(1)', opacity: '1' },
          '40%':  { transform: 'translate(-50%,-50%) translate(var(--mid-x),var(--mid-y)) scale(0.9)', opacity: '0.9' },
          '100%': { transform: 'translate(-50%,-50%) translate(var(--end-x),var(--end-y)) scale(0.4)', opacity: '0' },
        },
      },
      animation: {
        shimmer:          'shimmer 8s ease-in-out infinite',
        'marquee-scroll': 'marquee-scroll 30s linear infinite',
        'orbit-infinity': 'orbit-infinity 80s linear infinite',
        'particle-fly':   'particle-fly 3s ease-in-out forwards',
      },
      minHeight: {
        '70vh': '70vh',
      },
    },
  },
  plugins: [],
}
