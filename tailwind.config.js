/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    './script.js',
    './index.html',
    './server.js',],
  theme: {
    extend: {  
      blur: {
        xs: '2px',
      },
      colors:{
      primary : { 
        light: 'rgb(161,229,195)',
        dark: 'rgb(20,154,124)',
        accent: 'rgb(242,240,238)',
        accentdark: 'rgb(231,213,186)'
      },
     
  },},
  
  plugins: [],
}
}

