import { Link } from 'react-router-dom';

export default function StoryCard({ article, index }) {
  const img = article.media?.images?.[0]?.src;
  const delay = Math.min((index || 0) + 1, 6);

  return (
    <Link
      to={`/article/${article.slug}`}
      className={`group flex flex-col news-card animate-in stagger-${delay} transition-all duration-400`}
      style={{ borderRadius: '2px', background: 'rgba(255,255,255,0.75)' }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 12px 48px rgba(0,0,0,0.15)';
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'var(--color-accent)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--color-border)';
      }}
    >
      <div className="h-52 overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
        {img ? (
          <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-display text-7xl font-medium opacity-10">{article.number}</div>
        )}
      </div>

      <div className="p-6 md:p-7 flex flex-col flex-1">
        <span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--color-accent)' }}>
          {article.conceptEn}
        </span>

        <h3 className="text-xl md:text-2xl font-display font-medium leading-[1.18] mb-3 transition-colors duration-300 group-hover:text-[var(--color-accent)]" style={{ color: 'var(--color-text)' }}>
          {article.titleEn}
        </h3>

        <p className="text-sm leading-[1.6] flex-1 mb-5" style={{ color: 'var(--color-text-muted)', maxHeight: '2.9rem', overflow: 'hidden' }}>
          {article.summary}
        </p>

        <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <span className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase opacity-50" style={{ color: 'var(--color-text-muted)' }}>
            {article.readTime} read
          </span>
          <span className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase transition-all duration-300 group-hover:tracking-[0.2em]" style={{ color: 'var(--color-accent)' }}>Read &rarr;</span>
        </div>
      </div>
    </Link>
  );
}
