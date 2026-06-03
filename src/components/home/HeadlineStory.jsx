import { Link } from 'react-router-dom';

export default function HeadlineStory({ article }) {
  const img = article.media?.images?.[0]?.src;

  return (
    <section className="container-main py-16 md:py-24 animate-in">
      <h2 className="text-2xl md:text-3xl font-display font-medium mb-8 dark-bright" style={{ color: 'var(--color-text)' }}>Lead Story</h2>

      <Link
        to={`/article/${article.slug}`}
        className="group block"
      >
        <div className="grid md:grid-cols-2 gap-0 news-card overflow-hidden transition-all duration-400" style={{ borderRadius: '2px', background: 'rgba(255,255,255,0.75)' }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 48px rgba(0,0,0,0.15)'; e.currentTarget.style.borderColor = 'var(--color-accent)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
        >
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 opacity-60" style={{ color: 'var(--color-text-muted)' }}>
              {article.conceptEn}
            </span>

            <h2 className="text-2xl md:text-4xl font-display font-medium leading-[1.13] mb-4 transition-colors duration-300 group-hover:text-[var(--color-accent)]" style={{ color: 'var(--color-text)' }}>
              {article.titleEn}
            </h2>

            <p className="text-base leading-relaxed mb-6 line-clamp-2" style={{ color: 'var(--color-text-secondary)' }}>
              {article.summary}
            </p>

            <span className="text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 group-hover:tracking-[0.25em]" style={{ color: 'var(--color-accent)' }}>Read Story &rarr;</span>
          </div>

          <div className="min-h-[300px] md:min-h-[380px] overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
            {img && (
              <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
            )}
          </div>
        </div>
      </Link>
    </section>
  );
}
