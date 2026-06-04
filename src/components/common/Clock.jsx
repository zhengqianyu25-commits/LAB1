import { useState, useEffect } from 'react';

export default function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  const date = now.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <span className="hidden md:block text-[0.6rem] font-semibold tracking-[0.08em] uppercase text-white/50">
      {date}
    </span>
  );
}
