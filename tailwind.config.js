module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Lato", "sans-serif"],
      body: ["Noto", "sans-serif"],
    },
    extend: {
      colors: {
        // Background colors
        "dk-blue": "#000A3D",
        "blue-1": "#131F4C",
        "blue-2": "#4F5B8B",
        "lt-blue": "#C7CFEF",
        "bg-info": "DEDEDE",
        "bg-tl": "F8F8F8",
        "bg-info": "EFEFEF",
        // Text Colors
        "text-dk": "#252525",
        "text-grey": "#636367",
        "unvist-link": "#284162",
        "select-link": "#0A75C6",
        "visted-link": "#29156B",
        "red-err": "#AF3C43",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
