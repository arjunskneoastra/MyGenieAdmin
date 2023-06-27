/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "2xl": "40rem", // Example using a custom value
      },
      container: {
        center: true,
        // padding: '2rem',
        maxWidth: "1280px !important",
      },
      colors: {
        white: {
          default: "#ffffff",
          500: "#F9FAFB",
        },
        transparent: "transparent",
        black: "#272727",
        blue: {
          50: "#F0F8FD",
          100: "#86C7ED",
          300: "#1F78B4",
          500: "#1836B2",
        },
        purple: {
          500: "#A066CB",
        },
        green: {
          light: "#DBF5D3",
          500: "#669F55",
        },
        red: {
          500: "#FF8282",
          600: "#D16767",
        },
        primary: "#A066CB",
        gray: {
          dark: "#4B4B4B",
          darker: "#272727",
          light: "#BABABA",
          lighter: "#E8E9EB",
          500: "#EBEBEB",
          600:"#D3D3D3",
          900: "#707070",
          light2: "#F5F5F5",
        },
        yellow: {
          bright: "#FFD802",
          light: "#DCE574",
        },
      },
      screens: {
        mobile: { max: "640px" },
      },
    },
  },
  plugins: [],
};
