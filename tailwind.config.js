/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      top: {
        '-200%' : '-200%'
      }
    },
  },
  plugins: [],
};