/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Added by me. My custom color
      colors: {
        primary: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  plugins: [],
};
