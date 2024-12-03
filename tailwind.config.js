/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { raw: "(min-width: 300px) and (max-width: 400px)" },
      },
    },
  },
  plugins: [],
};
