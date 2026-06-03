/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          bg: 'var(--color-bg)',
          'bg-secondary': 'var(--color-bg-secondary)',
          'bg-tertiary': 'var(--color-bg-tertiary)',
          text: 'var(--color-text)',
          'text-secondary': 'var(--color-text-secondary)',
          'text-muted': 'var(--color-text-muted)',
          border: 'var(--color-border)',
          accent: 'var(--color-accent)',
          'accent-light': 'var(--color-accent-light)',
          'accent-dim': 'var(--color-accent-dim)',
          warn: 'var(--color-warn)',
        },
      },
      fontFamily: {
        display: ['-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'Roboto', "'Helvetica Neue'", 'Arial', 'sans-serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'Roboto', "'Helvetica Neue'", 'Arial', "'PingFang SC'", "'Microsoft YaHei'", 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
        article: '680px',
      },
    },
  },
  plugins: [],
};
