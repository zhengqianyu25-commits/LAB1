import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAudio, audioArticles } from '../../context/AudioContext';

export default function MiniPlayer() {
  const { episode, playing, play, pause, queue, removeFromQueue } = useAudio();
  const navigate = useNavigate();
  const [showQueue, setShowQueue] = useState(false);
  if (!episode) return null;

  const idx = audioArticles.indexOf(episode);
  const img = episode.media?.images?.[0]?.src;
  const toggle = () => playing ? pause() : play(idx);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
        <div className="container-main flex items-center gap-4 py-2">
          <div
            className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer"
            onClick={() => navigate(`/listen/${idx}`)}
          >
            <div className="w-10 h-10 shrink-0 overflow-hidden rounded-sm" style={{ background: 'var(--color-bg-secondary)' }}>
              {img && <img src={img} alt="" className="w-full h-full object-cover" />}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-display font-medium truncate" style={{ color: 'var(--color-text)' }}>{episode.titleEn}</p>
              <p className="text-[0.55rem] opacity-40 truncate" style={{ color: 'var(--color-text-muted)' }}>EP {episode.number}</p>
            </div>
          </div>

          <button onClick={toggle} className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center transition-transform hover:scale-110" style={{ background: 'var(--color-accent)' }} aria-label={playing ? 'Pause' : 'Play'}>
            {playing ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
            )}
          </button>

          <button onClick={() => setShowQueue(!showQueue)} className="w-7 h-7 shrink-0 flex items-center justify-center rounded-full opacity-50 hover:opacity-100 transition-opacity" style={{ color: 'var(--color-text-muted)' }} aria-label="Queue">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      {showQueue && (
        <div className="fixed bottom-16 right-4 z-[60] w-72 max-h-80 overflow-y-auto border shadow-xl rounded-sm" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
          <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: 'var(--color-border)' }}>
            <span className="text-xs font-semibold tracking-wider uppercase opacity-60" style={{ color: 'var(--color-text-muted)' }}>Queue</span>
            <button onClick={() => setShowQueue(false)} className="text-sm opacity-40 hover:opacity-80" style={{ color: 'var(--color-text-muted)' }}>&times;</button>
          </div>
          {audioArticles.map((a, i) => (
            <div
              key={a.slug}
              className={`flex items-center gap-3 px-4 py-2.5 transition-colors cursor-pointer hover:bg-[var(--color-bg-secondary)] ${episode.number === a.number ? 'border-l-[3px]' : ''}`}
              style={{ borderColor: episode.number === a.number ? 'var(--color-accent)' : 'transparent' }}
              onClick={() => { play(i); setShowQueue(false); }}
            >
              <span className="text-[0.55rem] font-bold opacity-30 w-5" style={{ color: 'var(--color-text-muted)' }}>{a.number}</span>
              <span className="text-xs truncate flex-1" style={{ color: episode.number === a.number ? 'var(--color-accent)' : 'var(--color-text)' }}>{a.titleEn}</span>
              {queue.find(q => q.number === a.number) && (
                <span className="text-[0.5rem] opacity-30" style={{ color: 'var(--color-text-muted)' }}>✓</span>
              )}
            </div>
          ))}
          {queue.length > 0 && (
            <div className="px-4 py-2 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <span className="text-[0.55rem] font-semibold opacity-40" style={{ color: 'var(--color-text-muted)' }}>Saved: {queue.map(q => q.number).join(', ')}</span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
