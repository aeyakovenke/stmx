import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f5f7fb',
          100: '#eaeef8',
          200: '#d0ddf0',
          300: '#a6c1e8',
          400: '#7599dd',
          500: '#5677d4',
          600: '#3d4fc8',
          700: '#2f3fa8',
          800: '#1f2a5c',
          900: '#0f1530',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(93, 119, 212, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(93, 119, 212, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
