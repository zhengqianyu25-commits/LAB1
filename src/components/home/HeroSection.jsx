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
    <section className="relative border-b" style={{ borderColor: 'var(--color-border)' }}>
      <div className="container-main relative z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Brand */}
          <div className="flex flex-col justify-center">
            <p className="section-label mb-4">Explanatory Journalism</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight leading-[1.06]" style={{ color: 'var(--color-text)' }}>
              No Filter<span style={{ color: 'var(--color-accent)' }}> Lab</span>
            </h1>
            <p className="mt-3 text-base md:text-lg leading-relaxed opacity-70" style={{ color: 'var(--color-text-secondary)' }}>
              Economics meets journalism. No jargon. Just clarity.
            </p>
            <div className="mt-2 h-8 flex items-center">
              {taglines.map((t, i) => (
                <span key={t} className="text-base md:text-lg font-display font-medium transition-all duration-700 absolute" style={{ color: 'var(--color-accent)', opacity: i === line ? 1 : 0, transform: i === line ? 'translateY(0)' : 'translateY(12px)' }}>
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <Link to="/stories" className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:opacity-80" style={{ background: 'var(--color-text)', color: 'var(--color-bg)' }}>
                Browse Stories <span className="text-sm">&rarr;</span>
              </Link>
              <Link to="/lab-notes" className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase border transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
                Lab Notes <span className="text-sm">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right: Lead Story */}
          <Link to={`/article/${headline.slug}`} className="group block border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'rgba(255,255,255,0.7)' }}>
            <div className="aspect-[16/10] overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
              {coverImg && <img src={coverImg} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />}
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[0.55rem] font-bold tracking-[0.12em] uppercase opacity-40" style={{ color: 'var(--color-text-muted)' }}>{headline.number} &middot; Lead Story</span>
                <span className="text-[0.55rem] font-semibold tracking-[0.08em] uppercase" style={{ color: 'var(--color-accent)' }}>{headline.conceptEn}</span>
              </div>
              <h2 className="text-lg md:text-xl font-display font-medium leading-snug group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--color-text)' }}>
                {headline.titleEn}
              </h2>
              <p className="mt-2 text-sm leading-relaxed opacity-60 line-clamp-2" style={{ color: 'var(--color-text-secondary)' }}>{headline.summary}</p>
              <span className="inline-block mt-3 text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--color-accent)' }}>Read Story &rarr;</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
