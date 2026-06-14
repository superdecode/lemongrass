/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C89B2F',
        emerald: '#0F5C4D',
        ivory: '#F8F5EE',
        charcoal: '#232323',
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        accent: ['"Bodoni Moda"', 'Didot', 'serif'],
        sans: ['Manrope', 'Helvetica Neue', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(212, 175, 55, 0.18)',
        sheet: '0 -24px 80px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'gold-line':
          'linear-gradient(90deg, transparent, rgba(212,175,55,.7), transparent)',
      },
    },
  },
  plugins: [],
}
