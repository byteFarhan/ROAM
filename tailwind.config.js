/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          // md: "2rem",
          // lg: "4rem",
          // xl: "5rem",
          // "2xl": "6rem",
        },
      },
      fontFamily: {
        "playfair-display": "'Playfair Display', serif",
        montserrat: "'Montserrat', sans-serif ",
      },
      colors: {
        primary: "#FF681A",
        title: "#303030",
        natural: "#595959",
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: ["light"],
  // },
};
