/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "sm": "480px"
      },
      fontFamily: {
        "nunito": ['nunito', 'sans-serif'],
        "montserrat": ['Montserrat', 'sans-serif']
      },
      spacing: {
        "big": "50rem"
      }
    },
  },
  plugins: [],
}
