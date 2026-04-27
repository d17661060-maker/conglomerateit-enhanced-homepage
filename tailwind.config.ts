import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "cgit-blue": "#1e40af",
        "cgit-red": "#dc2626",
        "cgit-dark": "#0f172a",
        "cgit-surface": "#1e293b",
        "cgit-card": "#334155",
        "cgit-border": "rgba(255,255,255,0.1)",
        "cgit-muted": "rgba(255,255,255,0.6)",
        "cgit-accent": "#3b82f6",
        "cgit-light": "#f8fafc",
      },
      fontFamily: {
        teko: ["Teko", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "cgit-gradient": "linear-gradient(to right, #1e40af, #dc2626)",
        "cgit-gradient-135": "linear-gradient(135deg, #1e40af, #dc2626)",
        "cgit-gradient-hover": "linear-gradient(to right, #b91c1c, #1e3a8a)",
        "hero-mesh":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(30,64,175,0.3), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(220,38,38,0.15), transparent)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "gradient-flow": "gradientFlow 4s ease infinite",
        "float": "floatUpDown 4s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "pulse": "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
        "slide-in-left": "slideInLeft 0.8s ease forwards",
        "slide-in-right": "slideInRight 0.8s ease forwards",
        "scale-in": "scaleIn 0.6s ease forwards",
        "bounce-in": "bounceIn 0.8s ease forwards",
        "glow": "glow 2s ease-in-out infinite",
        "float-delayed": "floatDelayed 6s ease-in-out infinite",
        "rotate-slow": "rotateSlow 20s linear infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "wave": "wave 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        gradientFlow: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        floatUpDown: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-100px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(100px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.8)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glow: {
          "0%,100%": { boxShadow: "0 0 20px rgba(30,64,175,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(30,64,175,0.6)" },
        },
        floatDelayed: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-10px) rotate(1deg)" },
          "50%": { transform: "translateY(-20px) rotate(0deg)" },
          "75%": { transform: "translateY(-10px) rotate(-1deg)" },
        },
        rotateSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        wave: {
          "0%,100%": { transform: "translateY(0) scaleX(1)" },
          "50%": { transform: "translateY(-5px) scaleX(1.05)" },
        },
      },
      boxShadow: {
        "cgit-glow": "0 0 40px rgba(33,77,170,0.25)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
