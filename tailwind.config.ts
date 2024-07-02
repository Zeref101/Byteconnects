import { url } from "inspector";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      backgroundImage: {
        "dot-pattern":
          "url('https://s3-alpha-sig.figma.com/img/7e6d/67a4/5f7442747a9717500b06ae19ccdddfc6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e87C9mKqv73fDtOKadpBbFX3o7XhrQrcpsoX-2nqupKXEZBQ4jfQpECngjzuIfoV3p8PTfLCCPkYv8DJZ~zYqJcnRG0fsz17dCXi1LIrdTWtUabx74PMhvNKQxnR1ghGWaqKvmwRR9EtU7Zvf6XhWN3F60C3u9o~2~JcKSkpQbNdMCIvUSTf27DXMW0NJT-htiwakcOgAL~fPLQw2r13uPxqDHop-DZlgVvLFrI3SDw3p2P~AsqgnmnMworDvBoTZZlkkpm~hPSpXHLneLfY3DKLTJ0ZuN-rruYUw4tGXxxMDkpksrtePpIpCGx2YxAZ0Lsd3Xg0OPw0a5r0b03hJA__')",
      },
      colors: {
        "primary-border": "#9747ff",
        "primary-hover-background": "#e8e9e98d",
        "card-background": "#ffffff0d",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
