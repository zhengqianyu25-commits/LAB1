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

  const prevEpisode = () => {
    const prev = (idx - 1 + audioArticles.length) % audioArticles.length;
    navigate(`/listen/${prev}`, { replace: true });
  };
  const nextEpisode = () => {
    const next = (idx + 1) % audioArticles.length;
    navigate(`/listen/${next}`, { replace: true });
  };
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) { audioRef.current.play(); setPlaying(true); }
    else { audioRef.current.pause(); setPlaying(false); }
  };

  return (
    <div className="page-enter flex flex-col" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      {/* Top bar */}
      <div className="container-main flex items-center justify-center py-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="text-center">
          <p className="text-sm font-display font-medium" style={{ color: 'var(--color-text)' }}>{episode.titleEn}</p>
          <div className="flex items-center justify-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: playing ? 'var(--color-accent)' : 'var(--color-text-muted)' }} />
            <span className="text-[0.55rem] opacity-50" style={{ color: 'var(--color-text-muted)' }}>EP {episode.number}</span>
          </div>
        </div>
      </div>

      {/* Lyrics */}
      <div ref={containerRef} className="flex-1 overflow-y-auto py-16 px-6 max-w-xl mx-auto w-full">
        {subtitles ? subtitles.map((s, i) => {
          const isActive = i === activeIdx;
          const en = s.en || s.text;
          const zh = s.zh || '';
          const hasBilingual = !!s.zh;
          return (
            <div
              key={i}
              className={`text-center transition-all duration-500 py-4 px-2 ${
                isActive ? 'opacity-100' : 'opacity-20'
              }`}
            >
              <p
                className={isActive ? 'text-lg md:text-xl font-medium' : 'text-sm md:text-base'}
                style={{ color: isActive ? 'var(--color-accent)' : 'var(--color-text)' }}
              >
                {en}
              </p>
              {hasBilingual && (
                <p
                  className={`mt-1.5 ${isActive ? 'text-xs md:text-sm' : 'text-[0.65rem]'}`}
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {zh}
                </p>
              )}
            </div>
          );
        }) : (
          <p className="text-center opacity-30 mt-20" style={{ color: 'var(--color-text-muted)' }}>No subtitles available for this episode.</p>
        )}
      </div>

      {/* Bottom bar */}
      <div className="border-t px-4 py-4 sticky bottom-0 z-10" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-xl mx-auto">
          <audio
            ref={audioRef}
            controls
            className="w-full block"
            key={episode.slug}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={nextEpisode}
            onTimeUpdate={(e) => setElapsed(e.currentTarget.currentTime)}
          >
            <source src={episode.media.audio.src} type={episode.media.audio.type || 'audio/mpeg'} />
          </audio>
          <div className="flex items-center justify-center gap-6 mt-3">
            <button onClick={prevEpisode} className="p-2 opacity-50 hover:opacity-100 transition-opacity" aria-label="Previous" style={{ color: 'var(--color-text)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m19 20 1 0V4l-1 0v16zM4.5 12l10-6v12l-10-6z"/></svg>
            </button>
            <button onClick={togglePlay} className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110" style={{ background: 'var(--color-accent)' }} aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="6,3 20,12 6,21"/></svg>
              )}
            </button>
            <button onClick={nextEpisode} className="p-2 opacity-50 hover:opacity-100 transition-opacity" aria-label="Next" style={{ color: 'var(--color-text)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 4h1v16H5V4zm14.5 8-10 6V6l10 6z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
