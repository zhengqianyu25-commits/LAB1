import { Link } from 'react-router-dom';

export default function StoryEntry({ article, index }) {
  const img = article.media?.images?.[0]?.src;
  const delay = index || 0;

  return (
    <Link
      to={`/article/${article.slug}`}
      className={`group flex gap-6 py-7 border-b transition-all duration-300 px-3 -mx-3 rounded-sm animate-in stagger-${Math.min(delay + 1, 6)}`}
      style={{
        borderColor: 'var(--color-border)',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-bg-secondary)'; e.currentTarget.style.borderColor = 'transparent'; }}
      onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
    >
      <div className="w-28 h-20 shrink-0 overflow-hidden flex-shrink-0 rounded-sm" style={{ background: 'var(--color-bg-secondary)' }}>
        {img ? (
          <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-display text-2xl font-medium opacity-20">{article.number}</div>
        )}
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase mb-1.5" style={{ color: 'var(--color-accent)' }}>
          {article.conceptEn}
        </span>
        <h3 className="text-lg md:text-xl font-display font-medium leading-snug mb-1.5 transition-colors duration-200 group-hover:text-[var(--color-accent)]" style={{ color: 'var(--color-text)' }}>
          {article.titleEn}
        </h3>
        <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>
          {article.summary}
        </p>
      </div>
    </Link>
  );
}
