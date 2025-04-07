/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7400",
        "card-background": "#fff0e0",
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#FF4D00",
        textcard: "#3F3F3F",
        iconcard: "#F9F9F9",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
