/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        neue: ["var(--font-neue-haas)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
