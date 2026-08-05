// CommonJS: package.json no longer sets "type": "module" (Next uses
// next.config.mjs for its own ESM config instead).
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
