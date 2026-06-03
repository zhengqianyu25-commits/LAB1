export default function ArticleHero({ article }) {
  return (
    <section className="container-main pt-12 md:pt-20 pb-10 animate-in">
      <div className="article-width">
        <span className="section-label">{article.section}</span>

        <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.1] tracking-tight" style={{ color: 'var(--color-text)' }}>
          {article.titleEn}
        </h1>

        <p className="mt-3 text-sm opacity-60" style={{ color: 'var(--color-text-muted)' }}>
          {article.titleZh}
        </p>

        <div className="flex items-center gap-5 mt-5 pb-8 border-b" style={{ borderColor: 'var(--color-border)' }}>
          <span className="section-label">{article.conceptEn}</span>
          <span className="text-xs opacity-50" style={{ color: 'var(--color-text-muted)' }}>{article.readTime} read</span>
        </div>

        <p className="mt-8 lead-text">{article.summary}</p>
      </div>
    </section>
  );
}
