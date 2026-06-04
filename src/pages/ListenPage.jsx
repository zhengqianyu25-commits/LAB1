import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import articles from '../data/articles';

const audioArticles = articles.filter(a => a.media?.audio);

export default function ListenPage() {
  const { index } = useParams();
  const navigate = useNavigate();
  const idx = parseInt(index || '0', 10);
  const episode = audioArticles[idx];
  const subtitles = episode?.media?.audio?.subtitles;

  const [elapsed, setElapsed] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
    const t = setInterval(() => {
      if (audioRef.current) setElapsed(audioRef.current.currentTime);
    }, 250);
    return () => clearInterval(t);
  }, [idx]);

  if (!episode) {
    return (
      <div className="page-enter container-main py-20 text-center">
        <p style={{ color: 'var(--color-text-muted)' }}>Episode not found.</p>
      </div>
    );
  }

  let activeIdx = 0;
  if (subtitles) {
    for (let i = subtitles.length - 1; i >= 0; i--) {
      if (elapsed >= subtitles[i].time) { activeIdx = i; break; }
    }
  }

  useEffect(() => {
    if (containerRef.current) {
      const active = containerRef.current.children[activeIdx];
      if (active) active.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeIdx]);

  const nextEpisode = () => {
    const next = (idx + 1) % audioArticles.length;
    navigate(`/listen/${next}`, { replace: true });
  };

  return (
    <div className="page-enter flex flex-col" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      {/* Top bar */}
      <div className="container-main flex items-center justify-between py-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <button onClick={() => navigate('/frequency')} className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase opacity-60 hover:opacity-100 transition-opacity" style={{ color: 'var(--color-text-muted)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
          Frequency
        </button>
        <div className="text-center">
          <p className="text-sm font-display font-medium" style={{ color: 'var(--color-text)' }}>{episode.titleEn}</p>
          <div className="flex items-center justify-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: playing ? 'var(--color-accent)' : 'var(--color-text-muted)' }} />
            <span className="text-[0.55rem] opacity-50" style={{ color: 'var(--color-text-muted)' }}>EP {episode.number}</span>
          </div>
        </div>
        <button onClick={nextEpisode} className="text-xs font-semibold tracking-wider uppercase opacity-60 hover:opacity-100 transition-opacity" style={{ color: 'var(--color-text-muted)' }}>
          Next &rarr;
        </button>
      </div>

      {/* Lyrics */}
      <div ref={containerRef} className="flex-1 overflow-y-auto py-16 px-6 max-w-xl mx-auto w-full">
        {subtitles ? subtitles.map((s, i) => {
          const isActive = i === activeIdx;
          return (
            <p
              key={i}
              className={`text-center transition-all duration-500 py-4 px-2 ${
                isActive
                  ? 'text-xl md:text-2xl font-medium opacity-100'
                  : 'text-base md:text-lg opacity-20'
              }`}
              style={{ color: isActive ? 'var(--color-accent)' : 'var(--color-text)' }}
            >
              {s.text}
            </p>
          );
        }) : (
          <p className="text-center opacity-30 mt-20" style={{ color: 'var(--color-text-muted)' }}>No subtitles available for this episode.</p>
        )}
      </div>

      {/* Bottom bar */}
      <div className="border-t px-4 py-4 sticky bottom-0 z-10" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}>
        <audio
          ref={audioRef}
          controls
          className="w-full max-w-xl mx-auto block"
          key={episode.slug}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={nextEpisode}
          onTimeUpdate={(e) => setElapsed(e.currentTarget.currentTime)}
        >
          <source src={episode.media.audio.src} type={episode.media.audio.type || 'audio/mpeg'} />
        </audio>
      </div>
    </div>
  );
}
