/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ["'Nunito Sans', sans-serif"],
        Oswald: ["'Oswald', sans-serif"]
      },
      colors: {
        secondary: '#0ea5e9'
      }
    }
  },
  plugins: []
}
