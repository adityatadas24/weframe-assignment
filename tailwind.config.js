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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif',],
        cabinet:['"Cabinet Grotesk"','serif',] // Add Playfair Display as a custom font
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
