/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E170F',       // near-black forest green — hero / experience / footer
        cream: '#F4EFE4',     // warm cream — about / testimonials
        paper: '#FBF8F2',     // near-white — skills section
        clay: '#C1834E',      // terracotta accent — CTAs, eyebrow text
        moss: '#293A28',      // secondary green — borders, muted text on dark
        stone: '#8A8272',     // muted body text on light sections
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
