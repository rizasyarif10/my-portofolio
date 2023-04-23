/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      opacity: {
        10: "0.1",
        20: "0.2",
        95: "0.95",
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        home: "url('/src/assets/image/background/home.jpg')",
        about: "url('/src/assets/image/background/about.jpg')",
        contact: "url('/src/assets/image/background/contact.jpg')",
      },
    },
  },
  plugins: [],
};
