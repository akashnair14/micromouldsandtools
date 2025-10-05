module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // make sure Tailwind scans all your React files
  ],
  darkMode: 'class', // ✅ enable class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
