/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-jp': '#292841',
        'secondary-jp': '#fff',
        'titulo-jp': '#fff',
        'fundo': '#312F51',
        'hover-color': '#1C1B29',
        'card': '#292841'
      },
      fontFamily: {
        'font-header': ['Sedan SC', 'serif'],
        'font-sub': ["Inika", 'serif'],
        'font-text': ["Roboto", 'sans-serif']
      }
    },
  },
  plugins: [],
}