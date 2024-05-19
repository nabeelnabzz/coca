/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
    screens: {
      "vxsm": "280px",
      // => @media (min-width: 300px) { ... }
      "vsm": "360px",
      // => @media (min-width: 300px) { ... }
      "xsm": "450px",
      // => @media (min-width: 450px) { ... }
      "sm": "640px",
      // => @media (min-width: 640px) { ... }
      "smd": "700px",
      // => @media (min-width: 700px) { ... }
      "md": "768px",
      // => @media (min-width: 768px) { ... }
      "lmd": "960px",
      // => @media (min-width: 900px) { ... }
      "lg": "1024px",
      // => @media (min-width: 1024px) { ... }
      "xl": "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1736px",
      // => @media (min-width: 1736px) { ... }
      "4xl": "2000px",
      // => @media (min-width: 2000px) { ... }
    },
  },
  plugins: [],
};
