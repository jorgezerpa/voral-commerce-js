/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/commons/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: colors,
    extend:{
      maxWidth: {
        full:'100vw'
      }
    },
    extend: {
      keyframes: {
        scaling: {
          '0%, 100%': { transform: 'scale(.0)', opacity:1 },
          '50%': { transform: 'scale(1)', opacity:.8 },
        }
      },
      animation: {
        scaling: 'scaling .5s ease-in-out infinite',
      },
    }
  },
}
