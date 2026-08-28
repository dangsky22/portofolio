import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#080B14',
        'navy-dark': '#0F1424',
        'electric-blue': '#5B8CFF',
        'violet': '#9B6CFF',
        'cyan-highlight': '#5DE6FF',
        'white-heading': '#F5F7FF',
        'white-soft': '#B8C0D4',
        'gray-blue': '#717A91',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
