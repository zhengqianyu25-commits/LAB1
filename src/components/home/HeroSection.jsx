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
    <section className="relative min-h-[80vh] flex items-end border-b" style={{ borderColor: 'var(--color-border)' }}>
      {/* Full-bleed background image */}
      {coverImg && (
        <img src={coverImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      )}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 100%)' }} />

      {/* Content */}
      <div className="container-main relative z-10 pb-14 md:pb-20 pt-20">
        <p className="text-[0.6rem] font-bold tracking-[0.25em] uppercase mb-4 text-white/50">Explanatory Journalism</p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-semibold tracking-tight leading-[1.04] text-white">
          No Filter<span className="text-[var(--color-accent)]"> Lab</span>
        </h1>
        <p className="mt-3 text-base md:text-lg text-white/70 max-w-md leading-relaxed">
          Economics meets journalism. No jargon. Just clarity.
        </p>

        <div className="mt-3 h-10 flex items-center">
          {taglines.map((t, i) => (
            <span key={t} className="text-lg md:text-xl font-display font-medium italic transition-all duration-700 absolute text-[var(--color-accent)]" style={{ opacity: i === line ? 1 : 0, transform: i === line ? 'translateY(0)' : 'translateY(12px)' }}>
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-start gap-2 mt-5 text-white/60">
          <span className="w-5 h-5 mt-0.5 rounded-full flex items-center justify-center text-[0.5rem] font-bold shrink-0 bg-[var(--color-accent)] text-white">{headline.number}</span>
          <div>
            <h2 className="text-lg md:text-xl font-display font-medium leading-snug text-white/90 hover:text-white transition-colors cursor-pointer" onClick={() => window.location.href = '/#/article/' + headline.slug}>
              {headline.titleEn}
            </h2>
            <p className="text-sm leading-relaxed mt-1.5 text-white/50 line-clamp-2 max-w-lg">{headline.summary}</p>
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <Link to={`/article/${headline.slug}`} className="inline-flex items-center gap-1.5 px-6 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-full text-sm font-semibold text-white tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-black">
            Read Story <span>&rarr;</span>
          </Link>
          <Link to="/stories" className="inline-flex items-center gap-1.5 px-6 py-3 border border-white/20 rounded-full text-sm font-semibold text-white/80 tracking-wider uppercase transition-all duration-300 hover:border-white hover:text-white">
            All Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
