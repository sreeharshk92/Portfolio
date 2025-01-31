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
      screens:{
        sml:'440px',
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },

      
    },
  },
  plugins: [],
}

