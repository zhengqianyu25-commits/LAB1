export default function KeyStats({ data }) {
  if (!data) return null;

  return (
    <section className="container-main py-4">
      <div className="article-width">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Big Number */}
          <div className="border p-6 flex flex-col justify-center items-center text-center" style={{ background: 'var(--color-accent-dim)', borderColor: 'var(--color-accent)', borderLeftWidth: '3px' }}>
            <span className="text-4xl md:text-5xl font-display font-bold tracking-tight" style={{ color: 'var(--color-accent)' }}>
              {data.bigNumber}
            </span>
            <span className="mt-2 text-xs font-semibold tracking-wider uppercase opacity-70" style={{ color: 'var(--color-text-secondary)' }}>
              {data.bigLabel}
            </span>
          </div>

          {/* Compare */}
          <div className="border p-5 flex flex-col justify-center" style={{ background: 'rgba(255,255,255,0.5)', borderColor: 'var(--color-border)' }}>
            <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase opacity-40 mb-1" style={{ color: 'var(--color-text-muted)' }}>{data.compareA.label}</span>
            <span className="text-2xl font-display font-bold" style={{ color: 'var(--color-text)' }}>{data.compareA.value}</span>
          </div>

          <div className="border p-5 flex flex-col justify-center" style={{ background: 'rgba(255,255,255,0.5)', borderColor: 'var(--color-border)' }}>
            <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase opacity-40 mb-1" style={{ color: 'var(--color-text-muted)' }}>{data.compareB.label}</span>
            <span className="text-2xl font-display font-bold" style={{ color: 'var(--color-accent)' }}>{data.compareB.value}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
