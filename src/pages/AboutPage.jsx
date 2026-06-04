import { Link } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';

export default function AboutPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="container-main pt-16 md:pt-20 pb-10 text-center">
        <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--color-text-muted)" }}>About</p>
        <h1 className="text-3xl md:text-5xl font-display font-medium mb-3" style={{ color: "var(--color-text)" }} className="about-heading">No Filter Lab</h1>
        <p className="text-sm font-semibold tracking-[0.12em] uppercase mb-4" style={{ color: "var(--color-text-muted)" }}>无滤镜 Lab</p>
        <p className="text-xl md:text-2xl font-display italic max-w-xl mx-auto mb-3" style={{ color: 'var(--color-accent)' }}>
          Clear stories. Hidden incentives.
        </p>
        <p className="text-sm max-w-lg mx-auto leading-relaxed" style={{ color: "var(--color-text-secondary)" }} className="about-text">
          Seeing the costs, incentives, and trade-offs behind trending topics.
        </p>
      </section>

      {/* Story */}
      <section className="py-16 border-y" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}>
        <div className="container-main max-w-3xl mx-auto">
          <h2 className="text-lg font-display font-medium mb-8 text-center" style={{ color: "var(--color-text)" }} className="about-heading">Our Story</h2>
          <div className="space-y-5 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }} className="about-text">
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
      <section className="container-main py-16">
        <h2 className="text-lg font-display font-medium mb-10 text-center" style={{ color: "var(--color-text)" }} className="about-heading">Our Editorial Philosophy</h2>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {[
            { title: 'Clarity & Accessibility', body: 'We pursue the goal of being "understood in three minutes." We reject academic jargon, emotional manipulation, and oversimplification. Every article uses storytelling and multimedia support so readers can quickly grasp the core logic while preserving the real complexity of the world.' },
            { title: 'Economic Lens', body: 'Economics is not our branding — it is our way of thinking. We use it to reveal how incentives shape behavior, how costs are shifted, and how rules produce unintended consequences. Concepts such as attention economy, creator economy, and labor protection naturally emerge through concrete cases, helping readers build systematic understanding.' },
            { title: 'Youth Resonance', body: 'Our content is always centered on our core audience: university students interested in social trends, consumer culture, gender issues, public welfare, and creative ecosystems. We connect big-picture concepts with personal experiences, showing readers how systems affect them and what real room for action exists.' },
            { title: 'Fact-Based & Balanced', body: 'All explanations are grounded in public data, reliable cases, and multi-stakeholder perspectives. We acknowledge complexity and uncertainty but insist on providing evidence-based analysis rather than single narratives or extreme conclusions.' },
          ].map((item, i) => (
            <div key={i} className="p-6 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'rgba(255,255,255,0.7)' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4 text-[0.6rem] font-bold" style={{ background: 'var(--color-accent)', color: '#fff' }}>0{i + 1}</div>
              <h3 className="text-sm font-display font-medium mb-2" style={{ color: "var(--color-text)" }} className="about-heading">{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }} className="about-text">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container-main max-w-4xl mx-auto">
          <h2 className="text-lg font-display font-medium mb-10 text-center" style={{ color: "var(--color-text)" }} className="about-heading">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Independence', body: 'We are not swayed by traffic algorithms, commercial interests, viral narratives, or single ideologies. "No filter" means staying true to exploring real mechanisms and encouraging readers to question surface appearances and think independently — rather than passively accept or take emotional sides.' },
              { title: 'Integrity', body: 'We anchor in facts and build trust through rigorous logic and multi-angle verification. When presenting costs, incentives, and externalities, we transparently show data sources, assumptions, and limitations so readers can judge and extend their own thinking.' },
              { title: 'Excellence & Empowerment', body: 'We strive for the highest standards of clear expression and intellectual depth. Our content aims to be sharp yet approachable. Ultimately, we want to empower young readers — not only to understand the world, but to navigate choices more effectively in a reality full of trade-offs and incentives.' },
            ].map((item, i) => (
              <div key={i} className="p-6 text-center border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'rgba(255,255,255,0.85)' }}>
                <div className="text-2xl mb-4" style={{ color: 'var(--color-accent)' }}>&loz;</div>
                <h3 className="text-sm font-display font-medium mb-3" style={{ color: "var(--color-text)" }} className="about-heading">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }} className="about-text">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-main py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-lg font-display font-medium mb-4" style={{ color: "var(--color-text)" }} className="about-heading">Our Team</h2>
          <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--color-text-secondary)" }} className="about-text">
            No Filter Lab is an explanatory news website built by six students from Communication University of China. We reject emotional viral narratives and focus on decoding social phenomena through an economic lens, helping young readers understand the costs, incentives, and trade-offs behind trending topics.
          </p>
          <p className="text-xs mb-8 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            To avoid editing conflicts, we adopted a workflow of "Parallel Writing in Shared Docs + Single-Person Relay." We operate without an editor-in-chief; each member independently handled one in-depth article and one website module.
          </p>
          <Link to="/team" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all hover:opacity-80" style={{ background: 'var(--color-accent)', color: '#fff' }}>
            Meet the Team &rarr;
          </Link>

          <p className="text-center text-[0.6rem] mt-16 leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
            This website is based on multimedia reporting materials provided for the course. All images, videos, and text have been adapted for web, optimized for headlines, and reconstructed for explanatory depth to present facts with professional rigor.
          </p>

          <div className="text-center mt-10 p-6 border max-w-lg mx-auto" style={{ borderColor: 'var(--color-border)', borderRadius: '2px', background: 'var(--color-accent-dim)' }}>
            <h3 className="text-sm font-display font-medium mb-2" style={{ color: "var(--color-text)" }} className="about-heading">Contribute</h3>
            <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--color-text-secondary)" }} className="about-text">
              We welcome story pitches, data tips, and multimedia submissions from student journalists and researchers.
            </p>
            <p className="text-xs font-semibold tracking-wider" style={{ color: 'var(--color-accent)' }}>nofilterlab@outlook.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
