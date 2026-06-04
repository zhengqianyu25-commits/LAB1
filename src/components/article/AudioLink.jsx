import { useNavigate } from 'react-router-dom';
import { useAudio, audioArticles } from '../../context/AudioContext';

export default function AudioLink({ article }) {
  const { play } = useAudio();
  const navigate = useNavigate();
  const idx = audioArticles.findIndex(a => a.slug === article.slug);
  if (idx === -1) return null;

  return (
    <section className="container-main py-4">
      <div className="article-width">
        <div className="flex items-center gap-3 p-5 border rounded-sm" style={{ background: 'var(--color-accent-dim)', borderColor: 'var(--color-border)' }}>
          <button
            onClick={() => play(idx)}
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform hover:scale-110"
            style={{ background: 'var(--color-accent)' }}
            aria-label="Play audio"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
          </button>
          <div className="flex-1 min-w-0">
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--color-accent)' }}>FM &middot; Audio Story</span>
            <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>Listen to this story with synced subtitles</p>
          </div>
          <button
            onClick={() => navigate(`/listen/${idx}?from=${article.slug}`)}
            className="shrink-0 px-3 py-1.5 text-[0.6rem] font-semibold tracking-wider uppercase rounded-full border transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
          >
            Subtitles &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
