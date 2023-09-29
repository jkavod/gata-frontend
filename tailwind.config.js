/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#333333',
        gold: '#E8CE6A',
        white: '#FFFFFF',
      },
      fontFamily: {
        cursive: ['Bruno Ace SC'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        backfiller: "url('../../assets/backfiller.png')",
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
    },
  },
  plugins: [],
};
