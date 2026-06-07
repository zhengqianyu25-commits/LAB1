export default function ArticleTakeaway({ takeaway }) {
  return (
    <section className="container-main pt-2 pb-8">
      <div className="article-width">
        <div className="pt-6">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase opacity-50" style={{ color: 'var(--color-text-muted)' }}>The Bottom Line</span>
          <p className="mt-3 text-lg font-display italic leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            {takeaway}
          </p>
        </div>
      </div>
    </section>
  );
}
