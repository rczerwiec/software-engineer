/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-white': '#FFFFFF',
        'primary-black': '#000000',
        'primary-gray': '#F6F6F6',
        'transparent-gray': "rgba(0,0,0, .8)",
      }
    },
  },
  plugins: [],
}
