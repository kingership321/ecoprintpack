/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        'eco-green': '#10b981',
        'eco-dark': '#047857',
        brand: {
          forest: '#12231A',
          moss: '#1D3B2C',
          sage: '#3B5F4A',
          linen: '#FAF7F2',
          kraft: '#F3ECE1',
          sand: '#E7DDD0',
          gold: '#C9933B',
          'gold-light': '#E3B872',
          charcoal: '#1C1A17',
          muted: '#6B665E',
        }
      }
    },
  },
  plugins: [],
}