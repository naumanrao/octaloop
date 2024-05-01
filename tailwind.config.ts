import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-to-br-red":
          "linear-gradient(to bottom right, #FD1640ff, #FD1640)",
      },
      colors: {
        red: "#FD1640", // Custom color
      },
      fontFamily: {
        "zen-dots": '"Zen Dots", sans-serif', // Custom font
      },
      animation: {
        "spin-slow": "rotate360 1s linear infinite", // Adjust timing as needed
        "spin-once": "rotate360 1s ease-in-out forwards",
        "counter-spin-once": "counterRotate360 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
