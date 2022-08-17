/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      blue: "hsl(228, 45%, 44%)",
      DarkCyan: "hsl(158, 36%, 37%)",
      DarkCyanD: "hsl(156, 42%, 18%)",
      Cream: "hsl(30, 38%, 92%)",
      VeryDarkBlue: "hsl(212, 21%, 14%)",
      DarkGrayishBlue: "hsl(228, 12%, 48%)",
      White: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Fraunces: ["Fraunces", "serif"],
    },
    extend: {
      backgroundImage: {
        "Product-desktop": "url('../images/image-product-desktop.jpg')",
        "Product-mobile": "url('../images/image-product-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
