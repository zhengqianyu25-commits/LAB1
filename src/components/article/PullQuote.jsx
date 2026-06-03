export default function PullQuote({ quote }) {
  if (!quote) return null;

  return (
    <section className="container-main py-6">
      <div className="article-width">
        <div className="border-l-[3px] pl-6 md:pl-8 py-2" style={{ borderColor: 'var(--color-accent)' }}>
          <p className="text-xl md:text-2xl font-display font-medium italic leading-relaxed" style={{ color: 'var(--color-accent)' }}>
            &ldquo;{quote}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
