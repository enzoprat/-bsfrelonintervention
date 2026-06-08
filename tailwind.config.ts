import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        anthracite: "#1C1C1C",
        cream: "#F8F5EF",
        amber: {
          DEFAULT: "#F4B000",
          dark: "#D69A00",
        },
        safety: {
          DEFAULT: "#FF6B1A",
          dark: "#E85A0C",
        },
        eco: {
          DEFAULT: "#5F7A55",
          dark: "#4C6344",
        },
        graytext: "#4B4B4B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 24px -6px rgba(17, 17, 17, 0.12)",
        card: "0 8px 32px -10px rgba(17, 17, 17, 0.18)",
        glow: "0 8px 30px -6px rgba(244, 176, 0, 0.45)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(18px, -22px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 8px 24px -8px rgba(255,107,26,0.5)" },
          "50%": { boxShadow: "0 12px 36px -6px rgba(255,107,26,0.85)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%) skewX(-20deg)" },
          "100%": { transform: "translateX(220%) skewX(-20deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "bee-wiggle": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-8deg)" },
          "75%": { transform: "rotate(8deg)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 14s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2.6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
