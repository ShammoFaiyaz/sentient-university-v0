import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#004AAD", // Sentient Blue
          light: "#2B6DCC",
          dark: "#002E72",
        },
        accent: {
          DEFAULT: "#E56A54", // Coral Intellect
          light: "#FFB597",
          dark: "#B54834",
        },
        neutral: {
          light: "#F7F8FA",
          medium: "#D1D5DB",
          dark: "#1F2937",
        },
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
