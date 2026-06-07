export default function KeyStats({ data }) {
  if (!data) return null;

  return (
    <section className="container-main py-4">
      <div className="article-width">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Big Number */}
          <div className="border p-3 flex flex-col justify-center items-center text-center" style={{ background: 'var(--color-accent-dim)', borderColor: 'var(--color-accent)', borderLeftWidth: '3px' }}>
            <span className="text-2xl md:text-3xl font-display font-bold tracking-tight" style={{ color: 'var(--color-accent)' }}>
              {data.bigNumber}
            </span>
            <span className="mt-1.5 text-sm leading-snug font-medium opacity-70" style={{ color: 'var(--color-text-secondary)' }}>
              {data.bigLabel}
            </span>
          </div>

          {/* Compare */}
          <div className="border p-2 flex flex-col justify-center" style={{ background: '#1E1E1C', borderColor: 'var(--color-border)' }}>
            <span className="text-xs opacity-50 mb-1" style={{ color: 'var(--color-text-muted)' }}>{data.compareA.label}</span>
            <span className="text-lg font-display font-bold" style={{ color: 'var(--color-text)' }}>{data.compareA.value}</span>
          </div>

          <div className="border p-2 flex flex-col justify-center" style={{ background: '#1E1E1C', borderColor: 'var(--color-border)' }}>
            <span className="text-xs opacity-50 mb-1" style={{ color: 'var(--color-text-muted)' }}>{data.compareB.label}</span>
            <span className="text-lg font-display font-bold" style={{ color: 'var(--color-accent)' }}>{data.compareB.value}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
