/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/*.jsx"
  ],
  theme: {
    extend: {},
    colors: {
      // Configure your color palette here
      'navy': '#00274D',
      'bronze': '#A67C00',
      'grey': '#E0E0E0'
    }
  },
  plugins: [],
}

