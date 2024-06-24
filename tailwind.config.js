/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        "dekstop": "2fr 2fr 2fr 2fr 2fr 2fr",
        "mobile": "0.5fr 0.5fr 0.5fr 0.7fr 0.5fr 0.5fr", 
      }
    },
  },
  plugins: [],
}