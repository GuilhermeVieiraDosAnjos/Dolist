/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primaryWhite: "#CEE4F2",
        softBlue: "#A7C6D9",
        softGray : "#6D90A6",
        boldBlue: "#254559",
        darkBlue :"#011526"
      },
      fontFamily:{
      montserrat : ["Montserrat", "sans-serif"],
      julius: ["Julius Sans One", "sans-serif"]
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

