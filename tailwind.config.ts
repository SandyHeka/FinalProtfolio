import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#1a1a1a",
        light: "#f8f9fa",
      },
      keyframes: {
        lightTravel: {
          "0%": { boxShadow: "0 0 10px 2px rgba(105, 205, 255, 0)" },
          "50%": { boxShadow: "0 0 20px 5px rgba(205,105,255, 0.8)" },
          "100%": { boxShadow: "0 0 10px 2px rgba(255,255,255,0)" },
        },
      },
      animation: {
        "light-travel": "lightTravel 2s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
