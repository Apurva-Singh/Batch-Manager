const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      '75%' : "75%",
},
    padding: {
      "10": "10px",
      8: "8px",
      20: "20px",
      25: "25px",
      2: "2px",
      px: "1px",
    },
    fontSize: {
      40: "40px",
      14: "14px",
    },
    colors: {
      primary: "#4361ee",
      black: colors.black,
      white: colors.white,
      indigo: colors.indigo,
      gray: colors.gray,
      red:colors.red,
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-auth": "url('/./src/authHero.png')",
      }),
      outline: {
        indigo: "#4361ee",
      },
    
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};
