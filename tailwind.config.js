/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Dark blue from the logo
        secondary: '#F8F9FA',
        'text-primary': '#2D3748',
        'text-secondary': '#4A5568',
        accent: '#00B8A9' // Teal as accent color
      },
    },
  },
  plugins: [],
};