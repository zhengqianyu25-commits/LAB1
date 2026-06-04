import SectionTitle from '../components/common/SectionTitle';

export default function AboutPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="container-main pt-12 md:pt-16 pb-8 text-center">
        <p className="section-label mb-3">About</p>
        <h1 className="text-3xl md:text-5xl font-display font-medium mb-4" style={{ color: 'var(--color-text)' }}>No Filter Lab</h1>
        <p className="text-sm font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--color-text-muted)' }}>无滤镜 Lab</p>
        <p className="text-lg md:text-2xl font-display font-medium italic max-w-2xl mx-auto mb-3" style={{ color: 'var(--color-accent)' }}>
          Clear stories. Hidden incentives.
        </p>
        <p className="text-sm max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          Seeing the costs, incentives, and trade-offs behind trending topics.
        </p>
      </section>

      {/* Mission */}
      <section className="py-12 border-y" style={{ borderColor: 'var(--color-border)', background: 'var(--color-accent-dim)' }}>
        <div className="container-main max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
            We are an explanatory journalism project built by a team of six university students. Our mission: use economics to decode the hidden costs, incentives, and trade-offs behind the news you read every day.
          </p>
          <p className="text-sm mt-3" style={{ color: 'var(--color-text-muted)' }}>
            From concert ticket scalping to stray animal rescue, every story is anchored with one core economic concept — no jargon, just clarity.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container-main py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-display font-medium mb-8 text-center" style={{ color: 'var(--color-text)' }}>Our Story</h2>
          <div className="space-y-5 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            <p>In an era where information overload and emotionally charged communication have become the norm, No Filter Lab was born.</p>
            <p>We noticed that young people are surrounded daily by trending topics, short videos, and algorithmic feeds, yet they are often only told "what happened" without understanding "why it happened this way." Who benefits? Who bears the costs? What rules created the problem? And what choices might change the outcome?</p>
            <p>We believe economics provides a powerful and practical analytical lens — not just academic theory, but a way to see through scarcity, information asymmetry, attention economy, externalities, incentive structures, and cost shifting.</p>
            <p>No Filter Lab was founded by a group of creators passionate about youth culture and public issues. We set out to build an explanatory fusion news website. We do not write dense economics papers. Instead, we use clear journalistic writing, multimedia storytelling, and accessible explanatory frameworks so that 18–25-year-old Chinese university students can understand the operating logic behind events in just three minutes.</p>
            <p>We focus on six themes closely connected to young people's lives: Concert consumption, urban cultural tourism, female body image anxiety, rights of minor actors, stray animal rescue, and student original film & TV creation. Through these topics, we hope readers move beyond knowing "what" to understanding "why," and begin to consider possible paths for change.</p>
            <p>No Filter Lab aims to be a "filter remover" for young readers — making a complex world understandable and turning clear, rational thinking into a daily habit.</p>
          </div>
        </div>
      </section>

      {/* Editorial Philosophy */}
      <section className="py-16" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container-main max-w-4xl mx-auto">
          <h2 className="text-xl font-display font-medium mb-10 text-center" style={{ color: 'var(--color-text)' }}>Our Editorial Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="p-6 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'rgba(255,255,255,0.7)' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center mb-3 text-xs font-bold" style={{ background: 'var(--color-accent)', color: '#fff' }}>01</div>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-text)' }}>Clarity & Accessibility</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>We pursue the goal of being "understood in three minutes." We reject academic jargon, emotional manipulation, and oversimplification. Every article uses storytelling and multimedia support so readers can quickly grasp the core logic while preserving the real complexity of the world.</p>
            </div>
            <div className="p-6 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'rgba(255,255,255,0.7)' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center mb-3 text-xs font-bold" style={{ background: 'var(--color-accent)', color: '#fff' }}>02</div>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-text)' }}>Economic Lens</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>Economics is not our branding — it is our way of thinking. We use it to reveal how incentives shape behavior, how costs are shifted, and how rules produce unintended consequences. Concepts such as attention economy, creator economy, and labor protection naturally emerge through concrete cases.</p>
            </div>
            <div className="p-6 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'rgba(255,255,255,0.7)' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center mb-3 text-xs font-bold" style={{ background: 'var(--color-accent)', color: '#fff' }}>03</div>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-text)' }}>Youth Resonance</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>Our content is always centered on our core audience: university students interested in social trends, consumer culture, gender issues, public welfare, and creative ecosystems. We connect big-picture concepts with personal experiences.</p>
            </div>
            <div className="p-6 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'rgba(255,255,255,0.7)' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center mb-3 text-xs font-bold" style={{ background: 'var(--color-accent)', color: '#fff' }}>04</div>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-text)' }}>Fact-Based & Balanced</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>All explanations are grounded in public data, reliable cases, and multi-stakeholder perspectives. We acknowledge complexity and uncertainty but insist on providing evidence-based analysis rather than single narratives or extreme conclusions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-main py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-display font-medium mb-10 text-center" style={{ color: 'var(--color-text)' }}>Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-8 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
              <div className="text-3xl mb-4" style={{ color: 'var(--color-accent)' }}>&loz;</div>
              <h3 className="text-sm font-display font-medium mb-3" style={{ color: 'var(--color-text)' }}>Independence</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>We are not swayed by traffic algorithms, commercial interests, viral narratives, or single ideologies. "No filter" means staying true to exploring real mechanisms and encouraging readers to question surface appearances and think independently.</p>
            </div>
            <div className="text-center p-8 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
              <div className="text-3xl mb-4" style={{ color: 'var(--color-accent)' }}>&loz;</div>
              <h3 className="text-sm font-display font-medium mb-3" style={{ color: 'var(--color-text)' }}>Integrity</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>We anchor in facts and build trust through rigorous logic and multi-angle verification. When presenting costs, incentives, and externalities, we transparently show data sources, assumptions, and limitations.</p>
            </div>
            <div className="text-center p-8 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
              <div className="text-3xl mb-4" style={{ color: 'var(--color-accent)' }}>&loz;</div>
              <h3 className="text-sm font-display font-medium mb-3" style={{ color: 'var(--color-text)' }}>Excellence & Empowerment</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>We strive for the highest standards of clear expression and intellectual depth. Ultimately, we want to empower young readers to navigate choices more effectively in a reality full of trade-offs and incentives.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
