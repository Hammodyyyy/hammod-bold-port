/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  corePlugins: { preflight: false },
  theme: { extend: {
    colors: { bg: "#08080a", ink: "#f6f6f7", accent: "#8f83ff", muted: "#a2a2ad" },
    fontFamily: { display: ["var(--font-display)"], body: ["var(--font-body)"], mono: ["var(--font-mono)"] },
  } },
  plugins: [],
};
