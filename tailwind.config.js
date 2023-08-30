/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mirage: {
          DEFAULT: "#192734",
          50: "#769BBD",
          100: "#648EB5",
          200: "#4B749B",
          300: "#3A5B79",
          400: "#2A4156",
          500: "#192734",
          600: "#080D12",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
