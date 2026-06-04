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
          <div className="absolute bottom-0 left-0 right-0 h-[14%] bg-gradient-to-t from-black/50 to-transparent flex items-end px-6 md:px-10 pb-3 md:pb-4">
            <h2 className="text-sm md:text-lg font-display font-medium text-white leading-tight max-w-xl">{a.titleEn}</h2>
          </div>
        </Link>

        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 transition-colors text-white" aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 transition-colors text-white" aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2" style={{ bottom: 'calc(14% + 8px)' }}>
          {articles.map((_, i) => (
            <button key={i} onClick={(e) => { e.preventDefault(); setCurrent(i); }}
              className="rounded-full transition-all duration-300"
              style={{ width: i === current ? '24px' : '6px', height: '6px', background: i === current ? '#fff' : 'rgba(255,255,255,0.4)' }}
              aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
