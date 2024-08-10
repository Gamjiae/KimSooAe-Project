/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#028AF2',
        'lightBlue': '#D1EAFD',
        'gray': '#D9D9D9',
        '666': '#666666',
        '80': '#808080'
      },
      fontSize: {
        '15px': '15px',
      },
    },
  },
  plugins: [],
}