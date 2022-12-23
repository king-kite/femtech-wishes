/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  plugins: [],
  theme: {
    extend: {},
  },
}