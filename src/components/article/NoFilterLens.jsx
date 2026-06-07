export default function NoFilterLens({ conceptEn, explanation }) {
  return (
    <section className="container-main pt-6 pb-2">
      <div className="article-width">
        <div className="p-8 md:p-10 border" style={{ background: 'var(--color-accent-dim)', borderColor: 'var(--color-accent)', borderLeftWidth: '3px' }}>
          <span className="section-label mb-3 block">No Filter Lens</span>
          <h3 className="text-xl md:text-2xl font-display font-medium mb-3" style={{ color: 'var(--color-text)' }}>{conceptEn}</h3>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{explanation}</p>
        </div>
      </div>
    </section>
  );
}
