import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 6px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config;
