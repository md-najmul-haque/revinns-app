/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#02094c",
        secondary: "#ff6400",
        accent: "#f8f9fd",
        neutral: "#002B5B",
        "base-100": "#f2f2f2",
      }
    },
  },
  plugins: [],
}

