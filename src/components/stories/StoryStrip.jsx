import { Link } from 'react-router-dom';

export default function StoryStrip({ article }) {
  const img = article.media?.images?.[0]?.src;

  return (
    <Link
      to={`/article/${article.slug}`}
      className="group flex items-center gap-3 px-4 py-3.5 border-b transition-all duration-300"
      style={{
        borderColor: 'var(--color-border)',
        background: 'rgba(255,255,255,0.55)',
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.8)'}
      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.55)'}
    >
      <div className="w-12 h-10 shrink-0 overflow-hidden rounded-sm" style={{ background: 'var(--color-bg-secondary)' }}>
        {img ? (
          <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <span className="w-full h-full flex items-center justify-center text-xs font-display opacity-15">{article.number}</span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-sm md:text-[0.95rem] font-display font-medium leading-snug truncate transition-colors group-hover:text-[var(--color-accent)]" style={{ color: 'var(--color-text)' }}>
          {article.titleEn}
        </h3>
        <p className="text-xs md:text-[0.8rem] line-clamp-1 mt-1 opacity-70" style={{ color: 'var(--color-text-secondary)' }}>{article.titleZh}</p>
      </div>
    </Link>
  );
}
