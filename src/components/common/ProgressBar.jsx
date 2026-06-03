import { useState, useEffect } from 'react';

export default function ProgressBar() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setPct(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[80] w-full h-[2px]" style={{ background: 'var(--color-border)' }}>
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%`, background: 'var(--color-accent)' }}
      />
    </div>
  );
}
