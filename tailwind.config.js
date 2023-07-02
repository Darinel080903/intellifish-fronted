/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'principal-color': '#38A3A5',
        'hover-color': '#22577A',
        'light-color': '#80ED99',
        'light-white': '#C7F9CC',
        'intermidiate': '#57CC99',
        'gray-custom': '#D9D9D9',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      }

    },
  },
  plugins: [],
}
