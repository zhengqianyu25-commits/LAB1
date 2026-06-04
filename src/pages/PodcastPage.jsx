import { useState, useRef, useEffect } from 'react';
import articles from '../data/articles';
import SectionTitle from '../components/common/SectionTitle';
import Engagement from '../components/common/Engagement';

const audioArticles = articles.filter(a => a.media?.audio);

function Episode({ article, isActive, onPlay }) {
  return (
    <div
      className={`flex items-start gap-5 px-5 py-4 border transition-all duration-300 hover:bg-[var(--color-bg-secondary)] ${
        isActive ? 'border-l-[3px]' : 'border-l'
      }`}
      style={{
        borderColor: isActive ? 'var(--color-accent)' : 'var(--color-border)',
        background: isActive ? 'var(--color-accent-dim)' : 'rgba(255,255,255,0.5)',
      }}
    >
      <button
        onClick={onPlay}
        className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ background: 'var(--color-accent)' }}
        aria-label={`Play ${article.titleEn}`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          {isActive ? (
            <>
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </>
          ) : (
            <polygon points="5,3 19,12 5,21" />
          )}
        </svg>
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-[0.55rem] font-bold tracking-[0.12em] uppercase opacity-50" style={{ color: 'var(--color-text-muted)' }}>
            EP {article.number}
          </span>
          <span className="text-[0.6rem] font-semibold tracking-wider uppercase" style={{ color: 'var(--color-accent)' }}>
            {article.conceptEn}
          </span>
        </div>
        <h3 className="text-sm font-display font-medium leading-snug truncate" style={{ color: 'var(--color-text)' }}>
          {article.titleEn}
        </h3>
      </div>

      <span className="text-[0.6rem] font-semibold tracking-wider uppercase shrink-0 opacity-40" style={{ color: 'var(--color-text-muted)' }}>
        {article.readTime}
      </span>
    </div>
  );
}

function LyricView({ subtitles, elapsed }) {
  const containerRef = useRef(null);
  let activeIdx = 0;
  for (let i = subtitles.length - 1; i >= 0; i--) {
    if (elapsed >= subtitles[i].time) { activeIdx = i; break; }
  }

  useEffect(() => {
    if (containerRef.current) {
      const active = containerRef.current.children[activeIdx];
      if (active) {
        active.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [activeIdx]);

  return (
    <div ref={containerRef} className="flex-1 overflow-y-auto py-20 px-6 md:px-0 max-w-xl mx-auto" style={{ scrollBehavior: 'smooth' }}>
      {subtitles.map((s, i) => {
        const isActive = i === activeIdx;
        return (
          <p
            key={i}
            className={`text-center transition-all duration-500 py-4 px-4 ${
              isActive
                ? 'text-xl md:text-2xl font-medium opacity-100'
                : 'text-base md:text-lg opacity-25'
            }`}
            style={{ color: isActive ? 'var(--color-accent)' : 'var(--color-text)' }}
          >
            {s.text}
          </p>
        );
      })}
    </div>
  );
}

export default function PodcastPage() {
  const [activeIdx, setActiveIdx] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => { return () => clearInterval(timerRef.current); }, []);

  const handlePlay = (idx) => {
    setActiveIdx(idx);
    setElapsed(0);
    setPlaying(true);
    setShowPlayer(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
        timerRef.current = setInterval(() => {
          if (audioRef.current) setElapsed(audioRef.current.currentTime);
        }, 250);
      }
    }, 100);
  };

  const handleClose = () => {
    if (audioRef.current) audioRef.current.pause();
    setPlaying(false);
    setShowPlayer(false);
    clearInterval(timerRef.current);
  };

  const currentEpisode = activeIdx !== null ? audioArticles[activeIdx] : null;
  const subtitles = currentEpisode?.media?.audio?.subtitles;

  return (
    <div className="page-enter">
      <section className="container-main pt-12 md:pt-16 pb-8">
        <SectionTitle subtitle="Podcast">No Filter Frequency</SectionTitle>
        <p className="dark-bright text-paper-text-secondary max-w-2xl -mt-6 mb-8 leading-relaxed">
          Sounds like economics. Audio stories with synced subtitles — click an episode to open the lyric player.
        </p>

        <div className="border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
          <div className="px-5 py-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase dark-bright opacity-70" style={{ color: 'var(--color-text-muted)' }}>
              {audioArticles.length} Episodes
            </span>
          </div>
          {audioArticles.map((a, i) => (
            <Episode key={a.slug} article={a} isActive={activeIdx === i} onPlay={() => handlePlay(i)} />
          ))}
        </div>

        <Engagement slug="frequency" />
      </section>

      {/* Full-screen lyric player */}
      {showPlayer && currentEpisode && (
        <div className="fixed inset-0 z-[80] flex flex-col" style={{ background: 'var(--color-bg)' }}>
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <button onClick={handleClose} className="text-sm font-semibold tracking-wider uppercase opacity-60 hover:opacity-100 transition-opacity" style={{ color: 'var(--color-text-muted)' }}>
              &larr; Back
            </button>
            <div className="text-center min-w-0 px-4">
              <p className="text-xs font-display font-medium truncate" style={{ color: 'var(--color-text)' }}>{currentEpisode.titleEn}</p>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: playing ? 'var(--color-accent)' : 'var(--color-text-muted)' }} />
                <span className="text-[0.55rem] opacity-50" style={{ color: 'var(--color-text-muted)' }}>EP {currentEpisode.number}</span>
              </div>
            </div>
            <div className="w-16" />
          </div>

          {/* Lyrics */}
          {subtitles && <LyricView subtitles={subtitles} elapsed={elapsed} />}

          {/* Bottom audio bar */}
          <div className="border-t px-4 py-3" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}>
            <audio
              ref={audioRef}
              controls
              className="w-full max-w-xl mx-auto block"
              key={currentEpisode.slug}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => {
                const next = (activeIdx + 1) % audioArticles.length;
                setActiveIdx(next);
                setElapsed(0);
                setPlaying(true);
              }}
              onTimeUpdate={(e) => setElapsed(e.currentTarget.currentTime)}
            >
              <source src={currentEpisode.media.audio.src} type={currentEpisode.media.audio.type || 'audio/mpeg'} />
            </audio>
          </div>
        </div>
      )}
    </div>
  );
}
