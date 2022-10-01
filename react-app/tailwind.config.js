/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      backgroundImage: {
        'img-portada': 'url(./images/prod_4.jpeg)'
      },
      colors: {
        "soft-pink": {
          "50": "#ffffff",
          "100": "#ffffff",
          "200": "#ffffff",
          "300": "#ffffff",
          "400": "#fffafa",
          "500": "#fff0f0",
          "600": "#f5e6e6",
          "700": "#ebdcdc",
          "800": "#e1d2d2",
          "900": "#d7c8c8"
        }
      }
    },
  },
  plugins: [],
}
