/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ' ./src/**/*.tsx',
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors:{
        900:'#121214'
      }
    },

    
  },
  plugins: [],
}
