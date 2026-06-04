import { Link } from 'react-router-dom';
import articles from '../data/articles';
import SectionTitle from '../components/common/SectionTitle';
import Engagement from '../components/common/Engagement';

const audioArticles = articles.filter(a => a.media?.audio);

function EpisodeItem({ article, index }) {
  const hasSubtitles = !!article.media?.audio?.subtitles;

  return (
    <Link
      to={`/listen/${index}`}
      className="flex items-start gap-5 px-5 py-4 border transition-all duration-300 hover:bg-[var(--color-bg-secondary)] border-l"
      style={{
        borderColor: 'var(--color-border)',
        background: 'rgba(255,255,255,0.5)',
      }}
    >
      <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center" style={{ background: 'var(--color-accent)' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-[0.55rem] font-bold tracking-[0.12em] uppercase opacity-50" style={{ color: 'var(--color-text-muted)' }}>
            EP {article.number}
          </span>
          <span className="text-[0.6rem] font-semibold tracking-wider uppercase" style={{ color: 'var(--color-accent)' }}>
            {article.conceptEn}
          </span>
          {hasSubtitles && (
            <span className="text-[0.5rem] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full" style={{ background: 'var(--color-accent-dim)', color: 'var(--color-accent)' }}>
              CC
            </span>
          )}
        </div>
        <h3 className="text-sm font-display font-medium leading-snug truncate" style={{ color: 'var(--color-text)' }}>
          {article.titleEn}
        </h3>
      </div>

      <span className="text-[0.6rem] font-semibold tracking-wider uppercase shrink-0 opacity-40" style={{ color: 'var(--color-text-muted)' }}>
        {article.readTime}
      </span>
    </Link>
  );
}

export default function PodcastPage() {
  return (
    <div className="page-enter">
      <section className="container-main pt-12 md:pt-16 pb-8">
        <SectionTitle subtitle="Podcast">No Filter Frequency</SectionTitle>
        <p className="dark-bright text-paper-text-secondary max-w-2xl -mt-6 mb-8 leading-relaxed">
          Sounds like economics. Audio stories with synced subtitles — click an episode to enter lyric mode.
        </p>

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
