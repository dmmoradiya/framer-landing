import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#3f26a3",
          200: "#392292",
          300: "#331f83",
          400: "#2e1b75",
          500: "#281866",
          600: "#221458",
          700: "#1d1149",
          800: "#170e3a",
          900: "#110a2c",
          950: "#0b071d",
        },
        secondary: {
          100: "#4b2b88",
          200: "#44277a",
          300: "#3c226d",
          400: "#351e5f",
          500: "#2d1a52",
          600: "#261644",
          700: "#1e1136",
          800: "#160d29",
          900: "#0f091b",
          950: "#07040e",
        }
      },
    },
  },
  plugins: [],
};

export default config;
