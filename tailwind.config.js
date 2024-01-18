/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ef233c',    // Custom primary color
        secondary: '#6574cd',  // Custom secondary color
        accent: '#f6993f',     // Custom accent color
      },
    },
  },
  plugins: [],
}

