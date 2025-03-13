/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#259bce',
        'secondary': '#6ec083',
        'dark': '#222222',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.25em',
      },
      height: {
        '100': '25rem',
        '120': '30rem',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
};