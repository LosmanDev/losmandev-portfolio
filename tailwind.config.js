/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        30: "30px",
        48: "48px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: 0, transform: "translateY(-20%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        slideIn: "slideIn .8s ease-in-out",
        fadeUp: "fadeUp 1s ease-in-out",
        fadeDown: "fadeDown 1.5s ease-in-out",
        slideDown: "slideDown .8s ease-in-out",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgb(45,46,50)",

          secondary: "rgb(45,46,50)",

          accent: "rgb(255,255,255)",

          neutral: "rgb(45,46,50)",

          "base-100": " rgb(249,249,249)",

          info: "rgba(0, 0, 0, 0)",

          success: "#146c56",

          warning: "#fccc59",

          error: "#f51449",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
