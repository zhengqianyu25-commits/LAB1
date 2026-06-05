import { Link, useNavigate } from 'react-router-dom';
import articles from '../../data/articles';

const concepts = ['Scarcity', 'Attention Economy', 'Cost Control', 'Labor Protection', 'Externalities', 'Creator Economy'];

export default function Footer() {
  const navigate = useNavigate();

  const randomArticle = () => {
    const a = articles[Math.floor(Math.random() * articles.length)];
    navigate(`/article/${a.slug}`);
  };

  return (
    <footer className="border-t mt-24 pt-12 pb-8" style={{ borderColor: 'var(--color-border)' }}>
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <span className="text-base font-display font-medium dark-bright" style={{ color: 'var(--color-text)' }}>
              No Filter<span style={{ color: 'var(--color-accent)' }}> Lab</span>
            </span>
            <p className="mt-2 text-xs leading-relaxed opacity-60 dark-bright" style={{ color: 'var(--color-text-muted)' }}>
              An explanatory journalism project using economics to decode social news and youth culture. Six lenses for clearer thinking.
            </p>
          </div>

          <div>
            <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase opacity-40 mb-3 block">Explore</span>
            <div className="flex flex-col gap-2">
              <Link to="/stories" className="text-xs opacity-60 hover:opacity-100 transition-opacity dark-bright" style={{ color: 'var(--color-text-muted)' }}>All Stories</Link>
              <Link to="/frequency" className="text-xs opacity-60 hover:opacity-100 transition-opacity dark-bright" style={{ color: 'var(--color-text-muted)' }}>Audio</Link>
              <Link to="/about" className="text-xs opacity-60 hover:opacity-100 transition-opacity dark-bright" style={{ color: 'var(--color-text-muted)' }}>About Us</Link>
              <button
                onClick={randomArticle}
                className="text-xs text-left opacity-60 hover:opacity-100 transition-opacity dark-bright"
                style={{ color: 'var(--color-accent)' }}
              >
                Random Article &rarr;
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-2" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-[0.6rem] font-semibold tracking-wider uppercase opacity-30" style={{ color: 'var(--color-text-muted)' }}>
            Clear stories. Hidden incentives. &copy; {new Date().getFullYear()}
          </p>
          <p className="text-[0.6rem] opacity-30" style={{ color: 'var(--color-text-muted)' }}>
            We ask: who gains? Who pays? What changed?
          </p>
        </div>
      </div>
    </footer>
  );
}
