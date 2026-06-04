import { useState, useEffect } from 'react';

export default function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const day = now.toLocaleDateString('en-US', { weekday: 'short' });
  const date = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <div className="hidden md:flex items-center gap-2 text-[0.6rem] font-semibold tracking-[0.08em] uppercase text-white/50">
      <span className="text-white/70">{time}</span>
      <span className="opacity-30">&middot;</span>
      <span>{day}</span>
      <span className="opacity-30">&middot;</span>
      <span>{date}</span>
    </div>
  );
}
