import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAudio, audioArticles } from '../context/AudioContext';

export default function ListenPage() {
  const { index } = useParams();
  const navigate = useNavigate();
  const { play, pause, playing } = useAudio();
  const idx = parseInt(index || '0', 10);
  const episode = audioArticles[idx];
  const subtitles = episode?.media?.audio?.subtitles;

  const [elapsed, setElapsed] = useState(0);
  const containerRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    play(idx);
    timerRef.current = setInterval(() => {
      const audio = document.querySelector('#global-audio');
      if (audio) setElapsed(audio.currentTime);
    }, 250);
    return () => clearInterval(timerRef.current);
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

  return (
    <div className="page-enter flex flex-col" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      {/* Top bar */}
      <div className="container-main flex items-center justify-center py-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: playing ? 'var(--color-accent)' : 'var(--color-text-muted)' }} />
            <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase opacity-50" style={{ color: 'var(--color-text-muted)' }}>EP {episode.number}</span>
          </div>
          <p className="listen-title text-base md:text-lg font-display font-medium" style={{ color: 'var(--color-text)' }}>{episode.titleEn}</p>
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
                className={`${isActive ? 'text-lg md:text-xl font-medium' : 'text-sm md:text-base'} ${isActive ? 'lyric-active' : 'lyric-line'}`}
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

      {/* Spacer for MiniPlayer */}
      <div className="h-16" />
    </div>
  );
}
