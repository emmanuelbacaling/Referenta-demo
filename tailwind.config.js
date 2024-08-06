/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#1c8f75",
        900: "#3f9a82",
        800: "#58a58f"
      },
      white: "#fff",
      disabled: "#cccfd1",
      black: "#1a262f",
      success: {
        DEFAULT: "#198754",
        700: "#6bab85"
      }
    },
    extend: {}
  },
  plugins: []
};
