import type { Config } from "tailwindcss";

const config: Config = {
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
        yellow: "#fcde70",
        darkyellow: "#e8b86d",
        darkgreen: "#185519",
        green: "#237625"
      },
      flex: {
        3: '3',
        1: '1',
      },
    },
  },
  plugins: [],
};

export default config;
