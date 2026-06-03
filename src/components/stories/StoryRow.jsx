import { Link } from 'react-router-dom';
import TagLabel from '../common/TagLabel';

export default function StoryRow({ article }) {
  const img = article.media?.images?.[0]?.src;

  return (
    <Link
      to={`/article/${article.slug}`}
      className="group grid grid-cols-1 md:grid-cols-2 gap-0 border overflow-hidden transition-all duration-300 hover:border-[var(--color-accent)]"
      style={{ borderColor: 'var(--color-border)', background: 'rgba(255,255,255,0.75)', borderRadius: '2px' }}
    >
      <div className="aspect-[4/3] md:aspect-auto overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
        {img ? (
          <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
        ) : (
          <div className="w-full h-full min-h-[240px] flex items-center justify-center">
            <span className="text-8xl font-display font-medium opacity-10">{article.number}</span>
          </div>
        )}
      </div>

      <div className="p-8 md:p-10 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl font-display font-medium opacity-15" style={{ color: 'var(--color-text)' }}>{article.number}</span>
          <TagLabel text={article.conceptEn} />
        </div>

        <h2 className="text-xl md:text-2xl font-display font-medium leading-tight mb-3 transition-colors group-hover:text-[var(--color-accent)]" style={{ color: 'var(--color-text)' }}>
          {article.titleEn}
        </h2>

        <p className="text-sm mb-1 opacity-50" style={{ color: 'var(--color-text-muted)' }}>{article.titleZh}</p>

        <p className="text-sm leading-relaxed mb-5 line-clamp-3" style={{ color: 'var(--color-text-secondary)' }}>
          {article.summary}
        </p>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <span className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase opacity-40" style={{ color: 'var(--color-text-muted)' }}>{article.readTime} read</span>
          <span className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase transition-colors group-hover:opacity-70" style={{ color: 'var(--color-accent)' }}>Read Article &rarr;</span>
        </div>
      </div>
    </Link>
  );
}
