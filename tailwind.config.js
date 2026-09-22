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
        'eco-green': '#40916C',
        'eco-dark': '#2D6A4F',
        palette: {
          olive: '#40916C',
          white: '#FFFFFF',
          beige: '#D8F3DC',
          mint: '#74C69D',
          forest: '#1B4332',
          moss: '#2D6A4F',
        },
        brand: {
          forest: '#1B4332',
          moss: '#2D6A4F',
          olive: '#40916C',
          mint: '#74C69D',
          beige: '#D8F3DC',
          sage: '#52796F',
          linen: '#F4FAF6',
          kraft: '#EAF5EE',
          sand: '#D8F3DC',
          gold: '#74C69D',
          'gold-light': '#D8F3DC',
          charcoal: '#1B4332',
          muted: '#52796F',
        }
      }
    },
  },
  plugins: [],
}