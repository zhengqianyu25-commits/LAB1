import { useNavigate } from 'react-router-dom';
import { useAudio, audioArticles } from '../../context/AudioContext';

export default function MiniPlayer() {
  const { episode, playing, play, pause } = useAudio();
  const navigate = useNavigate();
  if (!episode) return null;

  const idx = audioArticles.indexOf(episode);
  const img = episode.media?.images?.[0]?.src;
  const toggle = () => playing ? pause() : play(idx);

  return (
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
      </div>
    </div>
  );
}
