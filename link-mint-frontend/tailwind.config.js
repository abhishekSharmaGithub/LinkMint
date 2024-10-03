/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1B1B1B',
        'dark-text': '#f5f5f5',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

