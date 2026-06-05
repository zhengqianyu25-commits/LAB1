export default function ArticleHero({ article }) {
  return (
    <section className="container-main pt-12 md:pt-20 pb-6 animate-in">
      <div className="article-width">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-medium leading-[1.15] tracking-tight" style={{ color: 'var(--color-text)' }}>
          {article.titleEn}
        </h1>

        <p className="mt-3 text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {article.titleZh}
        </p>

        <p className="mt-5 text-sm leading-relaxed opacity-60" style={{ color: 'var(--color-text-muted)' }}>{article.summary}</p>
      </div>
    </section>
  );
}
