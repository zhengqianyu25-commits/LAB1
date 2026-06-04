import articles from '../data/articles';
import ConceptGrid from '../components/labnotes/ConceptGrid';
import ConceptMap from '../components/labnotes/ConceptMap';

export default function LabNotesPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="container-main pt-16 md:pt-24 pb-8 text-center">
        <span className="text-[0.6rem] font-bold tracking-[0.25em] uppercase opacity-40 mb-4 block" style={{ color: 'var(--color-text-muted)' }}>Lab Notes</span>
        <h1 className="text-3xl md:text-5xl font-display font-medium mb-3" style={{ color: 'var(--color-text)' }}>No Filter Lens</h1>
        <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          Extracting economic concepts from the stories. Each shot reveals something lies hidden behind.
        </p>
      </section>

      {/* Concept Map */}
      <section className="py-10 border-y" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}>
        <div className="container-main max-w-4xl mx-auto">
          <div className="p-6 md:p-10 border" style={{ background: 'rgba(255,255,255,0.7)', borderColor: 'var(--color-border)', borderRadius: '2px' }}>
            <span className="section-label mb-5 block">Concept Map</span>
            <ConceptMap />
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="container-main py-16">
        <div className="flex items-center justify-between mb-8">
          <span className="section-label">All Lenses</span>
          <span className="text-[0.55rem] font-semibold tracking-wider uppercase opacity-30" style={{ color: 'var(--color-text-muted)' }}>Click to explore data</span>
        </div>
        <ConceptGrid articles={articles} />
      </section>

      {/* Method */}
      <section className="py-12 border-t" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}>
        <div className="container-main max-w-4xl mx-auto">
          <div className="p-8 md:p-10 border" style={{ background: 'rgba(255,255,255,0.7)', borderColor: 'var(--color-border)', borderRadius: '2px' }}>
            <span className="section-label mb-5 block">How We Read the News</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: '01', title: 'Pick', desc: 'Select stories with room for economic explanation.' },
                { step: '02', title: 'Anchor', desc: 'One concept per story as a framework.' },
                { step: '03', title: 'Explain', desc: 'Clear writing + multimedia. Three minutes to get it.' },
              ].map(item => (
                <div key={item.step} className="text-center">
                  <span className="text-4xl font-display font-medium opacity-10">{item.step}</span>
                  <h4 className="text-sm font-display font-medium mt-2 mb-1" style={{ color: 'var(--color-text)' }}>{item.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
