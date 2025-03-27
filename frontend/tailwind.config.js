/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000205",
        yellow: "#EFEF14",
        gray: "#CECECE",
        primary: "#503ABA",
        secondary: "#111111",
        tertiary: "#222222",
        accent: "#333333",
        background: "#444444",
      },

    },
  },
  plugins: [],
}