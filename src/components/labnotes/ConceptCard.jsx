import { Link } from 'react-router-dom';

const examples = {
  scarcity: 'Limited seats, massive demand &mdash; the gap scalpers exploit.',
  'attention-economy': 'When a city goes viral, tourism and spending flood in.',
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
