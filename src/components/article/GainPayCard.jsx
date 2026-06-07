export default function GainPayCard({ whoGains, whoPays }) {
  return (
    <section className="container-main pt-2 pb-2">
      <div className="article-width">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 border" style={{ borderColor: 'var(--color-accent)', background: 'var(--color-accent-dim)' }}>
            <span className="section-label mb-3 block">Who Gains</span>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{whoGains}</p>
          </div>
          <div className="p-6 border" style={{ borderColor: 'var(--color-warn)', background: 'rgba(196,30,58,0.03)' }}>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase mb-3 block" style={{ color: 'var(--color-warn)' }}>Who Pays</span>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{whoPays}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
