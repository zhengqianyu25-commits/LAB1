import articles from '../data/articles';
import ConceptGrid from '../components/labnotes/ConceptGrid';
import ConceptMap from '../components/labnotes/ConceptMap';
import SectionTitle from '../components/common/SectionTitle';

export default function LabNotesPage() {
  return (
    <div className="page-enter">
      <section className="container-main pt-12 md:pt-16 pb-8">
        <SectionTitle>Lab Notes</SectionTitle>

        <div className="border p-6 mb-10" style={{ background: 'var(--color-accent-dim)', borderColor: 'var(--color-accent)', borderLeftWidth: '3px', borderRadius: '2px' }}>
          <span className="section-label mb-4 block">Concept Map</span>
          <ConceptMap />
        </div>

        <ConceptGrid articles={articles} />
      </section>

      <section className="container-main py-12">
        <div className="border border-paper-border p-8 md:p-10 dark-bright-card" style={{ background: 'rgba(255,255,255,0.88)', borderColor: 'var(--color-border)' }}>
          <span className="section-label dark-bright-gold">Method</span>
          <h3 className="mt-2 text-xl font-bold font-display text-paper-text dark-bright">How We Read the News</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              { step: '01', title: 'Pick', desc: 'Select stories with room for economic explanation.' },
              { step: '02', title: 'Anchor', desc: 'One concept per story as a framework.' },
              { step: '03', title: 'Explain', desc: 'Clear writing + multimedia. Three minutes to get it.' },
            ].map(item => (
              <div key={item.step}>
                <span className="text-3xl font-bold font-display text-paper-border dark-bright">{item.step}</span>
                <h4 className="mt-2 font-bold font-display text-paper-text dark-bright">{item.title}</h4>
                <p className="text-xs text-paper-text-secondary mt-1 dark-bright">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
