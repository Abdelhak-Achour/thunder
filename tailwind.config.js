/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { min: "551px", max: "1050px" }, sm: { min: "200px", max: "550px" } },
    extend: {
      colors: {
        gray: { 700: "#575656" },
        black: { "900_00": "#00000000", "900_8c": "#0000008c", "900_93": "#00000093" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { roboto: ['Roboto-Light', 'system-ui'] },
      backgroundImage: { gradient: "linear-gradient(180deg ,#00000093,#0000008c,#00000000)" },
    },
  },
};
