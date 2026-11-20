/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          pink: {
            50: '#FFF5F7',
            100: '#FFE4E9',
            200: '#FCD1DA',
            300: '#F9A8BA',
            400: '#F47293',
            500: '#E84A73',
            600: '#D12856',
            700: '#B01841',
          },
          gold: {
            50: '#FDFCF7',
            100: '#FAF4DC',
            200: '#F5E8B4',
            300: '#EDD683',
            400: '#E4BF4E',
            500: '#D4AF37', // Classic Royal Gold
            600: '#B89225',
            700: '#947219',
            800: '#755716',
          },
          rose: '#B76E79',
          ivory: '#FFFDF9',
          champagne: '#F8F1E5',
          cream: '#FAF6EE'
        },
        kerala: {
          ivory: '#FBF6EC',
          maroon: '#7A1F2B',
          gold: '#C9A227',
          green: '#6B8F5E',
          blush: '#E8A3A3',
          charcoal: '#2B2B2B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        handwriting: ['"Caveat"', '"Kalam"', '"Segoe Print"', 'cursive'],
        signature: ['"Alex Brush"', '"Dancing Script"', '"Great Vibes"', 'cursive'],
        sans: ['"Montserrat"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.4)',
        'pink-glow': '0 0 25px rgba(244, 114, 147, 0.3)',
        'card-royal': '0 10px 30px -5px rgba(212, 175, 55, 0.2), 0 20px 40px -15px rgba(232, 74, 115, 0.15)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
