import { Link } from 'react-router-dom';
import articles from '../data/articles';
import HeroSection from '../components/home/HeroSection';

const lensTags = ['Scarcity', 'Attention Economy', 'Coordination Failure', 'Labor Protection', 'Externalities', 'Creator Economy'];

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
            All Stories &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* First story - larger */}
          <Link to={`/article/${moreStories[0].slug}`} className="md:col-span-3 group block">
            <div className="aspect-[16/9] overflow-hidden mb-5" style={{ borderRadius: '3px', background: 'var(--color-bg-secondary)' }}>
              {moreStories[0].media?.images?.[0]?.src ? (
                <img src={moreStories[0].media.images[0].src} alt="" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" loading="lazy" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-7xl font-display font-bold opacity-5">{moreStories[0].number}</div>
              )}
            </div>
            <span className="text-[0.55rem] font-semibold tracking-[0.08em] uppercase px-2 py-0.5 rounded-full mb-3 inline-block" style={{ background: 'var(--color-accent-dim)', color: 'var(--color-accent)' }}>{moreStories[0].conceptEn}</span>
            <h3 className="text-lg md:text-xl font-display font-medium leading-snug group-hover:text-[var(--color-accent)] transition-colors line-clamp-2" style={{ color: 'var(--color-text)' }}>{moreStories[0].titleEn}</h3>
            <p className="text-sm leading-relaxed mt-2 opacity-50 line-clamp-2" style={{ color: 'var(--color-text-secondary)' }}>{moreStories[0].summary}</p>
          </Link>

          {/* Remaining stories */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {moreStories.slice(1).map((a) => (
              <Link key={a.slug} to={`/article/${a.slug}`} className="group flex gap-4">
                <div className="w-20 h-20 shrink-0 overflow-hidden" style={{ borderRadius: '3px', background: 'var(--color-bg-secondary)' }}>
                  {a.media?.images?.[0]?.src ? (
                    <img src={a.media.images[0].src} alt="" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-lg font-display font-bold opacity-10">{a.number}</div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[0.6rem] font-bold opacity-30" style={{ color: 'var(--color-text-muted)' }}>{a.number}</span>
                    <span className="text-[0.5rem] font-semibold tracking-[0.08em] uppercase px-1.5 py-0.5 rounded-full" style={{ background: 'var(--color-accent-dim)', color: 'var(--color-accent)' }}>{a.conceptEn}</span>
                  </div>
                  <h3 className="text-sm font-display font-medium leading-snug group-hover:text-[var(--color-accent)] transition-colors line-clamp-2" style={{ color: 'var(--color-text)' }}>{a.titleEn}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Notes — full-width with concept tags */}
      <section className="py-20 border-y" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}>
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-4 block">Lab Notes</span>
            <h3 className="text-2xl md:text-3xl font-display font-medium mb-4" style={{ color: 'var(--color-text)' }}>
              We don&apos;t just report. We explain.
            </h3>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Every story is anchored with one core economic concept — no jargon, just clarity.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {lensTags.map(tag => (
                <span key={tag} className="text-[0.6rem] font-semibold tracking-[0.06em] uppercase px-3 py-1.5 rounded-full border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)', background: 'rgba(255,255,255,0.5)' }}>{tag}</span>
              ))}
            </div>
            <Link to="/lab-notes" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all hover:opacity-80" style={{ background: 'var(--color-accent)', color: '#fff' }}>
              Browse All Lenses <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About + Audio */}
      <section className="container-main py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/about" className="group p-8 md:p-10 border transition-all duration-300 hover:border-[var(--color-accent)] hover:-translate-y-1" style={{ background: 'rgba(255,255,255,0.5)', borderColor: 'var(--color-border)', borderRadius: '3px' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-5 text-xs font-bold" style={{ background: 'var(--color-accent)', color: '#fff' }}>?</div>
            <h3 className="text-xl font-display font-medium mb-2" style={{ color: 'var(--color-text)' }}>About Us</h3>
            <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--color-text-muted)' }}>No Filter Lab</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Six university students. One mission: use economics to decode the hidden costs, incentives, and trade-offs behind the news.
            </p>
            <span className="text-xs font-semibold tracking-wider uppercase group-hover:opacity-70" style={{ color: 'var(--color-accent)' }}>Learn More &rarr;</span>
          </Link>

          <Link to="/frequency" className="group p-8 md:p-10 border transition-all duration-300 hover:border-[var(--color-accent)] hover:-translate-y-1" style={{ background: 'rgba(255,255,255,0.5)', borderColor: 'var(--color-border)', borderRadius: '3px' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-5 text-xs font-bold" style={{ background: 'var(--color-accent)', color: '#fff' }}>&#9654;</div>
            <h3 className="text-xl font-display font-medium mb-2" style={{ color: 'var(--color-text)' }}>No Filter Audio</h3>
            <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--color-text-muted)' }}>Podcast</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Six episodes. Bilingual lyrics. Economics that you can hear — with synced subtitles.
            </p>
            <span className="text-xs font-semibold tracking-wider uppercase group-hover:opacity-70" style={{ color: 'var(--color-accent)' }}>Open Audio &rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
