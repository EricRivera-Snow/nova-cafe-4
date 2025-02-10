/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#3C3C3C",
        blueWave: "#016CA2",
        rosyBrown: "#C8A493",
        dutchWhite: "#F4E1C0",
        desertBrown: "#D26C1E",
      },
    },
  },
  plugins: [],
};
