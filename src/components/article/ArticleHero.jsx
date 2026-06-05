export default function ArticleHero({ article }) {
  return (
    <section className="container-main pt-12 md:pt-20 pb-6 animate-in">
      <div className="article-width">
        <h1 className="text-2xl md:text-3xl font-display font-medium leading-[1.2] tracking-tight" style={{ color: 'var(--color-text)' }}>
          {article.titleEn}
        </h1>

        <p className="mt-6 text-base leading-relaxed opacity-80" style={{ color: 'var(--color-text-secondary)' }}>{article.summary}</p>
      </div>
    </section>
  );
}
