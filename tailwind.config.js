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
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        dark: {
          900: '#111827',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.dark.900'),
            a: { color: theme('colors.primary.600') },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: { color: theme('colors.primary.400') },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
