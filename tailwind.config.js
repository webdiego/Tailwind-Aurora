module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        right: {
          "0%, 100%": {
            transform: "translateX(30%) scale(4) ",
            borderRadius: "30%",
          },
          "50%": {
            transform: "rotate(0deg) translateX(0%) ",
            borderRadius: "50%",
          },
        },
        left: {
          "0%, 100%": {
            transform: " translateX(-10%) scale(3) rotate(120deg)",
            borderRadius: "12%",
          },
          "50%": {
            transform: "rotate(0deg) translateX(0%)",
            borderRadius: "60%",
          },
        },
        top: {
          "0%, 100%": {
            transform: " translateY(20%) scale(3) rotate(20deg)",
            borderRadius: "12%",
          },
          "50%": {
            transform: " translateY(0%)  rotate(10deg)",
            borderRadius: "60%",
          },
        },
      },

      animation: {
        right: "right 14s ease-in-out infinite alternate backwards",
        left: "left 16s ease-in-out 4s infinite alternate backwards",
        top: "top 8s ease-in-out  infinite alternate backwards",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
