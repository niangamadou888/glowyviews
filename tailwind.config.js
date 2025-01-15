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
      fontSize: {
        lg: '18px',
      },
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
          '50%': { opacity: 0.3 },
        },
        'border-draw': {
          '0%': {
            'stroke-dashoffset': '-400%',
            filter: 'drop-shadow(0 0 2px rgb(220 38 38))',
          },
          '100%': {
            'stroke-dashoffset': '0%',
            filter: 'drop-shadow(0 0 4px rgb(220 38 38))',
          },
        },
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
        'border-draw': 'border-draw 1.5s cubic-bezier(0.15, 1, 0.3, 1) forwards',
      },
      textShadow: {
        glow: '0 0 10px rgba(var(--primary), 0.5), 0 0 20px rgba(var(--primary), 0.3), 0 0 30px rgba(var(--primary), 0.2)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-glow': {
          'text-shadow': '0 0 10px rgba(var(--primary), 0.5), 0 0 20px rgba(var(--primary), 0.3), 0 0 30px rgba(var(--primary), 0.2)'
        },
        '.text-glow-lg': {
          'text-shadow': '0 0 20px rgba(var(--primary), 1), 0 0 40px rgba(var(--primary), 0.8), 0 0 60px rgba(var(--primary), 0.6), 0 0 80px rgba(var(--primary), 0.4), 0 0 100px rgba(var(--primary), 0.2)'
        }
      })
    }
  ],
}