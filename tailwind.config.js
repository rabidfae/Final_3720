/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    './script.js',
    './index.html',
    './server.js',],
  theme: {
    extend: {  
      colors:{
      primary : { 
        light: 'rgb(161,229,195)',
        dark: 'rgb(20,154,124)',
      },
     
  },},
  
  plugins: [],
}
}

