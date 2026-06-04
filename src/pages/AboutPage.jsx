import SectionTitle from '../components/common/SectionTitle';

export default function AboutPage() {
  return (
    <div className="page-enter">
      <section className="container-main pt-12 md:pt-16 pb-8">
        <SectionTitle subtitle="About">No Filter Lab</SectionTitle>

        {/* Name & Slogan */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase mb-1" style={{ color: 'var(--color-text-muted)' }}>No Filter Lab | 无滤镜 Lab</p>
          <p className="text-lg md:text-xl font-display font-medium leading-relaxed mb-2" style={{ color: 'var(--color-text)' }}>
            Clear stories. Hidden incentives.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Seeing the costs, incentives, and trade-offs behind trending topics.
          </p>
        </div>

        {/* Our Story */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-lg font-display font-medium mb-4" style={{ color: 'var(--color-text)' }}>Our Story</h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            <p>In an era where information overload and emotionally charged communication have become the norm, No Filter Lab was born.</p>
            <p>We noticed that young people are surrounded daily by trending topics, short videos, and algorithmic feeds, yet they are often only told "what happened" without understanding "why it happened this way." Who benefits? Who bears the costs? What rules created the problem? And what choices might change the outcome?</p>
            <p>We believe economics provides a powerful and practical analytical lens — not just academic theory, but a way to see through scarcity, information asymmetry, attention economy, externalities, incentive structures, and cost shifting.</p>
            <p>No Filter Lab was founded by a group of creators passionate about youth culture and public issues. We set out to build an explanatory fusion news website. We do not write dense economics papers. Instead, we use clear journalistic writing, multimedia storytelling, and accessible explanatory frameworks so that 18–25-year-old Chinese university students can understand the operating logic behind events in just three minutes.</p>
            <p>We focus on six themes closely connected to young people's lives: Concert consumption, urban cultural tourism, female body image anxiety, rights of minor actors, stray animal rescue, and student original film & TV creation. Through these topics, we hope readers move beyond knowing "what" to understanding "why," and begin to consider possible paths for change.</p>
            <p>No Filter Lab aims to be a "filter remover" for young readers — making a complex world understandable and turning clear, rational thinking into a daily habit.</p>
          </div>
        </div>

        {/* Editorial Philosophy */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-lg font-display font-medium mb-6" style={{ color: 'var(--color-text)' }}>Our Editorial Philosophy</h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            <p><strong style={{ color: 'var(--color-text)' }}>Clarity & Accessibility.</strong> We pursue the goal of being "understood in three minutes." We reject academic jargon, emotional manipulation, and oversimplification. Every article uses storytelling and multimedia support so readers can quickly grasp the core logic while preserving the real complexity of the world.</p>
            <p><strong style={{ color: 'var(--color-text)' }}>Economic Lens.</strong> Economics is not our branding — it is our way of thinking. We use it to reveal how incentives shape behavior, how costs are shifted, and how rules produce unintended consequences. Concepts such as attention economy, creator economy, and labor protection naturally emerge through concrete cases, helping readers build systematic understanding.</p>
            <p><strong style={{ color: 'var(--color-text)' }}>Youth Resonance.</strong> Our content is always centered on our core audience: university students interested in social trends, consumer culture, gender issues, public welfare, and creative ecosystems. We connect big-picture concepts with personal experiences, showing readers how systems affect them and what real room for action exists.</p>
            <p><strong style={{ color: 'var(--color-text)' }}>Fact-Based & Balanced.</strong> All explanations are grounded in public data, reliable cases, and multi-stakeholder perspectives. We acknowledge complexity and uncertainty but insist on providing evidence-based analysis rather than single narratives or extreme conclusions.</p>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-display font-medium mb-6" style={{ color: 'var(--color-text)' }}>Our Values</h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            <p><strong style={{ color: 'var(--color-text)' }}>Independence.</strong> We are not swayed by traffic algorithms, commercial interests, viral narratives, or single ideologies. "No filter" means staying true to exploring real mechanisms and encouraging readers to question surface appearances and think independently — rather than passively accept or take emotional sides.</p>
            <p><strong style={{ color: 'var(--color-text)' }}>Integrity.</strong> We anchor in facts and build trust through rigorous logic and multi-angle verification. When presenting costs, incentives, and externalities, we transparently show data sources, assumptions, and limitations so readers can judge and extend their own thinking.</p>
            <p><strong style={{ color: 'var(--color-text)' }}>Excellence & Empowerment.</strong> We strive for the highest standards of clear expression and intellectual depth. Our content aims to be sharp yet approachable. Ultimately, we want to empower young readers — not only to understand the world, but to navigate choices more effectively in a reality full of trade-offs and incentives.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
