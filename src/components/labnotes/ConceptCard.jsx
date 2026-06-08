import { Link } from 'react-router-dom';

const cards = {
  scarcity: {
    title: 'Price Ceiling',
    explanation: 'When regulators or organizers set a maximum ticket price below the market-clearing level, quantity demanded exceeds quantity supplied, creating a shortage. This shortage is typically rationed through non-price mechanisms such as lotteries, queues, or social connections rather than price. A secondary market then emerges to reallocate tickets to those willing to pay more.',
    quote: 'For every scalper counting cash outside a sold-out arena, there is another left holding worthless tickets when the traffic doesn\'t move.——Liyang',
    related: "Why Scalpers Create Chaos Outside Mayday's Concerts for Profits",
  },
  'attention-economy': {
    title: 'Attention Economy',
    explanation: 'In the attention economy, human attention is a scarce resource, and platforms compete to capture and monetize it in a world where information is abundant. Online attention can become local revenue only if a city can absorb the crowd. Zibo\'s barbecue trend turned student gratitude, influencer videos, train and bus services, festival activities and citizen hospitality into a tourism boom. The economic question is whether a viral moment can become repeat visits and long-term city value.',
    quote: 'The focus is not eating barbecue; it’s experiencing the atmosphere and emotion. — Kang Qiujie',
    related: 'Zibo grills its way to viral fame',
  },
  'cost-control': {
    title: 'Coordination Failure',
    explanation: 'Each brand shrinks sizes to cut costs and signal "thinness as beauty," but no single brand can restore honest sizing alone — its clothes would look "too big" next to rivals\' labels. The result: consumers can\'t find clothes that fit, brands shrink their own market, and the thin ideal becomes more extreme. Coordination failure persists until an external anchor — a regulator, industry standard, or mass consumer resistance — resets the baseline.',
    quote: 'It should be for people to choose clothes, not for clothes to choose people. ——Xing Junjie',
    related: 'Chinese actress exposes shrinking women\'s clothing sizes, market failure follows',
  },
  'labor-protection': {
    title: 'Labor Protection',
    explanation: 'Labor protection establishes rules for working hours, safety, breaks and fair treatment to prevent employers from shifting risks and costs onto workers. Child actors create value for productions, but they have weaker bargaining power than adults. If safety rules, working hours, meal breaks and physical-contact boundaries are unclear, crews may save time by shifting risk to children. Labor protection makes that hidden cost visible and demands safer production routines.',
    quote: 'Look at child performers as children in need of help, not just as stars. — Yu Hailong',
    related: 'After One Slap: Who Protects Child Actors on Set?',
  },
  externalities: {
    title: 'Externalities & Public Good',
    explanation: 'An externality is a cost or benefit from an economic activity that affects someone who did not choose to be involved. A public good is available to everyone and one person\'s use does not reduce its availability to others. Stray animal rescue creates benefits beyond the adopter: fewer abandoned animals, better community safety and stronger responsible-pet culture. But the cost of care often falls on volunteers and small donors. That gap shows why animal welfare is a public-good problem, not only a private act of kindness.',
    quote: 'The power of collective action lies not just in good intentions, but in systemic efficiency.——Zhu Jiayin',
    related: 'One Cup of Milk Tea: Changing the Fate of Stray Animals',
  },
  'creator-economy': {
    title: 'Creator Economy',
    explanation: 'In the creator economy, individuals use digital platforms to produce and monetize content directly, bypassing traditional media gatekeepers. Low-budget creators can turn small spaces, daily problems and niche interests into online attention. But audience approval does not always match institutional evaluation. The dorm horror film shows a recognition gap: platforms reward entertainment and originality, while course grading may reward safer or more traditional aesthetics.',
    quote: 'Everyone\'s aesthetic is different. Everyone should have the right to choose the topic they like. —— Li Hans',
    related: '79-point horror film exposes signal failure between grade and market',
  },
};

export default function ConceptCard({ article, index }) {
  const c = cards[article.category] || { title: article.conceptEn, explanation: article.lensExplanation, quote: '', related: '' };

  return (
    <div className={`news-card p-7 flex flex-col border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--color-accent)]`} style={{ borderRadius: '2px', borderColor: 'var(--color-border)',  }}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl font-display font-medium opacity-15" style={{ color: '#fff' }}>{article.number}</span>
        <span className="text-[0.55rem] font-semibold tracking-[0.12em] uppercase" style={{ color: '#ccc' }}>Lens {('0' + (index + 1)).slice(-2)}</span>
      </div>

      <h3 className="text-lg font-display font-medium mb-3 leading-snug card-title">{c.title}</h3>
      <p className="text-sm mb-4 leading-relaxed card-text">{c.explanation}</p>

      {c.quote && (
        <p className="text-sm font-display italic mb-4 px-3 py-2 border-l-[3px]" style={{ color: '#F5C518', borderColor: '#F5C518', background: 'rgba(122,92,16,0.08)' }}>
          &ldquo;{c.quote}&rdquo;
        </p>
      )}

      <div className="mt-auto pt-4">
        <span className="mb-1.5 block" style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F5C518' }}>Related Story</span>
        <Link to={`/article/${article.slug}`} className="text-xs leading-relaxed mb-4 hover:opacity-70 transition-opacity" style={{ color: '#F5C518' }}>
          {article.titleEn} &rarr;
        </Link>
      </div>

      <Link to={`/lab-note/${article.category}`} className="inline-flex items-center gap-1.5 mt-1 text-xs font-semibold tracking-wider uppercase transition-all hover:opacity-70" style={{ color: '#F5C518' }}>Explore Data <span className="text-base">&rarr;</span></Link>
    </div>
  );
}
