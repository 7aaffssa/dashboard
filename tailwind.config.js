/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'primary': 'white',
        'primary-dark': '#1a1a1a',
        'secondary': '#f8fafc',
        'secondary-dark': '#2d3748',
      },
      textColor: {
        'primary': '#1a1a1a',
        'primary-dark': 'white',
        'secondary': '#4a5568',
        'secondary-dark': '#cbd5e0',
      }
    },
  },
  plugins: [],
};