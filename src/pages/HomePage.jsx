import { Link } from 'react-router-dom';
import articles from '../data/articles';
import HeroSection from '../components/home/HeroSection';
export default function HomePage() {
  const moreStories = articles.slice(1, 4);

  return (
    <div className="page-enter">
      <HeroSection />

      {/* More Stories */}
      <section className="container-main pb-12">
        <div className="flex items-center justify-between mb-6">
          <span className="section-label">More Stories</span>
          <Link to="/stories" className="text-xs font-semibold tracking-wider uppercase hover:opacity-70" style={{ color: 'var(--color-accent)' }}>
            All Stories &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {moreStories.map((a, i) => {
            const img = a.media?.images?.[0]?.src;
            return (
              <Link
                key={a.slug}
                to={`/article/${a.slug}`}
                className="group border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'rgba(255,255,255,0.7)' }}
              >
                <div className="aspect-[16/10] overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
                  {img && <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[0.55rem] font-bold tracking-[0.12em] uppercase opacity-40" style={{ color: 'var(--color-text-muted)' }}>
                      {a.number}
                    </span>
                    <span className="text-[0.55rem] font-semibold tracking-[0.08em] uppercase" style={{ color: 'var(--color-accent)' }}>
                      {a.conceptEn}
                    </span>
                  </div>
                  <h3 className="text-sm font-display font-medium leading-snug line-clamp-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--color-text)' }}>
                    {a.titleEn}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Lab Notes + About */}
      <section className="container-main pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-8 md:p-10 border" style={{ background: 'rgba(255,255,255,0.75)', borderColor: 'var(--color-border)', borderRadius: '2px' }}>
            <span className="section-label mb-3 block">Lab Notes</span>
            <h3 className="text-xl md:text-2xl font-display font-medium mb-3" style={{ color: 'var(--color-text)' }}>We don&apos;t just report. We explain.</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-secondary)' }}>
              Every story includes a No Filter Lens — an economics concept that reveals the incentives, costs, and hidden mechanics behind the news. Six lenses for clearer thinking.
            </p>
            <Link to="/lab-notes" className="accent-link">Browse Lab Notes &rarr;</Link>
          </div>

          <div className="p-8 md:p-10 border" style={{ background: 'rgba(255,255,255,0.75)', borderColor: 'var(--color-border)', borderRadius: '2px' }}>
            <span className="section-label mb-3 block">About Us</span>
            <h3 className="text-xl md:text-2xl font-display font-medium mb-2" style={{ color: 'var(--color-text)' }}>No Filter Lab</h3>
            <p className="text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>无滤镜 Lab</p>
            <p className="text-sm font-display italic mb-3" style={{ color: 'var(--color-accent)' }}>
              Clear stories. Hidden incentives.
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-secondary)' }}>
              We are an explanatory journalism project built by a team of six university students. Our mission: use economics to decode the hidden costs, incentives, and trade-offs behind the news.
            </p>
            <Link to="/about" className="accent-link">Learn More &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
