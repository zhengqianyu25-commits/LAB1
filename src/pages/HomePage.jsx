import { Link } from 'react-router-dom';
import articles from '../data/articles';
import HeroSection from '../components/home/HeroSection';

export default function HomePage() {
  const moreStories = articles.slice(1, 4);

  return (
    <div className="page-enter">
      <HeroSection />

      {/* More Stories */}
      <section className="container-main pt-20 pb-10">
        <div className="flex items-end justify-between mb-10">
          <span className="section-label">More Stories</span>
          <Link to="/stories" className="text-xs font-semibold tracking-wider uppercase hover:opacity-70" style={{ color: 'var(--color-accent)' }}>
            View All &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t" style={{ borderColor: 'var(--color-border)' }}>
          {moreStories.map((a, i) => {
            const img = a.media?.images?.[0]?.src;
            return (
              <Link key={a.slug} to={`/article/${a.slug}`} className={`group flex flex-col border-b md:border-b-0 border-r-0 ${i < 2 ? 'md:border-r' : ''} p-6 md:p-8 transition-colors hover:bg-[var(--color-bg-secondary)]`} style={{ borderColor: 'var(--color-border)' }}>
                <div className="aspect-[3/2] overflow-hidden mb-5" style={{ borderRadius: '2px', background: 'var(--color-bg-secondary)' }}>
                  {img ? (
                    <img src={img} alt="" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl font-display font-bold opacity-5">{a.number}</div>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[0.65rem] font-bold opacity-25" style={{ color: 'var(--color-text-muted)' }}>{a.number}</span>
                  <span className="text-[0.5rem] font-semibold tracking-[0.08em] uppercase px-2 py-0.5 rounded-full" style={{ background: 'var(--color-accent-dim)', color: 'var(--color-accent)' }}>{a.conceptEn}</span>
                  <span className="text-[0.5rem] font-semibold tracking-wider uppercase opacity-25 ml-auto" style={{ color: 'var(--color-text-muted)' }}>{a.readTime}</span>
                </div>
                <h3 className="text-base md:text-lg font-display font-medium leading-snug group-hover:text-[var(--color-accent)] transition-colors line-clamp-3 mb-auto" style={{ color: 'var(--color-text)' }}>
                  {a.titleEn}
                </h3>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Lab Notes */}
      <section className="py-16 border-y" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}>
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-3 block">Lab Notes</span>
            <h3 className="text-2xl md:text-3xl font-display font-medium mb-3" style={{ color: 'var(--color-text)' }}>
              We don&apos;t just report. We explain.
            </h3>
            <p className="text-sm md:text-base leading-relaxed mb-2 max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Every story is anchored with one core economic concept — no jargon, just clarity.
            </p>
            <p className="text-xs opacity-50 mb-8" style={{ color: 'var(--color-text-muted)' }}>
              Scarcity &middot; Attention Economy &middot; Coordination Failure &middot; Labor Protection &middot; Externalities &middot; Creator Economy
            </p>
            <Link to="/lab-notes" className="accent-link text-sm">Browse All Lenses &rarr;</Link>
          </div>
        </div>
      </section>

      {/* About + FM */}
      <section className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 md:p-10 border" style={{ background: 'rgba(255,255,255,0.6)', borderColor: 'var(--color-border)', borderRadius: '2px' }}>
            <span className="section-label mb-3 block">About Us</span>
            <h3 className="text-xl md:text-2xl font-display font-medium mb-2" style={{ color: 'var(--color-text)' }}>No Filter Lab</h3>
            <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--color-text-muted)' }}>无滤镜 Lab</p>
            <p className="text-sm font-display italic mb-3" style={{ color: 'var(--color-accent)' }}>
              Clear stories. Hidden incentives.
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-secondary)' }}>
              Six university students. One mission: use economics to decode the hidden costs, incentives, and trade-offs behind the news you read every day.
            </p>
            <Link to="/about" className="accent-link">Learn More &rarr;</Link>
          </div>

          <div className="p-8 md:p-10 border" style={{ background: 'rgba(255,255,255,0.6)', borderColor: 'var(--color-border)', borderRadius: '2px' }}>
            <span className="section-label mb-3 block">No Filter Audio</span>
            <h3 className="text-xl md:text-2xl font-display font-medium mb-2" style={{ color: 'var(--color-text)' }}>Listen to the Stories</h3>
            <p className="text-sm font-display italic mb-3" style={{ color: 'var(--color-accent)' }}>
              Audio stories with synced subtitles.
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-secondary)' }}>
              Six episodes. Bilingual lyrics. Economics that you can hear — with a click. Dive into the audio experience.
            </p>
            <Link to="/frequency" className="accent-link">Open Audio &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
