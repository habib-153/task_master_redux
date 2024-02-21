/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT ({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2453DF',
        secondary: '#0C1F58',
      },
    },
  },
  plugins: [],
  // plugins: [require('@tailwindcss/forms')],
})

// extend: {
//   colors: {
//     primary: '#2453DF',
//     secondary: '#0C1F58',
//   },
// },