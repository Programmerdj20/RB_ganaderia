/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta "Dark Luxury — RB Gold"
        oro:    '#C9963A',  // dorado cálido del logo
        acento: '#8B1A1A',  // carmesí del borde del logo
        verde: {
          profundo: '#2C4A2E',
          oliva:    '#5A6E3A',
        },
        tierra: {
          claro: '#C4A882',
        },
        hueso:  '#F0EBE1',
        carbon: '#111111',
        gris:   '#7A7A7A',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Poppins', 'system-ui', 'sans-serif'],
        body:  ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':      'fadeUp 0.9s ease-out forwards',
        'fade-in':      'fadeIn 1.2s ease-out forwards',
        'scroll-arrow': 'scrollArrow 2s ease-in-out infinite',
        'glow-pulse':   'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollArrow: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
          '50%':      { transform: 'translateY(10px)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.15)' },
        },
      },
    },
  },
  plugins: [],
};
