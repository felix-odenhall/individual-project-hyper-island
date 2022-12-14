/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "481px",
      md: "769px",
      lg: "1025px",
      xl: "1201px",
    },
    extend: {
      colors: {
        "primary-green": "#A3D08E",
        "primary-green-t": "#B1D6A0",
        "primary-green-b": "#A2D08D",
        "primary-green-800": "#20493E",
        "primary-green-700": "#395D53",
        "primary-green-600": "#527169",
        "primary-green-500": "#6A857E",
        "primary-green-400": "#839A94",
        "primary-green-300": "#9CAEA9",
        "primary-green-200": "#B4C2BE",
        "primary-green-100": "#CDD6D4",
        "primary-teal-900": "#115E59",
        "primary-teal-800": "#286E69",
        "primary-teal-700": "#407E7A",
        "primary-teal-600": "#588E8A",
        "primary-teal-500": "#709E9B",
        "primary-teal-400": "#88AEAB",
        "primary-teal-300": "#9FBEBC",
        "primary-teal-200": "#B7CECD",
        "primary-teal-100": "#CFDEDD",
        "primary-beige-900": "#928885",
        "primary-beige-800": "#AA9F9C",
        "primary-beige-700": "#C3B6B2",
        "primary-beige-600": "#DBCDC8",
        "primary-beige-500": "#F4E4DF",
        "primary-beige-400": "#F5E6E2",
        "primary-beige-300": "#F6E9E5",
        "primary-beige-200": "#F7ECE8",
        "primary-beige-100": "#F8EEEB",
        "primary-orange-900": "#904221",
        "primary-orange-800": "#A54C26",
        "primary-orange-700": "#BA552B",
        "primary-orange-600": "#CF5F30",
        "primary-orange-500": "#D36F44",
        "primary-orange-400": "#D87F59",
        "primary-orange-300": "#DD8F6E",
        "primary-orange-200": "#E29F82",
        "primary-orange-100": "#E7AF97",
        "primary-brown-900": "#7C2D12",
        "primary-brown-800": "#894229",
        "primary-brown-700": "#965741",
        "primary-brown-600": "#A36C59",
        "primary-brown-500": "#B08170",
        "primary-brown-400": "#BD9688",
        "primary-brown-300": "#CAABA0",
        "primary-brown-200": "#D7C0B7",
        "primary-brown-100": "#E4D5CF",
        "primary-black": "#121212",
        "primary-white": "#FCFCFC",
        "black-opacity-900": "rgba(0, 0, 0, 0.9)",
        "black-opacity-800": "rgba(0, 0, 0, 0.8)",
        "black-opacity-700": "rgba(0, 0, 0, 0.7)",
        "black-opacity-600": "rgba(0, 0, 0, 0.6)",
        "black-opacity-500": "rgba(0, 0, 0, 0.5)",
        "black-opacity-400": "rgba(0, 0, 0, 0.4)",
        "black-opacity-300": "rgba(0, 0, 0, 0.3)",
        "black-opacity-200": "rgba(0, 0, 0, 0.2)",
        "black-opacity-100": "rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
