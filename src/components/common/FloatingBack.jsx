import { useLocation, Link } from 'react-router-dom';

export default function FloatingBack() {
  const { pathname, search } = useLocation();

  let backTo = '/';
  let label = '';

  if (pathname.startsWith('/article/')) {
    backTo = '/stories'; label = 'Stories';
  } else if (pathname.startsWith('/listen/')) {
    const params = new URLSearchParams(search);
    const fromSlug = params.get('from');
    backTo = fromSlug ? `/article/${fromSlug}` : '/frequency';
    label = fromSlug ? 'Story' : 'FM';
  }

  if (!label) return null;

  return (
    <div className="fixed top-[4.5rem] left-4 md:left-8 z-40">
      <Link
        to={backTo}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-sm text-[0.65rem] font-semibold tracking-[0.1em] uppercase transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-md"
        style={{ background: 'rgba(255,255,255,0.9)', borderColor: 'var(--color-border)', color: 'var(--color-text-muted)', backdropFilter: 'blur(8px)' }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
        {label}
      </Link>
    </div>
  );
}
