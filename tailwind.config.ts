import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f766e",
        base: "#fafaf9",
        accent: "#f59e0b",
      },
    },
  },
  plugins: [],
};
export default config;
