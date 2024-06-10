/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ayu: {
          bg: "#0b0e14",
          "bg-2": "#6C738030",
          fg: "#ded9ca",
          muted: "#8d9da5",
          muter: "#6f8390",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};
