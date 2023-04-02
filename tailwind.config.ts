import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fjalla: ["Fjalla One", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
