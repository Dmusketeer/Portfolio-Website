/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      12: "12px",
      50: "50px",
      200: "200px",
    },
    extend: {
      margin: {
        "5px": "5px",
        "100px": "100px",
      },
    },
  },
  plugins: [],
};
