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
    <section className="relative min-h-[85vh] flex items-end border-b" style={{ borderColor: 'var(--color-border)' }}>
      {coverImg && (
        <img src={coverImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      )}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.1) 100%)' }} />

      <div className="container-main relative z-10 pb-16 md:pb-24 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end">
          {/* Left: Brand */}
          <div>
            <p className="text-[0.6rem] font-bold tracking-[0.28em] uppercase mb-5 text-white/40">Explanatory Journalism</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold tracking-tight leading-[1.02]">
              <span className="text-white">No Filter</span><span className="text-[var(--color-accent)]"> Lab</span>
            </h1>
            <p className="mt-4 text-lg text-white/55 max-w-xs leading-relaxed font-light">
              Economics meets journalism.<br />No jargon. Just clarity.
            </p>

            <div className="mt-3 h-9 flex items-center">
              {taglines.map((t, i) => (
                <span key={t} className="text-lg md:text-xl font-display font-medium italic transition-all duration-700 absolute" style={{ color: 'var(--color-accent)', opacity: i === line ? 1 : 0, transform: i === line ? 'translateY(0)' : 'translateY(10px)' }}>
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-7">
              <Link to={`/article/${headline.slug}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase transition-all duration-300 bg-white text-black hover:bg-[var(--color-accent)] hover:text-white">
                Read Story <span>&rarr;</span>
              </Link>
              <Link to="/stories" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase border border-white/20 text-white/60 transition-all duration-300 hover:border-white hover:text-white">
                All Stories
              </Link>
            </div>
          </div>

          {/* Right: Lead Story */}
          <Link to={`/article/${headline.slug}`} className="group block md:self-end">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-full flex items-center justify-center text-[0.6rem] font-bold bg-[var(--color-accent)] text-white shrink-0">{headline.number}</span>
              <span className="h-px flex-1 opacity-30" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.5), transparent)' }} />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium leading-tight text-white/90 group-hover:text-white transition-colors">
              {headline.titleEn}
            </h2>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-white/45 line-clamp-3 max-w-md">
              {headline.summary}
            </p>
            <div className="flex items-center gap-2 mt-5">
              <span className="text-[0.55rem] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border border-white/15 text-white/50">{headline.conceptEn}</span>
              <span className="text-xs font-bold tracking-[0.1em] uppercase text-white/30 group-hover:text-[var(--color-accent)] transition-colors">Read &rarr;</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
