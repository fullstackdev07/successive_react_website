/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#317159",
        mediumgreen : "#e1eee4",
        darkgray : "#d7e0df",
        lightBackground : "#e8eceb",
        darkgreen : "#265947",
        lightgreen:"#b1cac2",
        lightgray : "#dfe7e9",
        lightpink : "#cc39a4",
        ramagreen : "#0e272e"
      },
    },
  },
  plugins: [],
}
