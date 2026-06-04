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
        {/* About Us */}
        <div className="text-center mb-16">
          <span className="section-label mb-3 block">About Us</span>
          <h3 className="text-2xl md:text-3xl font-display font-medium mb-3" style={{ color: 'var(--color-text)' }}>No Filter Lab</h3>
          <p className="text-sm font-semibold tracking-[0.15em] uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>无滤镜 Lab</p>
          <p className="text-lg md:text-xl font-display italic max-w-xl mx-auto mb-3" style={{ color: 'var(--color-accent)' }}>
            Clear stories. Hidden incentives.
          </p>
          <p className="text-sm max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Seeing the costs, incentives, and trade-offs behind trending topics.
          </p>
        </div>

        {/* Mission */}
        <div className="max-w-3xl mx-auto mb-16 p-8 text-center border" style={{ borderColor: 'var(--color-border)', background: 'var(--color-accent-dim)', borderRadius: '2px' }}>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
            We are an explanatory journalism project built by a team of six university students. Our mission: use economics to decode the hidden costs, incentives, and trade-offs behind the news you read every day.
          </p>
          <p className="text-sm mt-3" style={{ color: 'var(--color-text-muted)' }}>
            From concert ticket scalping to stray animal rescue, every story is anchored with one core economic concept — no jargon, just clarity.
          </p>
        </div>

        {/* Our Story */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-lg font-display font-medium mb-6 text-center" style={{ color: 'var(--color-text)' }}>Our Story</h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            <p>In an era where information overload and emotionally charged communication have become the norm, No Filter Lab was born.</p>
            <p>We noticed that young people are surrounded daily by trending topics, short videos, and algorithmic feeds, yet they are often only told "what happened" without understanding "why it happened this way." Who benefits? Who bears the costs? What rules created the problem? And what choices might change the outcome?</p>
            <p>No Filter Lab aims to be a "filter remover" for young readers — making a complex world understandable and turning clear, rational thinking into a daily habit.</p>
          </div>
        </div>

        {/* Editorial Philosophy */}
        <div className="mb-16">
          <h2 className="text-lg font-display font-medium mb-6 text-center" style={{ color: 'var(--color-text)' }}>Our Editorial Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="p-5 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'rgba(255,255,255,0.7)' }}>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-accent)' }}>Clarity & Accessibility</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>We pursue the goal of being "understood in three minutes." We reject academic jargon, emotional manipulation, and oversimplification.</p>
            </div>
            <div className="p-5 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'rgba(255,255,255,0.7)' }}>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-accent)' }}>Economic Lens</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>Economics is not our branding — it is our way of thinking. We use it to reveal how incentives shape behavior and how costs are shifted.</p>
            </div>
            <div className="p-5 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'rgba(255,255,255,0.7)' }}>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-accent)' }}>Youth Resonance</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>Our content is centered on university students interested in social trends, consumer culture, gender issues, and creative ecosystems.</p>
            </div>
            <div className="p-5 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'rgba(255,255,255,0.7)' }}>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-accent)' }}>Fact-Based & Balanced</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>All explanations are grounded in public data, reliable cases, and multi-stakeholder perspectives.</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-lg font-display font-medium mb-6 text-center" style={{ color: 'var(--color-text)' }}>Our Values</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-6 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-accent)' }}>Independence</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>"No filter" means exploring real mechanisms and encouraging independent thinking.</p>
            </div>
            <div className="text-center p-6 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-accent)' }}>Integrity</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>We anchor in facts and build trust through rigorous logic and multi-angle verification.</p>
            </div>
            <div className="text-center p-6 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-accent)' }}>Excellence & Empowerment</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>We want to empower young readers to navigate choices in a reality full of trade-offs and incentives.</p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center justify-center gap-8">
          <Link to="/about" className="accent-link">Full About Page &rarr;</Link>
          <Link to="/credits" className="accent-link">Meet the Team &rarr;</Link>
        </div>
      </section>
    </div>
  );
}
