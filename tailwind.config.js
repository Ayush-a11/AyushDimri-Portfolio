/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary: '#ef233c',    // Custom primary color
        secondary: '#6574cd',  // Custom secondary color
        accent: 'rgb(15,15,15)',     // Custom accent color
        light:'#e5e5e5',
      },
    },
  },
  plugins: [],
}

