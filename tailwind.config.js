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
        accent: 'rgb(12,12,12)',     // Custom accent color
        light:'#e5e5e5',
      },
      spacing: {
        '128': '600px',
        '126': '300px',
        '100': '300px',
        '101': '100px'
      }
    },
  },
  plugins: [],
}

