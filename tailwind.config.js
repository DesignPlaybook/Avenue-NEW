/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        plum: '#562D72', violet: '#7A3FD0', lilac: '#F3ECFB', ivory: '#FCFAFF',
        amber: '#FFC933', coral: '#F25C5C', orange: '#F27A2E', ink: '#1B1033', 'light-gray': '#F6F7F9',
      },
      fontFamily: { sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      backgroundImage: {
        'cta-gradient': 'linear-gradient(135deg, #FFC933, #F27A2E, #F25C5C)',
        'brush': 'linear-gradient(135deg, #7A3FD0, #562D72)',
      },
      boxShadow: { soft: '0 30px 60px -30px rgba(86,45,114,.35)' },
    },
  },
  plugins: [],
}
