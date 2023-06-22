/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#333333',
        'gold': '#E8CE6A',
        'white': '#FFFFFF',
      },
      fontFamily: {
        'cursive' : ['Bruno Ace SC'],
        'sans-serif' : ['Poppins'],
      },
      backgroundImage: {
        'backfiller' : "url('../../assets/backfiller.png')",
      },
      screens: {
        'sm': {'min': '640px', 'max': '1024px'},
      },
    },
  },
  plugins: [],
}