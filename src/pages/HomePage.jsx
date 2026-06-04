import { Link } from 'react-router-dom';
import articles from '../data/articles';
import HeroSection from '../components/home/HeroSection';
import HeadlineStory from '../components/home/HeadlineStory';
import StoryCard from '../components/stories/StoryCard';

export default function HomePage() {
  const headline = articles[0];
  const topThree = articles.slice(1, 4);

  return (
    <div className="page-enter">
      <HeroSection />
      <HeadlineStory article={headline} />

      <section className="container-main pb-16">
        <p className="section-label mb-8 dark-bright-gold" style={{ color: 'var(--color-text)' }}>More Stories</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topThree.map((a, i) => (
            <StoryCard key={a.slug} article={a} index={i} />
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <Link
            to="/stories"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-colors hover:opacity-70"
            style={{ color: 'var(--color-accent)' }}
          >
            All Stories &rarr;
          </Link>
        </div>
      </section>

      <section className="container-main pb-16">
        <div className="p-10 md:p-14 border" style={{ background: 'rgba(255,255,255,0.85)', borderColor: 'var(--color-border)' }}>
          <span className="section-label mb-3 block">Lab Notes</span>
          <h3 className="text-2xl md:text-3xl font-display font-medium mb-3" style={{ color: 'var(--color-text)' }}>We don&apos;t just report. We explain.</h3>
          <p className="text-base leading-relaxed max-w-xl mb-6" style={{ color: 'var(--color-text-secondary)' }}>
            Every story includes a No Filter Lens &mdash; an economics concept that reveals the incentives, costs, and hidden mechanics behind the news. Six lenses for clearer thinking.
          </p>
          <a href="/#/lab-notes" className="accent-link">Browse Lab Notes &rarr;</a>
        </div>
      </section>

      <section className="container-main pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 p-10 md:p-14 border" style={{ background: 'rgba(255,255,255,0.75)', borderColor: 'var(--color-border)' }}>
            <span className="section-label mb-3 block">About Us</span>
            <h3 className="text-2xl md:text-3xl font-display font-medium mb-2" style={{ color: 'var(--color-text)' }}>No Filter Lab</h3>
            <p className="text-sm font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--color-text-muted)' }}>无滤镜 Lab</p>
            <p className="text-lg font-display italic mb-4" style={{ color: 'var(--color-accent)' }}>
              Clear stories. Hidden incentives.
            </p>
            <p className="text-base leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
              Seeing the costs, incentives, and trade-offs behind trending topics. We are an explanatory journalism project built by a team of six university students. Our mission: use economics to decode the hidden costs, incentives, and trade-offs behind the news you read every day.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-text-muted)' }}>
              From concert consumption to stray animal rescue, every story is anchored with one core economic concept — no jargon, just clarity. Six lenses for clearer thinking.
            </p>
            <Link to="/about" className="accent-link">Learn More About Us &rarr;</Link>
          </div>
          <div className="p-10 md:p-14 border flex flex-col justify-center" style={{ background: 'rgba(255,255,255,0.75)', borderColor: 'var(--color-border)' }}>
            <span className="section-label mb-3 block">Credits</span>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Six members. Six stories. Six core economic concepts. A flat collaboration model with no editor-in-chief.
            </p>
            <Link to="/credits" className="accent-link">Meet the Team &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
