import { useNavigate } from 'react-router-dom';
import articles from '../data/articles';
import { useAudio, audioArticles } from '../context/AudioContext';
import SectionTitle from '../components/common/SectionTitle';
import Engagement from '../components/common/Engagement';

function EpisodeItem({ article, index }) {
  const img = article.media?.images?.[0]?.src;
  const hasSubtitles = !!article.media?.audio?.subtitles;
  const navigate = useNavigate();
  const { play, episode, playing } = useAudio();
  const isCurrent = episode?.slug === article.slug;

  return (
    <div
      onClick={() => navigate(`/listen/${index}`)}
      className={`flex items-center gap-4 px-5 py-4 border transition-all duration-300 group hover:bg-[var(--color-bg-secondary)] cursor-pointer ${
        isCurrent ? 'border-l-[3px]' : 'border-l'
      }`}
      style={{
        borderColor: isCurrent ? 'var(--color-accent)' : 'var(--color-border)',
        background: isCurrent ? 'var(--color-accent-dim)' : 'rgba(255,255,255,0.5)',
      }}
    >
      <span className="text-[0.6rem] font-bold tracking-[0.12em] uppercase shrink-0 w-5" style={{ color: isCurrent ? 'var(--color-accent)' : 'var(--color-text-muted)', opacity: isCurrent ? 1 : 0.5 }}>
        {article.number}
      </span>

      <div className="w-14 h-14 shrink-0 overflow-hidden rounded-sm relative" style={{ background: 'var(--color-bg-secondary)' }}>
        {img ? (
          <img src={img} alt="" className={`w-full h-full object-cover ${isCurrent ? 'opacity-80' : ''}`} />
        ) : (
          <span className="w-full h-full flex items-center justify-center text-lg font-display opacity-10">{article.number}</span>
        )}
        {isCurrent && playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="flex items-end gap-[2px] h-3">
              <span className="w-[2px] bg-white animate-pulse" style={{ height: '60%' }} />
              <span className="w-[2px] bg-white" style={{ height: '100%', animation: 'none' }} />
              <span className="w-[2px] bg-white animate-pulse" style={{ height: '40%', animationDelay: '0.2s' }} />
              <span className="w-[2px] bg-white" style={{ height: '80%', animation: 'none' }} />
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-base md:text-lg font-display font-medium leading-snug truncate transition-colors duration-300" style={{ color: isCurrent ? 'var(--color-accent)' : 'var(--color-text)' }}>
          {article.titleEn}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className={`text-[0.55rem] font-semibold tracking-[0.1em] uppercase ${isCurrent ? '' : 'opacity-40'}`} style={{ color: isCurrent ? 'var(--color-accent)' : 'var(--color-text-muted)' }}>
            {article.conceptEn}
          </span>
          {isCurrent && (
            <span className="text-[0.5rem] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full" style={{ background: 'var(--color-accent)', color: '#fff' }}>ON AIR</span>
          )}
          {hasSubtitles && !isCurrent && (
            <span className="text-[0.45rem] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full opacity-40" style={{ background: 'var(--color-bg-tertiary)', color: 'var(--color-text-muted)' }}>CC</span>
          )}
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); play(index); }}
        className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
          isCurrent ? 'scale-110' : ''
        }`}
        style={{ background: isCurrent ? 'var(--color-accent)' : 'var(--color-bg-tertiary)' }}
        aria-label={`Play episode ${article.number}`}
      >
        {isCurrent && playing ? (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
        ) : (
          <svg width="11" height="11" viewBox="0 0 24 24" style={{ fill: isCurrent ? '#fff' : 'var(--color-text-muted)' }}><polygon points="5,3 19,12 5,21"/></svg>
        )}
      </button>
    </div>
  );
}

export default function PodcastPage() {
  const { play } = useAudio();
  return (
    <div className="page-enter">
      <section className="container-main pt-12 md:pt-16 pb-8">
        <SectionTitle>No Filter FM</SectionTitle>

        <div className="border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
          <div className="px-5 py-3 border-b flex items-center gap-3" style={{ borderColor: 'var(--color-border)' }}>
            <button onClick={() => play(0)} className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all hover:opacity-80" style={{ background: 'var(--color-accent)', color: '#fff' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
              Play All
            </button>
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
