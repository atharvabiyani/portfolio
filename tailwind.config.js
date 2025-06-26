/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3B82F6',
          600: '#2563EB',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 