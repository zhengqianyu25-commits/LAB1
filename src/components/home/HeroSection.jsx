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
    <section className="relative border-b overflow-hidden" style={{ borderColor: 'var(--color-border)' }}>
      <div className="container-main relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Left: Brand */}
          <div className="pr-8">
            <p className="text-[0.55rem] font-bold tracking-[0.25em] uppercase mb-5 opacity-50" style={{ color: 'var(--color-text-muted)' }}>Explanatory Journalism</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-[1.05]" style={{ color: 'var(--color-text)' }}>
              No Filter<span style={{ color: 'var(--color-accent)' }}> Lab</span>
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xs" style={{ color: 'var(--color-text-secondary)' }}>
              Economics meets journalism. No jargon. Just clarity.
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

          {/* Right: Magazine-style image bleed */}
          <Link to={`/article/${headline.slug}`} className="group relative block lg:-mr-[calc((100vw-var(--container-main))/2)] h-full min-h-[360px]" style={{ background: 'var(--color-bg-secondary)' }}>
            {coverImg && (
              <img src={coverImg} alt="" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110" />
            )}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, var(--color-bg-secondary) 0%, transparent 30%, rgba(0,0,0,0.15) 100%)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-[0.55rem] font-bold" style={{ background: 'var(--color-accent)', color: '#fff' }}>{headline.number}</span>
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-medium leading-tight text-white max-w-md transition-colors group-hover:text-[var(--color-accent)]">
                {headline.titleEn}
              </h2>
              <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold tracking-[0.12em] uppercase text-white/80 group-hover:text-[var(--color-accent)] transition-colors">
                Read Story <span className="text-base transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Decorative line at bottom right */}
      <div className="absolute bottom-0 right-0 w-1/3 h-[2px] opacity-20" style={{ background: 'var(--color-accent)' }} />
    </section>
  );
}
