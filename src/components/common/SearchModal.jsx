import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import articles from '../../data/articles';

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const q = query.toLowerCase();
    const filtered = articles.filter(a =>
      a.titleEn.toLowerCase().includes(q) ||
      a.titleZh.toLowerCase().includes(q) ||
      a.conceptEn.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.body.some(p => typeof p === 'string' && p.toLowerCase().includes(q))
    );
    setResults(filtered);
  }, [query]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center pt-24 px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-xl rounded-sm border shadow-2xl overflow-hidden animate-in"
        style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search articles, concepts, keywords..."
            className="flex-1 bg-transparent text-base outline-none placeholder:opacity-40"
            style={{ color: 'var(--color-text)' }}
          />
          <button onClick={onClose} className="text-2xl opacity-40 hover:opacity-80 transition-opacity" style={{ color: 'var(--color-text-muted)' }}>&times;</button>
        </div>

        <div className="max-h-80 overflow-y-auto">
          {query.trim() && results.length === 0 && (
            <p className="px-5 py-8 text-center text-sm opacity-50" style={{ color: 'var(--color-text-muted)' }}>No results found.</p>
          )}
          {results.map((a, i) => (
            <Link
              key={a.slug}
              to={`/article/${a.slug}`}
              onClick={onClose}
              className={`flex items-start gap-4 px-5 py-4 transition-colors hover:bg-[var(--color-bg-secondary)] ${i > 0 ? 'border-t' : ''}`}
              style={{ borderColor: 'var(--color-border)' }}
            >
              <span className="text-xs font-bold mt-0.5 shrink-0 opacity-30" style={{ color: 'var(--color-text-muted)' }}>{a.number}</span>
              <div className="min-w-0">
                <p className="text-sm font-medium font-display leading-snug" style={{ color: 'var(--color-text)' }}>{a.titleEn}</p>
                <p className="text-xs mt-0.5 opacity-50 truncate" style={{ color: 'var(--color-text-muted)' }}>{a.conceptEn}</p>
              </div>
            </Link>
          ))}
          {!query.trim() && (
            <div className="px-5 py-6 text-center">
              <p className="text-xs opacity-40" style={{ color: 'var(--color-text-muted)' }}>Type to search across all 6 articles</p>
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {articles.map(a => (
                  <span key={a.slug} className="text-[0.65rem] font-semibold tracking-wider uppercase px-2 py-1 rounded-sm border opacity-50" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>{a.conceptEn}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
