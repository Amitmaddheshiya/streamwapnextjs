module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./tailwind/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
        'height': 'height'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
