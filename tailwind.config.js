/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
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
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 0.1 },
          '50%': { opacity: 0.3 }
        }
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite'
      },
      textShadow: {
        glow: '0 0 10px rgba(var(--primary), 0.5), 0 0 20px rgba(var(--primary), 0.3), 0 0 30px rgba(var(--primary), 0.2)'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-glow': {
          'text-shadow': '0 0 10px rgba(var(--primary), 0.5), 0 0 20px rgba(var(--primary), 0.3), 0 0 30px rgba(var(--primary), 0.2)'
        },
        '.text-glow-lg': {
          'text-shadow': '0 0 15px rgba(var(--primary), 0.7), 0 0 30px rgba(var(--primary), 0.5), 0 0 45px rgba(var(--primary), 0.3)'
        }
      })
    }
  ],
}