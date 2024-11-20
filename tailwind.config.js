/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#f5f5f5",
        gray: "#bbb",
        border: "#aa0989",
        "btn-bg": "#2a2362",
        primary: "rgba(255, 37, 212, 1)",
        secondary: "rgba(57, 63, 210, 1)",
        sombra: "rgba(255, 255, 255, 0.15)",
      },
      fontFamily: {
        primary: ["Exo 2", "sans-serif"],
        secondary: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
