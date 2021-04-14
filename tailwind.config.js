const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Lato", "sans-serif"],
      body: ["Noto", "sans-serif"],
    },
    extend: {
      colors: {
        // extended base Tailwind colors
        gray: colors.trueGray,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
        lightBlue: colors.lightBlue,
        cyan: colors.cyan,
        lime: colors.lime,
        emerald: colors.emerald,
        // Background colors
        "dk-blue": "#000A3D",
        "blue-1": "#131F4C",
        "blue-2": "#4F5B8B",
        "lt-blue": "#C7CFEF",
        "custom-blue": {
          blue: "#2572B4",
          light: "#1492B4",
          dark: "#26374a",
          link: "#0535d2",
        },

        "lt-gray": "#F8F8F8",
        "md-lt-gray": "#EFEFEF",
        "md-gray": "#DEDEDE",

        // Text Colors
        "font-dk": "#252525",
        "font-gray": "#636367",
        link: {
          DEFAULT: "#284162",
          selected: "#0A75C6",
          visited: "#29156B",
        },
        error: {
          text: "#903534",
          icon: "#d1080c",
          background: "#f1e7e6",
        },
        "red-err": "#AF3C43",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "hover"],
    },
  },
  plugins: [],
};
