import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/section/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* background: "var(--background)",
        foreground: "var(--foreground)", */
        primary: "#3CB9D1",
        secondary: "#DBF1FF",
        primary_text: "#374151",
        secondary_text: "#A0AEC0",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/software2.jpg')",
      },
      fontFamily: {
        sans: ["Alegreya", "sans-serif"],
        raleway: "var(--display-font)",
        para: "var(--font-geist-sans)",
      },
    },
  },
  plugins: [],
} satisfies Config;
