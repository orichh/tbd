/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      spacing: {
        18: "4.5rem",
        26: "6.5rem",
        112: "28rem",
        128: "32rem",
        136: "34rem",
        200: "40rem"
      },
      backdropBlur: {
        xs: "2px"
      },
      fontFamily: {
        serif: ["var(--font-libreBaskerville)"],
        shrikhand: ["var(--font-Shrikhand-Regular)"],
        itcWillow: ["var(--font-ITCWillow)"],
        itcAvantGardeGothicBk: ["var(--font-ITCAvantGardeGothicBk)"]
      },
      colors: {
        green: {
          500: "#078080"
        }
      },
      brightness: {
        25: ".25",
        30: ".30",
        35: ".35",
        40: ".50"
      }
    }
  },
  plugins: []
};
