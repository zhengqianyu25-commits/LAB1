import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 animate-in"
      style={{ background: 'var(--color-accent)' }}
      aria-label="Back to top"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="m18 15-6-6-6 6"/></svg>
    </button>
  );
}
