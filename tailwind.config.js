module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xxs: ["13px", "16px"],
      xs: ["14px", "16px"],
      sm: ["16px", "22px"],
      base: ["18px", "28px"],
      p: ["20px", "30px"],
      h4: ["22px", "20px"],
      h3: ["24px", "24.3px"],
      h2: ["30px", "33.5px"],
      h1: ["34px", "42px"],
      "h1-xl": ["40px", "46px"],
    },
    screens: {
      xxs: "280px",
      xs: "325px",
      sm: "450px",
      md: "550px",
      lg: "768px",
      xl: "992px",
      xxl: "1200px",
    },
    extend: {
      backgroundImage: () => ({
        "footer-parliament-image": "url(../public/landscape.png)",
      }),
      fontFamily: {
        display: ["Lato", "sans-serif"],
        body: ["Noto sans", "sans-serif"],
      },
      colors: {
        "custom-blue": {
          blue: "#2572B4",
          light: "#1492B4",
          dark: "#26374a",
          link: "#0535d2",
          pale: "#E1F0F8",
          bright: "#194D7B"
        },
        "gray-light-200": "#f5f5f5",
        "gray-light-100": "#e0e0e0",
        "gray-light": "#EFEFEF",
        "gray-md": "#CFCFCF",
        "gray-dark": "#444",
        "gray-dark-100": "#333",
        "text-gray": "#5c5c5c",
        "dk-blue": "#26374a",
        "hr-red-bar": "#AE3B43",
        "canada-ca-link-colour": "#7834BC",
        "canada-footer-font": "#284162",
        "canada-footer-hover-font-blue": "#0535d2",
        "footer-background-color": "#f8f8f8",
        "link-unvisited": "#284162",
        "link-hover": "#0000EE",
        "link-visited": "#7834BC",
        "brown-light": "#FCD8B3",
        "brown-lighter": "#FCE8D9",
        "brown-dark": "#803500",
        "green-light": "#DFF0D8",
        "green-dark": "#333333",

      },
      boxShadow: {
        cards: '0px 2px 8px rgba(0,0,0,0.25)',

      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "group-focus"],
      textColor: ["visited", "group-focus"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio")
    // ...
  ],
};
