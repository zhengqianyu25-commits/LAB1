export default function ArticleBody({ body }) {
  if (!body || body.length === 0) return null;

  return (
    <section className="container-main py-8 md:py-10">
      <div className="article-width">
        {body.map((p, i) => (
          <p key={i} className={`body-text mb-6 ${i === 0 ? 'drop-cap' : ''}`}>
            {p}
          </p>
        ))}
      </div>
      <hr className="section-divider article-width" />
    </section>
  );
}
