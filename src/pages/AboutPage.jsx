import { Link } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';

export default function AboutPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="container-main pt-16 md:pt-24 pb-12 text-center">
        <span className="text-[0.6rem] font-bold tracking-[0.25em] uppercase opacity-40" style={{ color: 'var(--color-text-muted)' }}>About</span>
        <h1 className="text-4xl md:text-6xl font-display font-medium mt-4 mb-3" style={{ color: 'var(--color-text)' }}>No Filter Lab</h1>
        <p className="text-sm font-semibold tracking-[0.15em] uppercase mb-5" style={{ color: 'var(--color-text-muted)' }}>无滤镜 Lab</p>
        <p className="text-xl md:text-2xl font-display italic max-w-lg mx-auto mb-3 leading-relaxed" style={{ color: 'var(--color-accent)' }}>
          Clear stories. Hidden incentives.
        </p>
        <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          Seeing the costs, incentives, and trade-offs behind trending topics.
        </p>
      </section>

      {/* Story */}
      <section className="py-16 border-y" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}>
        <div className="container-main max-w-3xl mx-auto">
          <h2 className="text-lg font-display font-medium mb-8 text-center" style={{ color: 'var(--color-text)' }}>Our Story</h2>
          <div className="space-y-5 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            <p>In an era where information overload and emotionally charged communication have become the norm, No Filter Lab was born.</p>
            <p>We noticed that young people are surrounded daily by trending topics, short videos, and algorithmic feeds, yet they are often only told "what happened" without understanding "why it happened this way." Who benefits? Who bears the costs? What rules created the problem? And what choices might change the outcome?</p>
            <p>We believe economics provides a powerful and practical analytical lens — not just academic theory, but a way to see through scarcity, information asymmetry, attention economy, externalities, incentive structures, and cost shifting.</p>
            <p>No Filter Lab was founded by a group of creators passionate about youth culture and public issues. We set out to build an explanatory fusion news website. We do not write dense economics papers. Instead, we use clear journalistic writing, multimedia storytelling, and accessible explanatory frameworks so that 18–25-year-old Chinese university students can understand the operating logic behind events in just three minutes.</p>
            <p>We focus on six themes closely connected to young people's lives: Concert consumption, urban cultural tourism, female body image anxiety, rights of minor actors, stray animal rescue, and student original film & TV creation.</p>
            <p>No Filter Lab aims to be a "filter remover" for young readers — making a complex world understandable and turning clear, rational thinking into a daily habit.</p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container-main py-16">
        <h2 className="text-lg font-display font-medium mb-10 text-center" style={{ color: 'var(--color-text)' }}>Our Editorial Philosophy</h2>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {[
            { num: '01', title: 'Clarity & Accessibility', body: 'We pursue the goal of being "understood in three minutes." We reject academic jargon, emotional manipulation, and oversimplification. Every article uses storytelling and multimedia support so readers can quickly grasp the core logic while preserving the real complexity of the world.' },
            { num: '02', title: 'Economic Lens', body: 'Economics is not our branding — it is our way of thinking. We use it to reveal how incentives shape behavior, how costs are shifted, and how rules produce unintended consequences.' },
            { num: '03', title: 'Youth Resonance', body: 'Our content is always centered on our core audience: university students interested in social trends, consumer culture, gender issues, public welfare, and creative ecosystems. We connect big-picture concepts with personal experiences.' },
            { num: '04', title: 'Fact-Based & Balanced', body: 'All explanations are grounded in public data, reliable cases, and multi-stakeholder perspectives. We acknowledge complexity and uncertainty but insist on providing evidence-based analysis rather than single narratives or extreme conclusions.' },
          ].map((item, i) => (
            <div key={i} className="group p-6 border transition-all duration-300 hover:border-[var(--color-accent)]" style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'rgba(255,255,255,0.6)' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-display font-medium opacity-15">{item.num}</span>
                <h3 className="text-sm font-display font-medium" style={{ color: 'var(--color-text)' }}>{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 border-y" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}>
        <div className="container-main max-w-4xl mx-auto">
          <h2 className="text-lg font-display font-medium mb-10 text-center" style={{ color: 'var(--color-text)' }}>Our Values</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Independence', body: 'We are not swayed by traffic algorithms, commercial interests, viral narratives, or single ideologies. "No filter" means staying true to exploring real mechanisms and encouraging readers to think independently.' },
              { title: 'Integrity', body: 'We anchor in facts and build trust through rigorous logic and multi-angle verification. We transparently show data sources, assumptions, and limitations so readers can judge and extend their own thinking.' },
              { title: 'Excellence & Empowerment', body: 'We strive for the highest standards of clear expression and intellectual depth. Ultimately, we want to empower young readers to navigate choices more effectively in a reality full of trade-offs and incentives.' },
            ].map((item, i) => (
              <div key={i} className="group p-8 text-center border transition-all duration-300 hover:border-[var(--color-accent)] hover:-translate-y-1" style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'rgba(255,255,255,0.8)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold" style={{ background: 'var(--color-accent)', color: '#fff' }}>{String.fromCharCode(9826 + i)}</div>
                <h3 className="text-sm font-display font-medium mb-3" style={{ color: 'var(--color-text)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team + Contribute */}
      <section className="container-main py-16">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            <div className="p-8 text-center border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'rgba(255,255,255,0.7)' }}>
              <h3 className="text-sm font-display font-medium mb-3" style={{ color: 'var(--color-text)' }}>Our Team</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                Six students from Communication University of China. A flat collaboration model with no editor-in-chief.
              </p>
              <Link to="/team" className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-all hover:opacity-70" style={{ color: 'var(--color-accent)' }}>
                Meet the Team &rarr;
              </Link>
            </div>

            <div className="p-8 text-center border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'var(--color-accent-dim)' }}>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: 'var(--color-text)' }}>Contribute</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                We welcome story pitches, data tips, and multimedia submissions from student journalists and researchers.
              </p>
              <p className="text-xs font-semibold tracking-wider" style={{ color: 'var(--color-accent)' }}>nofilterlab@outlook.com</p>
            </div>
          </div>

          <p className="text-center text-[0.6rem] leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            This website is based on multimedia reporting materials provided for the course. All images, videos, and text have been adapted for web, optimized for headlines, and reconstructed for explanatory depth to present facts with professional rigor.
          </p>
        </div>
      </section>
    </div>
  );
}
