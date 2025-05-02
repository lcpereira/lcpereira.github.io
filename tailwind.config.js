import typography from '@tailwindcss/typography';

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.{md,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#543DB6',
          900: '#3C2B8A',
        },
        dark: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#d4d4d4',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#2f2f2f',
          800: '#1f1f1f',
          900: '#17161D',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.dark.900'),
            a: {
              color: theme('colors.primary.700'),
              '&:hover': {
                color: theme('colors.primary.800'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.dark.100'),
            a: {
              color: theme('colors.primary.300'),
              '&:hover': {
                color: theme('colors.primary.200'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
