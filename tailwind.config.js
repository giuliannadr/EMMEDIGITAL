/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        foreground: '#FAFAFA',
        brand: '#FF0000',
        card: '#0a0a0a',
        'card-hover': '#111111',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
        display: ['Syne', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-.04em',
        tight: '-.02em',
      }
    },
  },
  plugins: [],
}
