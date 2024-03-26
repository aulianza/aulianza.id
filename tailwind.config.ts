import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Partial<Config> = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--jakartaSans-font)'],
        sora: ['var(--soraSans-font)'],
        code: ['var(--firaCode-font)'],
        emoji: ['Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
      },
      colors: {
        darkText: '#E4E6EB',
        dark: '#121212',
        light: '#fafafa',
        // Added colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        flying: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(0.5rem)' },
          '100%': { transform: 'translateY(0)' },
        },
        badge: {
          '100%': {
            transform: 'scaleY(1.7) scaleX(1.25)',
            opacity: '0',
          },
        },
        loop: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'flying-card': 'flying 3s infinite normal',
        'badge-pulse': 'badge 1.5s ease-out infinite',
        'looping-tag': 'loop 100s linear infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': "theme('colors.foreground / 90%')",
            '--tw-prose-headings': "theme('colors.foreground')",
            '--tw-prose-lead': "theme('colors.foreground')",
            '--tw-prose-links': "theme('colors.foreground')",
            '--tw-prose-bold': "theme('colors.foreground')",
            '--tw-prose-counters': "theme('colors.muted.foreground')",
            '--tw-prose-bullets': "theme('colors.muted.foreground')",
            '--tw-prose-hr': "theme('colors.border')",
            '--tw-prose-quotes': "theme('colors.foreground')",
            '--tw-prose-quote-borders': "theme('colors.border')",
            '--tw-prose-captions': "theme('colors.foreground')",
            '--tw-prose-th-borders': "theme('colors.border')",
            '--tw-prose-td-borders': "theme('colors.border')",
            '--tw-prose-code': "theme('colors.foreground')",
            '--tw-prose-kbd': "theme('colors.foreground')",
            '--tw-prose-kbd-shadows': "theme('colors.primary.DEFAULT / 50%')",
            '--tw-prose-pre-bg': false,
            '--tw-prose-pre-code': false,

            maxWidth: 'none',

            img: {
              margin: '0 auto',
            },

            kbd: {
              boxShadow:
                '0 0 0 1px var(--tw-prose-kbd-shadows),0 3px 0 var(--tw-prose-kbd-shadows)',
            },

            code: {
              padding: '2px 4px',
              fontSize: '13px',
              borderRadius: '6px',
              background: "theme('colors.secondary.DEFAULT / 50%')",
              border: '1px solid hsl(var(--border))',
            },

            ul: {
              listStylePosition: 'inside',
              paddingLeft: '0',
            },

            'pre code': false,
            'pre code::after': false,
            'pre code::before': false,
            'code::after': false,
            'code::before': false,
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
}

export default config
