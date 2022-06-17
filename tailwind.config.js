/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        shadowsIntoLight: "'Shadows Into Light', cursive",
        karla: "'Karla', sans-serif",
      },
    },
  },
  plugins: [],
};
