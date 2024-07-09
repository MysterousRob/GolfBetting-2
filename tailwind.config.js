/** @type {import('tailwindcss').Config} */
export default { // This changes, cause we are not using out of date commonJS
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}