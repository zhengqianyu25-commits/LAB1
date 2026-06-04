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
      <div className="flex items-center justify-center min-h-screen" style={{ background: '#0D0D0D' }}>
        <button onClick={() => navigate('/frequency')} className="text-sm opacity-50 hover:opacity-100" style={{ color: '#fff' }}>&larr; Back to Frequency</button>
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
    <div className="flex flex-col min-h-screen" style={{ background: '#0D0D0D' }}>
      {/* Fixed top-left back */}
      <button
        onClick={() => navigate('/frequency')}
        className="fixed top-6 left-6 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105"
        style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', backdropFilter: 'blur(12px)' }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
        Frequency
      </button>

      {/* Fixed top-right info */}
      <div className="fixed top-6 right-6 z-50 text-right">
        <span className="text-[0.55rem] font-bold tracking-wider uppercase opacity-40 block" style={{ color: '#fff' }}>
          EP {episode.number}
        </span>
        <button onClick={nextEpisode} className="text-[0.65rem] font-semibold tracking-wider uppercase opacity-50 hover:opacity-100 transition-opacity" style={{ color: '#fff' }}>
          Next &rarr;
        </button>
      </div>

      {/* Lyrics */}
      <div ref={containerRef} className="flex-1 overflow-y-auto py-32 px-6 max-w-xl mx-auto w-full">
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
              style={{ color: isActive ? '#F5C518' : '#fff' }}
            >
              {s.text}
            </p>
          );
        }) : (
          <p className="text-center opacity-30 mt-20" style={{ color: '#fff' }}>No subtitles available for this episode.</p>
        )}
      </div>

      {/* Bottom bar */}
      <div className="border-t px-4 py-4" style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
        <div className="max-w-xl mx-auto text-center mb-3">
          <p className="text-sm font-display font-medium truncate" style={{ color: '#fff' }}>{episode.titleEn}</p>
          <div className="flex items-center justify-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: playing ? '#F5C518' : 'rgba(255,255,255,0.3)' }} />
            <span className="text-[0.55rem] opacity-40" style={{ color: '#fff' }}>{episode.conceptEn}</span>
          </div>
        </div>
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
