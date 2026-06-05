export default function ArticleBody({ body }) {
  if (!body || body.length === 0) return null;

  let textIdx = 0;

  return (
    <section className="container-main py-8 md:py-10">
      <div className="article-width">
        {body.map((item, i) => {
          if (typeof item === 'string') {
            textIdx++;
            return (
              <p key={i} className={`body-text mb-6 ${textIdx === 1 ? 'drop-cap' : ''}`}>
                {item}
              </p>
            );
          }
          // Inline image
          if (item.type === 'image') {
            return (
              <figure key={i} className="my-10">
                <div className="overflow-hidden border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
                  <img src={item.src} alt={item.alt || ''} className="w-full h-auto" loading="lazy" />
                </div>
                {item.caption && (
                  <figcaption className="mt-3 text-sm text-left leading-relaxed opacity-80" style={{ color: 'var(--color-text-muted)' }}>
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            );
          }
          return null;
        })}
      </div>
      <hr className="section-divider article-width" />
    </section>
  );
}
