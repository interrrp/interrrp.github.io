/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ayu: {
          bg: "#0b0e14",
          fg: "#cccac2",
          muted: "#b8cfe680",
          muter: "#b8cfe670",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
