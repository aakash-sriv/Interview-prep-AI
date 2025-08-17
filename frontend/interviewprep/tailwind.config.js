/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Remove darkMode config - v4 handles this automatically
  theme: {
    extend: {},
  },
  plugins: [],
}