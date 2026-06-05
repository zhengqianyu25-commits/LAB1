export default function ArticleHero({ article }) {
  return (
    <section className="container-main pt-12 md:pt-20 pb-6 animate-in">
      <div className="article-width">
        <h1 className="text-3xl md:text-4xl font-display font-medium leading-[1.15] tracking-tight" style={{ color: 'var(--color-text)' }}>
          {article.titleEn}
        </h1>

        <p className="mt-6 text-lg leading-relaxed opacity-85" style={{ color: 'var(--color-text-secondary)' }}>{article.summary}</p>
      </div>
    </section>
  );
}
