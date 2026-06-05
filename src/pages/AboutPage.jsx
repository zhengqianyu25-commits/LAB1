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

      {/* Story - brief intro */}
      <section className="py-16 border-y" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}>
        <div className="container-main max-w-3xl mx-auto text-center">
          <h2 className="text-lg font-display font-medium mb-4" style={{ color: 'var(--color-text)' }}>Our Story</h2>
          <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--color-text-secondary)' }}>
            In an era where information overload and emotionally charged communication have become the norm, No Filter Lab was born. We believe economics provides a powerful and practical analytical lens to see through scarcity, information asymmetry, attention economy, externalities, incentive structures, and cost shifting.
          </p>
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
            No Filter Lab aims to be a "filter remover" for young readers — making a complex world understandable and turning clear, rational thinking into a daily habit.
          </p>
          <Link to="/mission" className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all hover:opacity-80" style={{ background: 'var(--color-accent)', color: '#fff' }}>
            Our Mission &amp; Philosophy &rarr;
          </Link>
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
