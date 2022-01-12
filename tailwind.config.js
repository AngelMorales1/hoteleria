const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'large': '50px',
        'Xlarge': '100px'
      }
    },
    screens: {
      'mini': '375px',
      'xs': '475px',
      ...defaultTheme.screens
    }
  },
  variants: {},
  plugins: []
}
