import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--foreground)',
        panel: 'var(--panel)',
        cyan: 'var(--accent)',
        mint: 'var(--accent)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Arial', 'sans-serif'],
        display: ['var(--font-display)', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 70px rgba(42, 218, 151, 0.16)',
      },
    },
  },
  plugins: [],
};

export default config;
