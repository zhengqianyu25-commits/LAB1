import { useParams, Link } from 'react-router-dom';
import articles from '../data/articles';

const contentMap = {
  'scarcity': {
    title: 'What is a Price Ceiling? How Ticket Caps Fuel Scalping',
    subtitle: 'What is a Price Ceiling?',
    intro: 'When regulators or organizers set a maximum ticket price below the market-clearing level, quantity demanded exceeds quantity supplied, creating a shortage. This shortage is typically rationed through non-price mechanisms such as lotteries, queues, or social connections rather than price. A secondary market then emerges to reallocate tickets to those willing to pay more.',
    quote: 'Official price caps create the shortage; secondary markets reveal true demand.',
    sections: [
      {
        image: '/media/lab-notes/scarcity-1.png',
        text: 'The pie chart shows that 70% of tickets come from official channels, exactly meeting the policy\'s minimum public sale requirement. However, 30% still flow through other channels. This indicates that even with the policy mandating 70% public sales, information asymmetry, differences in ticketing speed, and advantages from social capital still push some tickets into the secondary market. The shortage effect caused by the price ceiling has not been fully eliminated, and the policy has clear boundaries in its implementation.',
        source: 'Source: General Office of the Ministry of Culture and Tourism & China Performance Industry Association Notice, April 26, 2023',
      },
      {
        image: '/media/lab-notes/scarcity-2.png',
        text: "On April 26, 2023, the General Office of the Ministry of Culture and Tourism and the China Performance Industry Association issued a notice clearly stating that \"the number of commercial performance tickets sold to the market by performance organizers and ticket management units shall not be less than 70% of the approved audience.\" This is China's first explicit regulation on the public sale ratio of concert tickets, aimed at increasing supply in the primary market and curbing the scale of the secondary market.",
        source: 'Source: General Office of the Ministry of Culture and Tourism & China Performance Industry Association',
      },
    ],
    conclusion: 'The 70/30 split profoundly demonstrates the mechanism of price ceilings in the ticketing market. Although the policy successfully raised primary market supply to 70%, the continued existence of the secondary market reminds us that quantity mandates alone cannot eliminate arbitrage opportunities driven by information asymmetry and transaction costs. Only when the service efficiency and pricing mechanisms of official channels are truly optimized can the "70% public sale" requirement transform from a numerical target into genuine market clearing and equitable allocation.',
    relatedArticle: 'concert-scalping',
  },
  'labor-protection': {
    title: 'Labor Protection: Experiencing the Shadow Behind the Glory',
    subtitle: 'What is Labor Protection?',
    intro: 'Labor protection means setting clear rules so that the cost of work is not shifted onto vulnerable workers. For child actors, it includes limits on shooting hours, protection from physical harm, regular meals and rest, schooling time, and psychological safety.',
    quote: 'A child actor is a performer on screen, but still a child behind the camera.',
    sections: [
      {
        text: '',
      },
      {
        game: 'https://www.66rpg.com/game/1641073',
        source: 'Source: 66RPG interactive game',
        text: 'This interactive game invites readers to step into the role of Oscar, a seven-year-old child actor who attends elementary school and lives with his mother in Beijing. Through scenes at home, school and a film set, the player sees how filming assignments can replace ordinary school time, how praise and pressure appear together, and how a child may have to choose between defending himself and remaining silent. To understand what child actors face, readers can enter Oscar\'s day and make the next choice for themselves...',
      },
      {
        tableau: 'https://public.tableau.com/views/story_16881121764440/1_1?:language=zh-CN&:display_count=n&:origin=viz_share_link',
        source: 'Source: UNICEF Global Databases, last updated May 2022; visualized through Tableau Public',
        text: 'The chart represents the global child labor rate based on UNICEF\'s data in May 2022. Child labor is a social issue of global concern. Despite many countries having legislated against child labor practices, there are still numerous children forced into dangerous work. These children are deprived of a normal childhood and the right to education, significantly affecting their physical and mental well-being, as well as their future development.',
      },
    ],
    conclusion: 'This data page connects the child actor story to a broader labor-protection question. Child actors are not identical to children in hazardous labor, but both cases ask how adults, institutions and industries should prevent children from carrying risks they cannot fully understand or negotiate. The interactive game makes that question experiential, while the global map reminds readers that children\'s work and protection remain urgent public issues.',
    relatedArticle: 'child-stars',
  },
  'attention-economy': {
    title: 'Attention Economy: How Zibo Turned Hashtags into Hard Cash',
    subtitle: 'What is Attention Economy?',
    intro: "In an information-overloaded world, human attention is the scarce resource. Platforms, cities and brands compete for clicks, shares and views. The winner can convert that attention into real revenue — but only if the service infrastructure is ready to capture it.",
    quote: "Traffic creates the spark; service decides whether it lasts.",
    sections: [
      {
        text: 'The search index for "Zibo Barbecue" on Douyin skyrocketed from near zero in early April to over 11 million by April 29 — a staggering 181,376% year-on-year increase. Each search represents a potential tourist evaluating a trip. This explosion of demand happened just before the May Day holiday, giving Zibo\'s government a clear signal to deploy extra trains, buses and price controls.',
        source: 'Source: Douyin (ByteDance) public data, compiled by Juzi Suannai',
      },
      {
        tableau: 'https://public.tableau.com/views/Otherdatas/2?:showVizHome=no&:embed=true',
        source: 'Source: Guojí · Feigua Data',
        text: 'As search interest rose, so did the number of short videos. User-generated content supply jumped from almost zero to 10,000 videos on April 29 alone. This flood of free advertising lowered Zibo\'s customer acquisition cost to near zero. In attention economy terms, creators acted as unpaid brand ambassadors, amplifying the city\'s reach exponentially.',
      },
      {
        image: '/media/lab-notes/attention-economy-3.png',
        source: 'Source: China Railway Jinan Group Co Ltd.',
        text: 'All that online attention had to translate into offline action — and it did. On April 29, the peak day of the holiday, Zibo Station recorded 94,594 arrivals and 41,279 departures. This physical movement of people is the hard currency of attention conversion. Online interest turned into offline arrivals, proving that Zibo\'s infrastructure successfully captured the viral wave.',
      },
      {
        image: '/media/lab-notes/attention-economy-4.webp',
        source: 'Source: Guojí · Feigua Data – Douyin user analytics',
        text: 'The digital audience behind this phenomenon is remarkably specific. The largest age group engaged with Zibo barbecue content is 18-23 (29.74%), followed by 24-30 (28.29%). Gen Z is the most active cohort on short-video platforms and the most willing to travel for a "social experience." This demographic fit explains why Zibo barbecue spread so fast online.',
      },
      {
        image: '/media/lab-notes/attention-economy-5.png',
        source: 'Source: Guojí · Feigua Data – Douyin user analytics',
        text: 'Female users accounted for 55.51% of engaged viewers, compared to 44.49% male. Research shows that women share food, travel and lifestyle content more actively on social media. This slight female skew helped the hashtag move from passive viewing to active trip planning.',
      },
    ],
    conclusion: 'Zibo\'s barbecue boom turned viral attention into a 73% consumption spike and 200% booking growth (WeChat Pay\'s "2023 May Day Travel Boom Data Report"). But attention fades. The same charts show a post-holiday decline in search index and new video uploads. The real question is whether Zibo can build repeat visitation and long-term brand value — or become a one-season wonder.',
    relatedArticle: 'zibo-bbq',
  },
};

