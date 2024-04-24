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
        blue: { 50: "#eaeefe" },
        black: { 900: "#000000", "900_99": "#00000099" },
        white: { A700: "#ffffff", A700_99: "#ffffff99", A700_33: "#ffffff33" },
        gray: {
          200: "#f0f0f0",
          400: "#bcbcbc",
          500: "#999999",
          900: "#010d3e",
          "600_01": "#7b7b7b",
          "900_19": "#22222219",
          "900_14": "#1b1b1b14",
        },
        blue_gray: { 50: "#eff0f6", 500: "#6e6b8f" },
        purple: { A100: "#dd7dff" },
      },
      boxShadow: {
        xs: "0px 7px 14px 0px #eaeaea",
        sm: "0px 2px 12px 0px #14132a",
        md: "0px 7px 24px 0px #24262b",
      },
      fontFamily: { dmsans: "DM Sans", inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(184deg,#eaeefe, #eaeefe,#183ec2)",
        gradient1: "linear-gradient(180deg, #ffffff,#d2dcff)",
        gradient2: "linear-gradient(90deg, #ffffff,#ffffff00,#ffffff)",
        gradient3: "linear-gradient(180deg, #000000,#001254)",
        gradient4: "linear-gradient(180deg, #ffffff,#ffffff00)",
        gradient5:
          "linear-gradient(90deg, #dd7dff,#e0cc85,#8bca91,#70c1ef,#3affff)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  screens: {
    sm: "412px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};
