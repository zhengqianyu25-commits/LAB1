import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

export default function StoryCarousel({ articles }) {
  const [current, setCurrent] = useState(0);
  const total = articles.length;

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const a = articles[current];

  return (
    <div className="relative overflow-hidden border mb-12" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
      <div className="relative aspect-[2/1] md:aspect-[2.6/1] overflow-hidden">
        <Link to={`/article/${a.slug}`}>
          <img src={a.media?.images?.[0]?.src} alt={a.titleEn} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 pb-14 md:pb-16">
            <span className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white/60 mb-2 block">{a.conceptEn}</span>
            <h2 className="text-lg md:text-2xl font-display font-medium text-white leading-tight max-w-xl">{a.titleEn}</h2>
          </div>
        </Link>

        {/* Controls overlaid on image */}
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 transition-colors text-white" aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 transition-colors text-white" aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        {/* Dots overlaid at bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {articles.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{ width: i === current ? '24px' : '6px', height: '6px', background: i === current ? '#fff' : 'rgba(255,255,255,0.4)' }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
