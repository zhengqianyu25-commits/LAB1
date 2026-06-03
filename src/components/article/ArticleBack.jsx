import { Link } from 'react-router-dom';

export default function ArticleBack() {
  return (
    <Link to="/stories" className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.12em] uppercase transition-opacity hover:opacity-60" style={{ color: 'var(--color-text-muted)' }}>
      <span>&larr;</span> All Stories
    </Link>
  );
}
