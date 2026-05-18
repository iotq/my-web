/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#0a0a0a",
          800: "#111111",
          700: "#1a1a1a",
          600: "#242424",
          500: "#2e2e2e",
        },
        accent: {
          DEFAULT: "#d4a853",
          light: "#e8c575",
          dark: "#b8912f",
        },
        muted: "#6b6560",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        body: ['"DM Mono"', "monospace"],
        sans: ['"DM Sans"', "sans-serif"],
      },
    },
  },
};
