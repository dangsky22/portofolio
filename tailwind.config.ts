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
        'paper': '#FDFCF0',
        'ink': '#1A1A1A',
        'ink-soft': '#4A4A4A',
        'accent': '#C5A059',
        'navy-deep': '#FDFCF0',
        'navy-dark': '#F7F4E8',
        'electric-blue': '#8A6A2F',
        'violet': '#B28B45',
        'cyan-highlight': '#8A6A2F',
        'white-heading': '#1A1A1A',
        'white-soft': '#4A4A4A',
        'gray-blue': '#6B6254',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