export default function LabNotePage() {
  const { slug } = useParams();
  const data = contentMap[slug];

  if (!data) {
    return (
      <div className="page-enter container-main py-20 text-center">
        <p style={{ color: 'var(--color-text-muted)' }}>Lab Note not found.</p>
        <Link to="/lab-notes" className="text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--color-accent)' }}>&larr; Lab Notes</Link>
      </div>
    );
  }

  const relatedArticle = articles.find(a => a.slug === data.relatedArticle);

  return (
    <div className="page-enter">
      <section className="container-main pt-12 md:pt-16 pb-8">
        {/* Header */}
        <div className="border-b pb-8 mb-8" style={{ borderColor: 'var(--color-border)' }}>
          <span className="section-label mb-3 block">Lab Note</span>
          <h1 className="text-2xl md:text-4xl font-display font-medium leading-tight mb-4" style={{ color: 'var(--color-text)' }}>{data.title}</h1>
          <div className="p-6 border-l-[3px] mb-6" style={{ borderColor: 'var(--color-accent)', background: 'var(--color-accent-dim)' }}>
            <h2 className="text-lg md:text-xl font-display font-medium mb-2" style={{ color: 'var(--color-text)' }}>{data.subtitle}</h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{data.intro}</p>
          </div>
          <p className="text-base md:text-lg font-display italic text-center max-w-2xl mx-auto" style={{ color: 'var(--color-accent)' }}>&ldquo;{data.quote}&rdquo;</p>
        </div>

        {/* Data sections */}
        <div className="max-w-3xl mx-auto space-y-12">
          {data.sections.map((s, i) => (
            <div key={i}>
              <div className="border overflow-hidden rounded-sm mb-3" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}>
                {s.game ? (
                  <div className="aspect-[16/10]">
                    <iframe src={s.game} className="w-full h-full border-0" allowFullScreen />
                  </div>
                ) : s.tableau ? (
                  <div className="aspect-[4/3]">
                    <iframe src={s.tableau} className="w-full h-full border-0" allowFullScreen />
                  </div>
                ) : s.image ? (
                  <div className="max-w-[280px] mx-auto">
                    <img src={s.image} alt="" className="w-full h-auto" loading="lazy" />
                  </div>
                ) : null}
              </div>
              <p className="text-[0.55rem] font-semibold tracking-wider uppercase opacity-40 mb-2" style={{ color: 'var(--color-text-muted)' }}>{s.source}</p>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{s.text}</p>
            </div>
          ))}

          {/* Conclusion */}
          <div className="border-t pt-8" style={{ borderColor: 'var(--color-border)' }}>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{data.conclusion}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <Link to="/lab-notes" className="text-xs font-semibold tracking-wider uppercase hover:opacity-70" style={{ color: 'var(--color-accent)' }}>
              &larr; Back To Lab Notes
            </Link>
            {relatedArticle ? (
              <Link to={`/article/${data.relatedArticle}?from=lab-note`} className="text-xs font-semibold tracking-wider uppercase hover:opacity-70" style={{ color: 'var(--color-accent)' }}>
                See the Story &rarr;
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
