import { useState } from 'react';
import { Link } from 'react-router-dom';
import articles from '../../data/articles';

function getRelated(current, count = 2) {
  return articles
    .filter(a => a.slug !== current.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export default function RelatedStories({ article }) {
  const [copied, setCopied] = useState(false);
  const related = getRelated(article, 2);

  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };

  return (
    <section className="container-main py-10 animate-in" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="article-width">
        <div className="flex items-center justify-between mb-6">
          <span className="section-label">Related Stories</span>
          <button
            onClick={copyLink}
            className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase transition-colors hover:opacity-70"
            style={{ color: copied ? 'var(--color-accent)' : 'var(--color-text-muted)' }}
          >
            {copied ? 'Link Copied!' : 'Copy Link'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {related.map(r => (
            <Link
              key={r.slug}
              to={`/article/${r.slug}`}
              className="group flex gap-4 p-4 border transition-all duration-300 hover:border-[var(--color-accent)]"
              style={{ borderColor: 'var(--color-border)', background: '#1E1E1C', borderRadius: '2px' }}
            >
              <div className="w-20 h-16 shrink-0 overflow-hidden rounded-sm" style={{ background: 'var(--color-bg-secondary)' }}>
                {r.media?.images?.[0] && (
                  <img src={r.media.images[0].src} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                )}
              </div>
              <div className="min-w-0">
                <span className="text-[0.55rem] font-bold tracking-[0.12em] uppercase" style={{ color: 'var(--color-accent)' }}>{r.conceptEn}</span>
                <h4 className="text-sm font-display font-medium leading-snug mt-0.5 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--color-text)' }}>{r.titleEn}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
