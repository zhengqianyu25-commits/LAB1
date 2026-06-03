import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const taglines = [
  'We ask: who gains?',
  'We ask: who pays?',
  'We ask: what changed?',
  'We ask: what\'s the real cost?',
];

const keywords = ['Scarcity', 'Attention Economy', 'Cost Control', 'Labor Protection', 'Externalities', 'Creator Economy'];

export default function HeroSection() {
  const [line, setLine] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setLine(l => (l + 1) % taglines.length), 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.15);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative border-b hero-section" style={{ borderColor: 'var(--color-border)' }}>
      <div className="container-main relative z-10 py-20 md:py-32" style={{ transform: `translateY(${offset}px)` }}>
        <div className="max-w-3xl">
          <p className="section-label mb-6">Explanatory Journalism</p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight leading-[1.06]" style={{ color: 'var(--color-text)' }}>
            No Filter<span style={{ color: 'var(--color-accent)' }}> Lab</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl leading-relaxed opacity-70" style={{ color: 'var(--color-text-secondary)' }}>
            Economics meets journalism. No jargon. Just clarity.
          </p>

          <div className="mt-3 h-10 flex items-center">
            {taglines.map((t, i) => (
              <span
                key={t}
                className="text-lg md:text-xl font-display font-medium transition-all duration-700 absolute"
                style={{
                  color: 'var(--color-accent)',
                  opacity: i === line ? 1 : 0,
                  transform: i === line ? 'translateY(0)' : 'translateY(12px)',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            <Link
              to="/stories"
              className="hero-btn-primary group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wider uppercase transition-all duration-300"
              style={{ background: 'var(--color-text)', color: 'var(--color-bg)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-text)'; e.currentTarget.style.color = 'var(--color-bg)'; }}
            >
              Browse Stories
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>

            <Link
              to="/lab-notes"
              className="hero-btn-secondary group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wider uppercase border transition-all duration-300"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
            >
              Lab Notes
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="mt-14 md:mt-20 flex flex-wrap gap-x-5 gap-y-2">
          {keywords.map(k => (
            <span key={k} className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase opacity-30 hover:opacity-60 transition-opacity cursor-default" style={{ color: 'var(--color-text-muted)' }}>{k}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
