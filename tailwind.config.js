/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "sm": "480px"
      },
      fontFamily: {
        "nunito": ['nunito', 'sans-serif']
      },
      spacing: {
        "big": "50rem"
      }
    },
  },
  plugins: [],
}
