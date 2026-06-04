import { useState, useEffect } from 'react';

export default function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const date = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <span className="hidden md:flex items-center gap-2 text-[0.6rem] font-semibold tracking-[0.1em] uppercase opacity-60" style={{ color: '#fff' }}>
      <span>{date}</span>
      <span className="opacity-40">|</span>
      <span>{time}</span>
    </span>
  );
}
