module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_700: "#5b5b5b",
        white_A700_0c: "#ffffff0c",
        blue_gray_900_d8: "#363636d8",
        deep_purple_A100_c6: "#a391ffc6",
        deep_purple_700: "#452bc9",
        deep_purple_A200: "#7b61ff",
        blue_gray_900: "#363636",
        deep_purple_100: "#cdc3ff",
        white_A700: "#ffffff",
      },
      fontFamily: { jaldi: "Jaldi", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
