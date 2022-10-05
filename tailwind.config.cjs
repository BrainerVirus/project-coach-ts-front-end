/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      "3xl": "1600px",
      "4xl": "1920px",
    },
    extend: {
      aspectRatio: {
        "4/3": "4/3",
      },
    },
    colors: {
      primary: "#140c36;",
      secondary: "#261767",
      tertiary: "#8c52ff",
      semiTansparent: "rgba(0, 0, 0, 0.411)",
    },
    fontFamily: {
      Kanit: ["Kanit", "sans-serif"],
      baskerville: ["Libre Baskerville", "serif"],
    },
    fontSize: {
      "step--2": "clamp(0.87rem, calc(0.79rem + 0.41vw), 1.28rem)",
      "step--1": "clamp(1.04rem, calc(0.93rem + 0.56vw), 1.6rem)",
      "step-0": "clamp(1.25rem, calc(1.1rem + 0.75vw), 2rem)",
      "step-1": "clamp(1.5rem, calc(1.3rem + 1vw), 2.5rem)",
      "step-2": "clamp(1.8rem, calc(1.54rem + 1.33vw), 3.13rem)",
      "step-3": "clamp(2.16rem, calc(1.81rem + 1.75vw), 3.91rem)",
      "step-4": "clamp(2.59rem, calc(2.13rem + 2.29vw), 4.88rem)",
      "step-5": "clamp(3.11rem, calc(2.51rem + 2.99vw), 6.1rem)",
    },
  },
  plugins: [],
});
