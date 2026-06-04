import SectionTitle from '../components/common/SectionTitle';

const photos = [
  { src: '/media/lab-notes/scarcity-3.png', caption: 'The dissipation of the pandemic has brought music, shouting and agitation back this summer.' },
  { src: '/media/lab-notes/scarcity-4.png', caption: 'However, a large number of fans who did not have tickets were plagued by high-priced scalper tickets.' },
  { src: '/media/lab-notes/scarcity-5.png', caption: 'Many fans believed that scalpers were the key to making it so difficult to grab tickets, so they began to shout slogans to declare war on scalpers. Outside the concert venue, fans are still in the midst of fierce quarrels with scalpers, and the scene security is also in chaos.' },
  { src: '/media/lab-notes/scarcity-6.png', caption: 'Fans without tickets listened to the song and cheered outside the Bird\'s Nest, where display screens and lights could be seen.' },
];

export default function AboutPage() {
  return (
    <div className="page-enter">
      <section className="container-main pt-12 md:pt-16 pb-8">
        <SectionTitle subtitle="About">No Filter Lab</SectionTitle>

        {/* Hero */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg md:text-xl font-display font-medium leading-relaxed mb-4" style={{ color: 'var(--color-text)' }}>
            Clear stories. Hidden incentives.
          </p>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Seeing the costs, incentives, and trade-offs behind trending topics.
          </p>
        </div>

        {/* Our Story */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-lg font-display font-medium mb-4" style={{ color: 'var(--color-text)' }}>Our Story</h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
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

          <div className="space-y-6">
            <div className="p-5 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-accent)' }}>Clarity & Accessibility</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>We pursue the goal of being "understood in three minutes." We reject academic jargon, emotional manipulation, and oversimplification. Every article uses storytelling and multimedia support so readers can quickly grasp the core logic while preserving the real complexity of the world.</p>
            </div>

            <div className="p-5 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-accent)' }}>Economic Lens</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>Economics is not our branding — it is our way of thinking. We use it to reveal how incentives shape behavior, how costs are shifted, and how rules produce unintended consequences. Concepts such as attention economy, creator economy, and labor protection naturally emerge through concrete cases, helping readers build systematic understanding.</p>
            </div>

            <div className="p-5 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-accent)' }}>Youth Resonance</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>Our content is always centered on our core audience: university students interested in social trends, consumer culture, gender issues, public welfare, and creative ecosystems. We connect big-picture concepts with personal experiences, showing readers how systems affect them and what real room for action exists.</p>
            </div>

            <div className="p-5 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-accent)' }}>Fact-Based & Balanced</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>All explanations are grounded in public data, reliable cases, and multi-stakeholder perspectives. We acknowledge complexity and uncertainty but insist on providing evidence-based analysis rather than single narratives or extreme conclusions.</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-lg font-display font-medium mb-6" style={{ color: 'var(--color-text)' }}>Our Values</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-accent)' }}>Independence</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>We are not swayed by traffic algorithms, commercial interests, viral narratives, or single ideologies. "No filter" means staying true to exploring real mechanisms and encouraging readers to question surface appearances and think independently.</p>
            </div>

            <div className="p-5 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-accent)' }}>Integrity</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>We anchor in facts and build trust through rigorous logic and multi-angle verification. When presenting costs, incentives, and externalities, we transparently show data sources, assumptions, and limitations so readers can judge and extend their own thinking.</p>
            </div>

            <div className="p-5 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-accent)' }}>Excellence & Empowerment</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>We strive for the highest standards of clear expression and intellectual depth. Our content aims to be sharp yet approachable. Ultimately, we want to empower young readers — not only to understand the world, but to navigate choices more effectively in a reality full of trade-offs and incentives.</p>
            </div>
          </div>
        </div>

        {/* Photo gallery */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-lg font-display font-medium mb-6" style={{ color: 'var(--color-text)' }}>Photo Journal</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {photos.map((p, i) => (
              <div key={i} className="border overflow-hidden rounded-sm" style={{ borderColor: 'var(--color-border)' }}>
                <img src={p.src} alt="" className="w-full h-64 object-cover" loading="lazy" />
                <p className="px-4 py-3 text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)', background: 'var(--color-bg-secondary)' }}>{p.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
