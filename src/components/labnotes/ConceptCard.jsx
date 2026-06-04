import { Link } from 'react-router-dom';

const examples = {
  scarcity: 'Limited seats, massive demand &mdash; the gap scalpers exploit.',
  'attention-economy': 'Zibo\'s Douyin search index skyrocketed 181,376% year-on-year, from near zero to over 11 million. 10,000 UGC videos flooded the platform on April 29 alone, acting as free advertising. On peak day, Zibo Station recorded 94,594 arrivals — online attention converted into physical footfall. Gen Z (18-30) drove 58% of engagement, with a 55% female skew accelerating trip planning. The result: a 73% consumption spike and 200% booking growth — but attention fades. The question is whether Zibo can build lasting brand value or become a one-season wonder.',
  'cost-control': 'One-size-fits-all is not just aesthetic; it\'s a cost decision.',
  'labor-protection': 'Child performers need stricter rules than adult actors.',
  externalities: 'Abandoned pets create costs society as a whole bears.',
  'creator-economy': 'A film can go viral online but score a mediocre grade.',
};

export default function ConceptCard({ article, index }) {
  return (
    <div className={`news-card p-7 flex flex-col animate-in stagger-${Math.min((index || 0) + 1, 6)}`} style={{ borderRadius: '2px' }}>
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl font-display font-medium opacity-10">{article.number}</span>
        <span className="text-[0.6rem] font-semibold tracking-[0.15em] uppercase opacity-40" style={{ color: 'var(--color-text-muted)' }}>{article.section.split(' / ')[0]}</span>
      </div>

      <h3 className="text-xl font-display font-medium mb-2" style={{ color: 'var(--color-text)' }}>{article.conceptEn}</h3>
      <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{article.lensExplanation.slice(0, 160)}&hellip;</p>

      <div className="mt-auto pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <span className="section-label mb-1.5 block">In One Sentence</span>
        <p className="text-xs leading-relaxed mb-4 opacity-70" style={{ color: 'var(--color-text-secondary)' }}>{examples[article.category]}</p>
      </div>

      <Link to={`/article/${article.slug}`} className="accent-link">Read Story &rarr;</Link>
    </div>
  );
}
