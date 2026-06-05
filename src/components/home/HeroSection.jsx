import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import articles from '../../data/articles';

const taglines = [
  'We ask: who gains?',
  'We ask: who pays?',
  'We ask: what changed?',
  'We ask: what\'s the real cost?',
];

export default function HeroSection() {
  const [line, setLine] = useState(0);
  const headline = articles[0];
  const coverImg = headline.media?.images?.[0]?.src;

  useEffect(() => {
    const t = setInterval(() => setLine(l => (l + 1) % taglines.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative border-b overflow-hidden" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}>
      <div className="container-main relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          {/* Left: Brand - 2/5 */}
          <div className="lg:col-span-2">
            <p className="text-[0.55rem] font-bold tracking-[0.25em] uppercase mb-5 opacity-50" style={{ color: 'var(--color-text-muted)' }}>Explanatory Journalism</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-[1.05]" style={{ color: 'var(--color-text)' }}>
              No Filter<span className="text-[var(--color-accent)]"> Lab</span>
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed max-w-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Economics meets journalism.<br />No jargon. Just clarity.
            </p>

            <div className="mt-4 h-10 flex items-center">
              {taglines.map((t, i) => (
                <span key={t} className="text-lg md:text-xl font-display font-medium italic transition-all duration-700 absolute" style={{ color: 'var(--color-accent)', opacity: i === line ? 1 : 0, transform: i === line ? 'translateY(0)' : 'translateY(12px)' }}>
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <Link to="/stories" className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-[0.7rem] font-bold tracking-[0.12em] uppercase transition-all duration-300 hover:scale-105" style={{ background: 'var(--color-accent)', color: '#fff' }}>
                Stories <span>&rarr;</span>
              </Link>
              <Link to="/lab-notes" className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-[0.7rem] font-bold tracking-[0.12em] uppercase border transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
                Lab Notes
              </Link>
            </div>
          </div>

          {/* Right: Lead Story - 3/5 */}
          <Link to={`/article/${headline.slug}`} className="lg:col-span-3 group block border transition-all duration-500 hover:-translate-y-1.5" style={{ borderColor: 'var(--color-border)', borderRadius: '3px', background: 'rgba(255,255,255,0.85)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            <div className="aspect-[16/9] overflow-hidden" style={{ background: 'var(--color-bg-tertiary)' }}>
              {coverImg ? (
                <img src={coverImg} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <div className="w-full h-full flex items-center justify-center opacity-10 text-8xl font-display font-bold">{headline.number}</div>
              )}
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-[0.55rem] font-bold" style={{ background: 'var(--color-accent)', color: '#fff' }}>{headline.number}</span>
                <span className="text-[0.55rem] font-bold tracking-[0.12em] uppercase opacity-40" style={{ color: 'var(--color-text-muted)' }}>Lead Story</span>
                <span className="text-[0.55rem] font-semibold tracking-[0.08em] uppercase px-2 py-0.5 rounded-full" style={{ background: 'var(--color-accent-dim)', color: 'var(--color-accent)' }}>{headline.conceptEn}</span>
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-medium leading-tight group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--color-text)' }}>
                {headline.titleEn}
              </h2>
              <p className="mt-3 text-sm md:text-base leading-relaxed opacity-60 line-clamp-2" style={{ color: 'var(--color-text-secondary)' }}>{headline.summary}</p>
              <div className="flex items-center gap-2 mt-5">
                <span className="text-xs font-bold tracking-[0.12em] uppercase transition-all group-hover:gap-3 flex items-center gap-1.5" style={{ color: 'var(--color-accent)' }}>
                  Read Story <span className="text-base transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
