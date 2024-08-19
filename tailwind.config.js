/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}",],
  theme: {
    extend: {
      colors: {
        customColor: '#111111',
        yellowColor: '#FFB400',
        inputColor:'#252525',
        inputTextColor:'#757575'
      },
    },
  },
  plugins: [],
}

