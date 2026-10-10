/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta "Dark Luxury — RB Gold". Superficies con tinte cálido (nunca negro puro).
        superficie: {
          0: '#0B0A09',
          1: '#121110',
          2: '#181715',
          3: '#1F1D1A',
        },
        // Texto sobre superficies oscuras; contraste ≥4.5:1 contra superficie-3
        tinta: {
          DEFAULT: '#F0EBE1',
          2: '#C2BCB0',
          3: '#A09A8E',
        },
        oro: {
          DEFAULT: '#C9963A',
          claro: '#E0B86A',
        },
        acento: '#8B1A1A',
        linea: {
          DEFAULT: 'rgba(240,235,225,0.10)',
          acento: 'rgba(139,26,26,0.45)',
          oro: 'rgba(201,150,58,0.35)',
        },
        verde: {
          profundo: '#2C4A2E',
          oliva:    '#5A6E3A',
        },
        tierra: {
          claro: '#C4A882',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Poppins', 'system-ui', 'sans-serif'],
        body:  ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'scroll-arrow': 'scrollArrow 2s ease-in-out infinite',
      },
      keyframes: {
        scrollArrow: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
          '50%':      { transform: 'translateY(10px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
