import type { Config } from "tailwindcss";

const withAlpha = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: withAlpha("--paper"),
        surface: withAlpha("--surface"),
        ink: withAlpha("--ink"),
        "ink-soft": withAlpha("--ink-soft"),
        accent: withAlpha("--accent"),
        "accent-2": withAlpha("--accent-2"),
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
