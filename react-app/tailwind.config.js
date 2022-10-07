/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      gridTemplateColumns: {
        'autoFitList': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
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
        },
        "pink-cleo": {
          "50": "#ffd9d7",
          "100": "#ffcfcd",
          "200": "#fcc5c3",
          "300": "#f2bbb9",
          "400": "#e8b1af",
          "500": "#dea7a5",
          "600": "#d49d9b",
          "700": "#ca9391",
          "800": "#c08987",
          "900": "#b67f7d"
        },
        "verysoft-pink": {
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
