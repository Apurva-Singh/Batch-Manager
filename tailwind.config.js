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
    fontFamily: {
      sans: "'Nunito',sans-serif",
    },
    fontSize: {
      40: "40px",
      36:"36px",
      14: "14px",
    },
    colors: {
      primary: "#4361ee",
      black: colors.black,
      white: colors.white,
      indigo: colors.indigo,
      gray: colors.gray,
      red:colors.red,
      secondary: "#0e1726",
      blue: colors.blue,
      yellow: colors.yellow,
      green: colors.green,

    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-auth": "url('/./src/authHero.png')",
      }),
      outline: {
        indigo: "#4361ee",
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
       },
       spacing: {
         '20%': '20%',
        '30%': '30%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%':'90%',
        '100%':'100%',
      }
    
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['even'],
    },
  },
  plugins: [],
};
