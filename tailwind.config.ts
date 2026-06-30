import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        mono:    ["var(--font-mono)"],
        body:    ["var(--font-body)"],
      },
      colors: {
        bg:      "#060606",
        surface: "#0e0e0e",
        rule:    "#1c1c1c",
        muted:   "#404040",
        subtle:  "#707070",
        ash:     "#a0a0a0",
        primary: "#efefef",
        acid:    "#c8ff00",
      },
      fontSize: {
        "fluid-hero": "clamp(3.5rem, 14vw, 14rem)",
        "fluid-xl":   "clamp(2rem, 6vw, 6rem)",
        "fluid-lg":   "clamp(1.4rem, 3vw, 3rem)",
      },
      keyframes: {
        "scroll-left": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-right": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
      },
      animation: {
        "scroll-left":  "scroll-left 30s linear infinite",
        "scroll-right": "scroll-right 36s linear infinite",
        "cursor-blink": "cursor-blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
