/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        primary: {
          DEFAULT: '#0ea5e9', // Electric Blue
          foreground: '#ffffff',
        },
        card: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          foreground: '#ffffff',
        },
        border: 'rgba(255, 255, 255, 0.1)',
        accent: {
          DEFAULT: '#a855f7', // Vibrant Purple
          foreground: '#ffffff',
        },
        neon: {
          cyan: '#06b6d4'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'typing': 'typing 2s steps(20, end), blink .75s step-end infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 15px rgba(14, 165, 233, 0.5)' },
          '50%': { opacity: '.7', boxShadow: '0 0 5px rgba(14, 165, 233, 0.2)' },
        }
      }
    },
  },
  plugins: [],
}
