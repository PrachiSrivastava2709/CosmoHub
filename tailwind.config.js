/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/components/*.jsx", "./src/pages/**/*.jsx", "./src/*.jsx"],
  theme: {
    colors: {
      'blue': '#4c0aa1',
      'violet': {
        'light': '#fff',
        DEFAULT: '#8e1191',
        'dark': '#3b0764'
      }
    },
    fontFamily: {
      'headings': ['"Krona One"'],
      'para': ['Inter']
    },
    extend: {},
  },
  plugins: [],
}

