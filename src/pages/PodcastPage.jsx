import { Link } from 'react-router-dom';
import articles from '../data/articles';
import SectionTitle from '../components/common/SectionTitle';
import Engagement from '../components/common/Engagement';

const audioArticles = articles.filter(a => a.media?.audio);

function EpisodeItem({ article, index }) {
  const img = article.media?.images?.[0]?.src;
  const hasSubtitles = !!article.media?.audio?.subtitles;

  return (
    <Link
      to={`/listen/${index}`}
      className="flex items-center gap-4 px-5 py-4 border transition-all duration-300 group hover:bg-[var(--color-bg-secondary)] border-l"
      style={{
        borderColor: 'var(--color-border)',
        background: 'rgba(255,255,255,0.5)',
      }}
    >
      <span className="text-[0.6rem] font-bold tracking-[0.12em] uppercase shrink-0 w-5 opacity-50" style={{ color: 'var(--color-text-muted)' }}>
        {article.number}
      </span>

      <div className="w-14 h-14 shrink-0 overflow-hidden rounded-sm" style={{ background: 'var(--color-bg-secondary)' }}>
        {img ? (
          <img src={img} alt="" className="w-full h-full object-cover" />
        ) : (
          <span className="w-full h-full flex items-center justify-center text-lg font-display opacity-10">{article.number}</span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-base md:text-lg font-display font-medium leading-snug truncate transition-colors duration-300 group-hover:text-[var(--color-accent)]" style={{ color: 'var(--color-text)' }}>
          {article.titleEn}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[0.55rem] font-semibold tracking-[0.1em] uppercase opacity-40" style={{ color: 'var(--color-text-muted)' }}>
            {article.conceptEn}
          </span>
          {hasSubtitles && (
            <span className="text-[0.45rem] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full opacity-40" style={{ background: 'var(--color-bg-tertiary)', color: 'var(--color-text-muted)' }}>
              CC
            </span>
          )}
        </div>
      </div>

      <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--color-accent)]" style={{ background: 'var(--color-bg-tertiary)' }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="var(--color-text-muted)" className="transition-all duration-300 group-hover:fill-white">
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </div>
    </Link>
  );
}

export default function PodcastPage() {
  return (
    <div className="page-enter">
      <section className="container-main pt-12 md:pt-16 pb-8">
        <SectionTitle>No Filter FM</SectionTitle>

        <div className="border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
          <div className="px-5 py-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase dark-bright opacity-70" style={{ color: 'var(--color-text-muted)' }}>
              {audioArticles.length} Episodes
            </span>
          </div>
          {audioArticles.map((a, i) => (
            <EpisodeItem key={a.slug} article={a} index={i} />
          ))}
        </div>

        <Engagement slug="frequency" />
      </section>
    </div>
  );
}
