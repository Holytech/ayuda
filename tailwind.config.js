/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/header_background.png')",
        footer: "url('/footer.png')",
      },
      fontFamily: {
        sora: "Sora, sans-serif",
        "tt-norms": "TT Norms Pro",
      },
    },
  },
  plugins: [],
};
