import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        panel: "rgba(15, 23, 42, 0.72)",
        line: "rgba(148, 163, 184, 0.18)",
        mint: "#4ade80",
        aqua: "#38bdf8",
        amberSoft: "#fbbf24",
      },
      boxShadow: {
        glow: "0 22px 80px rgba(56, 189, 248, 0.18)",
        card: "0 18px 55px rgba(2, 8, 23, 0.28)",
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(rgba(148,163,184,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.10) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Microsoft YaHei",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
