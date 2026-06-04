import { Link } from 'react-router-dom';
import { audioArticles } from '../../context/AudioContext';

export default function AudioLink({ article }) {
  const idx = audioArticles.findIndex(a => a.slug === article.slug);
  if (idx === -1) return null;

  return (
    <section className="container-main py-4">
      <div className="article-width">
        <Link
          to={`/listen/${idx}`}
          className="flex items-center gap-3 p-5 border rounded-sm transition-all duration-300 hover:border-[var(--color-accent)] group"
          style={{ background: 'var(--color-accent-dim)', borderColor: 'var(--color-border)' }}
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--color-accent)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
          </div>
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--color-accent)' }}>FM &middot; Audio Story</span>
            <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>Listen to this story with synced subtitles &rarr;</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
