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
        dark: "#27272a",
        light: "#f2f2f2",
        yellow: "#EFEF14",
        gray: "#CECECE",
        lightGray: "#646262",
        primary: "#503ABA",
        secondary: "#111111",
        tertiary: "#222222",
        accent: "#333333",
        background: "#444444",
      },
      screens: {
        'sm': '640px',
        'Smd':"716px",
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}