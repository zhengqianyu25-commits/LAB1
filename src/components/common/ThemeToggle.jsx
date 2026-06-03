import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="relative w-10 h-5 rounded-full border transition-colors duration-300"
      style={{
        background: dark ? 'var(--color-accent)' : 'var(--color-border)',
        borderColor: dark ? 'var(--color-accent)' : 'var(--color-border)',
      }}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span
        className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300"
        style={{ left: dark ? 'calc(100% - 1.125rem)' : '0.125rem' }}
      />
    </button>
  );
}
