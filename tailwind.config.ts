import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        unihero: {
          navy: "#0A1F44",
          accent: "#007BFF",
          surface: "#EAF2FD",
          textdark: "#1F1F1F"
        }
      },
      borderRadius: {
        "2xl": "16px"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(10,31,68,.12)"
      },
      keyframes: {
        floatY: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        pulseGlow: { "0%,100%": { boxShadow: "0 0 0 0 rgba(0,123,255,.4)" }, "50%": { boxShadow: "0 0 0 12px rgba(0,123,255,0)" } },
        gradientMove: { "0%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" }, "100%": { backgroundPosition: "0% 50%" } }
      },
      animation: {
        floatY: "floatY 10s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
        gradientMove: "gradientMove 12s ease infinite"
      }
    }
  },
  plugins: []
};
export default config;
