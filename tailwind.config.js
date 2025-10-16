/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        // Airbnb Cereal fonts
        cerealMedium: ["Cereal-Medium"],
        cerealBold: ["Cereal-Bold"],
        cerealExtraBold: ["Cereal-ExtraBold"],
        cerealLight: ["Cereal-Light"],

        // Helvetica Neue fonts
        helveticaLight: ["HelveticaLight"],
        helveticaBold: ["HelveticaBold"],
        helveticaMedium: ["HelveticaMedium"],
        helveticaThin: ["HelveticaThin"],
        helveticaUltraLight: ["HelveticaUltraLight"],
      },
      colors: {
        primaryBlue: "#8E97FD",
        facebookBlue: "#7583CA",
      },
    },
  },
  plugins: [],
};
