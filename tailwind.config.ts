import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 6px rgba(0, 0, 0, 0.3)',
      },
      screens: {
        'xxxs': '320px',    // Extra Extra Extra Small
        'xxs': '375px',     // Extra Extra Small
        'xs': '480px',      // Extra Small
        'sm': '640px',      // Small
        'md': '768px',      // Medium
        'lg': '1024px',     // Large
        'xl': '1380px',     // Extra Large
        'xxl': '1660px',    // Extra Extra Large
        'xxxl': '1920px',   // Extra Extra Extra Large
      },
      fontSize: {
        'xs': '0.65rem',
        'xxs': '0.5rem',
        'xxxs': '0.40rem',
        'xxl': '1.60rem',
        'xxxl': '1.90rem',
      },
    },
  },
  plugins: [],
};

export default config;
