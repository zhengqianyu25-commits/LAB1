import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAudio, audioArticles } from '../../context/AudioContext';

export default function MiniPlayer() {
  const { episode, playing, currentTime, duration, play, pause, stop, seek, prev, next, liked, toggleLike, addToQueue, removeFromQueue, queue } = useAudio();
  const navigate = useNavigate();
  const [showQueue, setShowQueue] = useState(false);
  if (!episode) return null;

  const idx = audioArticles.indexOf(episode);
  const img = episode.media?.images?.[0]?.src;
  const toggle = () => playing ? pause() : play(idx);
  const inQueue = queue.find(q => q.slug === episode.slug);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t" style={{ background: 'rgba(255,255,255,0.98)', borderColor: 'var(--color-border)', backdropFilter: 'blur(20px)' }}>
        {/* Title row */}
        <div className="container-main flex items-center gap-3 pt-2 pb-0.5">
          <div className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer" onClick={() => navigate(`/listen/${idx}`)}>
            <div className="w-10 h-10 shrink-0 overflow-hidden rounded-sm" style={{ background: 'var(--color-bg-secondary)' }}>
              {img && <img src={img} alt="" className="w-full h-full object-cover" />}
            </div>
            <div className="min-w-0">
              <p className="mini-text text-xs font-display font-medium truncate" style={{ color: 'var(--color-text)' }}>{episode.titleEn}</p>
              <p className="mini-sub text-[0.55rem] truncate" style={{ color: 'var(--color-text-muted)' }}>EP {episode.number}</p>
            </div>
          </div>
          <button onClick={stop} className="w-5 h-5 shrink-0 flex items-center justify-center rounded-full opacity-30 hover:opacity-60" style={{ color: 'var(--color-text-muted)' }} aria-label="Close">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="px-4 pb-0.5">
          <input type="range" min="0" max={duration || 0} value={currentTime} onChange={(e) => seek(parseFloat(e.target.value))}
            className="w-full h-1 appearance-none rounded-full cursor-pointer"
            style={{ background: `linear-gradient(to right, var(--color-accent) ${duration ? (currentTime/duration)*100 : 0}%, var(--color-border) ${duration ? (currentTime/duration)*100 : 0}%)` }}
          />
        </div>

        {/* Controls */}
        <div className="container-main flex items-center justify-center gap-2 pb-2">
          <button onClick={toggleLike} className="w-7 h-7 flex items-center justify-center rounded-full" style={{ color: liked ? 'var(--color-accent)' : 'var(--color-text-muted)', opacity: liked ? 1 : 0.4 }} aria-label="Like">
            <svg width="14" height="14" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <button onClick={prev} className="w-7 h-7 flex items-center justify-center rounded-full opacity-50 hover:opacity-100" style={{ color: 'var(--color-text)' }} aria-label="Previous">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m19 20 1 0V4l-1 0v16zM4.5 12l10-6v12l-10-6z"/></svg>
          </button>
          <button onClick={toggle} className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-transform hover:scale-110" style={{ background: 'var(--color-accent)' }} aria-label={playing ? 'Pause' : 'Play'}>
            {playing ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
            )}
          </button>
          <button onClick={next} className="w-7 h-7 flex items-center justify-center rounded-full opacity-50 hover:opacity-100" style={{ color: 'var(--color-text)' }} aria-label="Next">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 4h1v16H5V4zm14.5 8-10 6V6l10 6z"/></svg>
          </button>
          <button onClick={addToQueue} className="w-7 h-7 flex items-center justify-center rounded-full" style={{ color: inQueue ? 'var(--color-accent)' : 'var(--color-text-muted)', opacity: inQueue ? 1 : 0.4 }} aria-label="Add to queue">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
          <button onClick={() => setShowQueue(!showQueue)} className="w-7 h-7 shrink-0 flex items-center justify-center rounded-full opacity-40 hover:opacity-80" style={{ color: 'var(--color-text-muted)' }} aria-label="Queue">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
          </button>
        </div>
      </div>

      {showQueue && (
        <div className="fixed bottom-20 right-4 z-[60] w-72 max-h-80 overflow-y-auto border shadow-xl rounded-sm" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
          <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: 'var(--color-border)' }}>
            <span className="text-xs font-semibold tracking-wider uppercase opacity-60" style={{ color: 'var(--color-text-muted)' }}>Playlist</span>
            <button onClick={() => setShowQueue(false)} className="text-sm opacity-40 hover:opacity-80" style={{ color: 'var(--color-text-muted)' }}>&times;</button>
          </div>
          {queue.length === 0 ? (
            <p className="px-4 py-6 text-xs text-center opacity-30" style={{ color: 'var(--color-text-muted)' }}>Queue is empty. Click + to add.</p>
          ) : (
            queue.map((q, i) => (
              <div key={i} className={`queue-row flex items-center gap-3 px-4 py-2.5 transition-colors cursor-pointer hover:bg-[var(--color-bg-secondary)] ${episode.slug === q.slug ? 'border-l-[3px]' : ''}`}
                style={{ borderColor: episode.slug === q.slug ? 'var(--color-accent)' : 'transparent' }}
                onClick={() => { const found = audioArticles.findIndex(a => a.slug === q.slug); if (found >= 0) { play(found); setShowQueue(false); } }}
              >
                <span className="text-[0.55rem] font-bold opacity-30 w-5 shrink-0" style={{ color: 'var(--color-text-muted)' }}>{q.number}</span>
                <span className="text-xs truncate flex-1" style={{ color: episode.slug === q.slug ? 'var(--color-accent)' : 'var(--color-text)' }}>{q.title}</span>
                <button onClick={(e) => { e.stopPropagation(); removeFromQueue(q.slug); }} className="shrink-0 text-lg leading-none opacity-40 hover:opacity-100" style={{ color: 'var(--color-warn)' }}>&times;</button>
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
}
