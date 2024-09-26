/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        green: "#317159",
        mediumgreen: "#e1eee4",
        darkgray: "#d7e0df",
        lightBackground: "#e8eceb",
        darkgreen: "#265947",
        lightgreen: "#b1cac2",
        lightgray: "#dfe7e9",
        lightpink: "#cc39a4",
        ramagreen: "#0e272e",
      },
    },
  },
  plugins: [],
};
