/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        indigo: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
      },
      animation: {
        'spin-slow':    'spin 20s linear infinite',
        'spin-reverse': 'spin 15s linear infinite reverse',
        'pulse-dot':    'pulseDot 2s ease-in-out infinite',
        'fade-up':      'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%':     { opacity: '0.5', transform: 'scale(1.2)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        card:       '0 4px 24px rgba(79,70,229,0.08)',
        'card-hover':'0 12px 40px rgba(79,70,229,0.18)',
        accent:     '0 4px 20px rgba(79,70,229,0.35)',
      },
    },
  },
  plugins: [],
}
