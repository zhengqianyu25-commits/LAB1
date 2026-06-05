export default function ArticleHero({ article }) {
  return (
    <section className="container-main pt-12 md:pt-20 pb-6 animate-in">
      <div className="article-width">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.1] tracking-tight" style={{ color: 'var(--color-text)' }}>
          {article.titleEn}
        </h1>

        <p className="mt-3 text-sm opacity-60" style={{ color: 'var(--color-text-muted)' }}>
          {article.titleZh}
        </p>

        <p className="mt-6 lead-text">{article.summary}</p>
      </div>
    </section>
  );
}
