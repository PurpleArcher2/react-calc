/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone1: { max: "450px" },
      ipad1: { max: "725px" },
      desktop1: { max: "1251px" },
      desktop2: { max: "1161px" },
    },
    colors: {
      // THEME 1 BLUE BACKGROUND
      "desaturated-blue-bg": "hsl(222, 26%, 31%)",
      "desaturated-blue-keypad": "hsl(223, 31%, 20%)",
      "desaturated-blue-result": "hsl(224, 36%, 15%)",
      // GENERAL KEY COLORS
      "ligh-gray-main-keys": "hsl(30, 25%, 89%)",
      "ligh-gray-shadow": "hsl(28, 16%, 65%)",
      // ADDITIONAL COLORS FOR KEYS
      equalRed: "hsl(6, 63%, 50%)",
      equalRedShadow: "hsl(6, 70%, 34%)",
      "dark-blue-key": "hsl(225, 21%, 49%)",
      "dark-blue-key-shadow": "hsl(224, 28%, 35%)",
      // TEXT COLORS
      "dark-grayish-blue": "hsl(221, 14%, 31%)",

      // THEME 2
      "bg-light-gray": "hsl(0, 0%, 90%)",
      "screen-white": "hsl(0, 0%, 93%)",
      "main-screen-white": "hsl(0, 5%, 81%)",

      // KEYS
      "dark-cyan-del": "hsl(185, 42%, 37%)",
      "orange-equal": "hsl(25, 98%, 40%)",
      "yellow-button": "hsl(45, 7%, 89%)",
    },
    fontFamily: {
      Spartan: ["League Spartan", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
