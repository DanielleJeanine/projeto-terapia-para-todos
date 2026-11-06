import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9F6E9",
        "cream-deep": "#EDE9DA",
        sage: "#6E6A52",
        "sage-deep": "#52503E",
        ink: "#2B2A22",
        clay: "#B98567",
        line: "#DDD6C4",
        olive: "#A3A17D",
        // dark mode surface tokens
        "dark-bg": "#1E1D17",
        "dark-surface": "#26241C",
        "dark-line": "#3A3728",
        "dark-text": "#EDE9DA",
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
