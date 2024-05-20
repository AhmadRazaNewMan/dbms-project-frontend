/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        customGold: 'rgba(202, 138, 4, var(--tw-bg-opacity))',
      },
    },
  },
  variants: {},
  plugins: [],
}
