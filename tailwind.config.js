/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  corePlugins: { preflight: false },
  theme: { extend: {
    colors: { bg: "#f3eee2", ink: "#1a1712", accent: "#ff4a1c", muted: "#6b6558" },
    fontFamily: { display: ["var(--font-display)"], body: ["var(--font-body)"], mono: ["var(--font-mono)"], serif: ["var(--font-serif)"] },
  } },
  plugins: [],
};
