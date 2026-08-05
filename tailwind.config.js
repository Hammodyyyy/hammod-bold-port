/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // below this the nav brand wordmark is dropped so the links still fit
      screens: {
        xs: '400px',
      },
      // next/font generates the real family names and exposes them on these
      // variables from the <html> element, so the stack is referenced not named
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: '#0C0C0C',
        mist: '#D7E2EA',
      },
    },
  },
  plugins: [],
};
