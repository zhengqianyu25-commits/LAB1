import { useState, useRef, useEffect } from 'react';
import articles from '../data/articles';
import SectionTitle from '../components/common/SectionTitle';
import Engagement from '../components/common/Engagement';

const audioArticles = articles.filter(a => a.media?.audio);

function Waveform({ playing }) {
  return (
    <div className="flex items-end gap-[3px] h-12">
      {Array.from({ length: 32 }).map((_, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full transition-all duration-300"
          style={{
            height: playing ? `${12 + Math.sin(i * 1.2 + Date.now() / 400) * 10 + Math.random() * 24}px` : '6px',
            background: 'var(--color-accent)',
            opacity: playing ? 0.4 + (i % 5) * 0.12 : 0.2,
            animation: playing ? `none` : undefined,
          }}
        />
      ))}
      {playing && <style>{`@keyframes wave{0%,100%{height:6px}50%{height:28px}}`}</style>}
    </div>
  );
}

function AudioSubtitles({ article, elapsed }) {
  if (!article) return null;
  const subtitles = article.media?.audio?.subtitles;
  const hasTimed = subtitles && typeof subtitles[0] === 'object';

  if (hasTimed) {
    let idx = 0;
    for (let i = subtitles.length - 1; i >= 0; i--) {
      if (elapsed >= subtitles[i].time) { idx = i; break; }
    }
    const current = subtitles[idx];
    return (
      <div className="mt-6 p-5 rounded-sm border transition-all duration-500" style={{ background: 'rgba(255,255,255,0.85)', borderColor: 'var(--color-accent)', borderLeftWidth: '3px' }}>
        <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase mb-2 block" style={{ color: 'var(--color-accent)' }}>
          Audio Transcript &middot; {article.titleZh}
        </span>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {current.text}
        </p>
        <p className="text-[0.6rem] mt-2 opacity-40" style={{ color: 'var(--color-text-muted)' }}>
          {String(Math.floor(current.time / 60)).padStart(2, '0')}:{String(current.time % 60).padStart(2, '0')}
        </p>
      </div>
    );
  }

  const paragraphs = (subtitles || article.body || []).filter(p => typeof p === 'string');
  if (paragraphs.length === 0) return null;
  const idx = Math.min(Math.floor(elapsed / 10), paragraphs.length - 1);

  return (
    <div className="mt-6 p-5 rounded-sm border transition-all duration-500" style={{ background: 'rgba(255,255,255,0.85)', borderColor: 'var(--color-accent)', borderLeftWidth: '3px' }}>
      <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase mb-2 block" style={{ color: 'var(--color-accent)' }}>
        Subtitles &middot; {article.titleZh}
      </span>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {paragraphs[idx]}
      </p>
    </div>
  );
}

function Episode({ article, isActive, onPlay }) {
  return (
    <div
      className={`flex items-start gap-5 px-5 py-4 border transition-all duration-300 hover:brightness-95 ${
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
        <p className="text-xs line-clamp-1 mt-0.5 opacity-60" style={{ color: 'var(--color-text-muted)' }}>
          {article.titleZh}
        </p>
      </div>

      <span className="text-[0.6rem] font-semibold tracking-wider uppercase shrink-0 opacity-40" style={{ color: 'var(--color-text-muted)' }}>
        {article.readTime}
      </span>
    </div>
  );
}

export default function PodcastPage() {
  const [activeIdx, setActiveIdx] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const handlePlay = (idx) => {
    if (activeIdx === idx && audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setPlaying(true);
      } else {
        audioRef.current.pause();
        setPlaying(false);
      }
    } else {
      setActiveIdx(idx);
      setElapsed(0);
      setPlaying(true);
    }
  };

  useEffect(() => {
    if (activeIdx !== null && audioRef.current) {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
      timerRef.current = setInterval(() => {
        if (audioRef.current) setElapsed(audioRef.current.currentTime);
      }, 500);
      return () => clearInterval(timerRef.current);
    }
  }, [activeIdx]);

  const currentEpisode = activeIdx !== null ? audioArticles[activeIdx] : null;

  return (
    <div className="page-enter">
      <section className="container-main pt-12 md:pt-16 pb-8">
        <SectionTitle subtitle="Podcast">No Filter Frequency</SectionTitle>
        <p className="dark-bright text-paper-text-secondary max-w-2xl -mt-6 mb-8 leading-relaxed">
          Sounds like economics. Audio stories with Chinese subtitles and visual galleries &mdash; the news, explained out loud.
        </p>

        {/* Now Playing */}
        <div className="border p-6 md:p-8 mb-8 dark-bright-card" style={{ background: 'rgba(255,255,255,0.75)', borderColor: 'var(--color-border)', borderRadius: '2px' }}>
          {currentEpisode ? (
            <>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: playing ? 'var(--color-accent)' : 'var(--color-text-muted)' }} />
                <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase dark-bright-gold" style={{ color: playing ? 'var(--color-accent)' : 'var(--color-text-muted)' }}>
                  {playing ? 'On Air' : 'Paused'}
                </span>
                <span className="text-[0.55rem] font-semibold tracking-wider opacity-40" style={{ color: 'var(--color-text-muted)' }}>
                  EP {currentEpisode.number}
                </span>
              </div>

              <Waveform playing={playing} />

              <h2 className="text-xl md:text-2xl font-display font-medium mt-4 mb-1 dark-bright" style={{ color: 'var(--color-text)' }}>
                {currentEpisode.titleEn}
              </h2>
              <p className="text-sm opacity-60 mb-5 dark-bright" style={{ color: 'var(--color-text-muted)' }}>
                {currentEpisode.conceptEn} &middot; {currentEpisode.readTime}
              </p>

              <audio
                ref={audioRef}
                controls
                className="w-full"
                key={currentEpisode.slug}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => {
                  const next = (activeIdx + 1) % audioArticles.length;
                  setActiveIdx(next);
                  setElapsed(0);
                }}
                onTimeUpdate={(e) => setElapsed(e.currentTarget.currentTime)}
              >
                <source src={currentEpisode.media.audio.src} type={currentEpisode.media.audio.type || 'audio/mpeg'} />
              </audio>

              <AudioSubtitles article={currentEpisode} elapsed={elapsed} />
            </>
          ) : (
            <div className="text-center py-8">
              <Waveform playing={false} />
              <p className="mt-4 text-sm opacity-50 dark-bright" style={{ color: 'var(--color-text-muted)' }}>
                Select an episode below to start listening
              </p>
            </div>
          )}
        </div>

        {/* Episode List */}
        <div className="border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
          <div className="px-5 py-3 border-b flex items-center justify-between" style={{ borderColor: 'var(--color-border)' }}>
            <span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase dark-bright opacity-70" style={{ color: 'var(--color-text-muted)' }}>
              {audioArticles.length} Episodes
            </span>
          </div>
          {audioArticles.map((a, i) => (
            <Episode
              key={a.slug}
              article={a}
              isActive={activeIdx === i}
              onPlay={() => handlePlay(i)}
            />
          ))}
        </div>

        <Engagement slug="frequency" />
      </section>
    </div>
  );
}
