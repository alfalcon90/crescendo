import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      test: "#FF0000",
      red: "#D1746D",
      yellow: "#E5A42E",
      "beige": {
        light: "#F5F5ED",
        dark: "#B29E86",
        DEFAULT: "#E4CFB7",
      },
      "green": {
        light: "#6AB2A6",
        dark: "#172624",
        DEFAULT: "#1C665A",
      },
    },
  },
  plugins: [],
};
export default config;
