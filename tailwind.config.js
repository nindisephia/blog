const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({addUtilities}){
     const utilities = {
       ".bg-hero":{
         "background-image":"url(/img/hero.png)",
         "background-repeat":"no-repeat",
         "background-size":"cover",
         "background-position":"center"
       }
     };
     addUtilities(utilities); 
    })
  ],
}