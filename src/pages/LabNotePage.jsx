import { useParams, Link } from 'react-router-dom';
import articles from '../data/articles';

const contentMap = {
  'attention-economy': {
    title: 'Attention Economy: How Zibo Turned Hashtags into Hard Cash',
    subtitle: 'What is Attention Economy?',
    intro: 'In an information-overloaded world, human attention is the scarce resource. Platforms, cities and brands compete for clicks, shares and views. The winner can convert that attention into real revenue — but only if the service infrastructure is ready to capture it.',
    quote: 'Traffic creates the spark; service decides whether it lasts.',
    sections: [
      {
        image: '/media/lab-notes/ae-1.png',
        source: 'Source: Douyin (ByteDance) public data, compiled by Juzi Suannai',
        text: 'The search index for "Zibo Barbecue" on Douyin skyrocketed from near zero in early April to over 11 million by April 29 — a staggering 181,376% year-on-year increase. Each search represents a potential tourist evaluating a trip. This explosion of demand happened just before the May Day holiday, giving Zibo\'s government a clear signal to deploy extra trains, buses and price controls.',
      },
      {
        image: '/media/lab-notes/ae-2.png',
        source: 'Source: Guojí · Feigua Data',
        text: 'As search interest rose, so did the number of short videos. User-generated content supply jumped from almost zero to 10,000 videos on April 29 alone. This flood of free advertising lowered Zibo\'s customer acquisition cost to near zero. In attention economy terms, creators acted as unpaid brand ambassadors, amplifying the city\'s reach exponentially.',
      },
      {
        image: '/media/lab-notes/ae-3.jpeg',
        source: 'Source: China Railway Jinan Group Co Ltd.',
        text: 'All that online attention had to translate into offline action — and it did. On April 29, the peak day of the holiday, Zibo Station recorded 94,594 arrivals and 41,279 departures. This physical movement of people is the hard currency of attention conversion. Online interest turned into offline arrivals, proving that Zibo\'s infrastructure successfully captured the viral wave.',
      },
      {
        image: '/media/lab-notes/ae-4.jpeg',
        source: 'Source: Guojí · Feigua Data – Douyin user analytics',
        text: 'The digital audience behind this phenomenon is remarkably specific. The largest age group engaged with Zibo barbecue content is 18-23 (29.74%), followed by 24-30 (28.29%). Gen Z is the most active cohort on short-video platforms and the most willing to travel for a "social experience." This demographic fit explains why Zibo barbecue spread so fast online.',
      },
      {
        image: '/media/lab-notes/ae-5.jpeg',
        source: 'Source: Guojí · Feigua Data – Douyin user analytics',
        text: 'Female users accounted for 55.51% of engaged viewers, compared to 44.49% male. Research consistently shows that women share food, travel and lifestyle content more actively on social media. This slight female skew helped the hashtag move from passive viewing to active trip planning.',
      },
    ],
    conclusion: 'Zibo\'s barbecue boom turned viral attention into a 73% consumption spike and 200% booking growth (WeChat Pay\'s "2023 May Day Travel Boom Data Report"). But attention fades. The same charts show a post-holiday decline in search index and new video uploads. The real question is whether Zibo can build repeat visitation and long-term brand value — or become a one-season wonder.',
    relatedArticle: 'zibo-bbq',
  },
  'scarcity': {
    title: 'What is a Price Ceiling? How Ticket Caps Fuel Scalping',
    subtitle: 'What is a Price Ceiling?',
    intro: 'When regulators or organizers set a maximum ticket price below the market-clearing level, quantity demanded exceeds quantity supplied, creating a shortage. This shortage is typically rationed through non-price mechanisms such as lotteries, queues, or social connections rather than price. A secondary market then emerges to reallocate tickets to those willing to pay more.',
    quote: 'Official price caps create the shortage; secondary markets reveal true demand.',
    sections: [
      {
        image: '/media/lab-notes/scarcity-1.png',
        source: 'Source: General Office of the Ministry of Culture and Tourism & China Performance Industry Association Notice, April 26, 2023',
        text: 'On April 26, 2023, the General Office of the Ministry of Culture and Tourism and the China Performance Industry Association issued a notice clearly stating that "the number of commercial performance tickets sold to the market by performance organizers and ticket management units shall not be less than 70% of the approved audience." This is China\'s first explicit regulation on the public sale ratio of concert tickets, aimed at increasing supply in the primary market and curbing the scale of the secondary market.',
      },
    ],
    conclusion: 'The pie chart shows that 70% of tickets come from official channels, exactly meeting the policy\'s minimum public sale requirement. However, 30% still flow through other channels. This indicates that even with the policy mandating 70% public sales, information asymmetry, differences in ticketing speed, and advantages from social capital still push some tickets into the secondary market. The shortage effect caused by the price ceiling has not been fully eliminated, and the policy has clear boundaries in its implementation. The 70/30 split profoundly demonstrates the mechanism of price ceilings in the ticketing market. Although the policy successfully raised primary market supply to 70%, the continued existence of the secondary market reminds us that quantity mandates alone cannot eliminate arbitrage opportunities driven by information asymmetry and transaction costs. Only when the service efficiency and pricing mechanisms of official channels are truly optimized can the "70% public sale" requirement transform from a numerical target into genuine market clearing and equitable allocation.',
    relatedArticle: 'concert-scalping',
  },
  'cost-control': {
    title: 'The Cost of Thinness: How Shrinking Sizes Shift the Burden',
    subtitle: 'Coordination Failure & Body Anxiety',
    intro: 'When brands compete to make smaller sizes, they are not just chasing a trend — they are shifting costs onto consumers. Each brand acts rationally alone, but together they create a market where women cannot find clothes that fit, fueling anxiety and unhealthy behaviors. This is a coordination failure with real health consequences.',
    quote: 'It should be for people to choose clothes, not for clothes to choose people.',
    sections: [
      {
        image: '/media/lab-notes/cost-1.jpeg',
        text: 'The origin of shrinking women\'s clothing sizes comes from the "BM style" that has become popular in China in recent years. BM stands for Brandy Melville, an Italian women\'s clothing brand known for its small sizes. In the traditional Chinese concept of thinness as beauty, consumers who can wear its small size clothes are usually considered to be the representative of a good figure. Xing Junjie, founder of Iceonme, notes that women pursue beauty and fitness, which enables more people to accept the BM style.',
        source: 'Source: Iceonme brand interview',
      },
      {
        image: '/media/lab-notes/cost-14.png',
        text: 'The frequency of weighing among female netizens reveals deep body anxiety. 31.9% of female netizens weigh themselves once a day, compared to only 11.3% of males. 48.1% of male netizens weigh themselves only once a year. This data shows that women are significantly more affected by body image pressure than men.',
        source: 'Source: Momo: 2021 Netizens\' Body Anxiety Report',
      },
      {
        image: '/media/lab-notes/cost-15.png',
        text: '45.9% of netizens think they need to lose weight, with female respondents more likely to show anxiety about obesity. 46.4% are not worried about their figure, among which men account for a larger proportion. 7.7% of netizens consider themselves way too thin. The body anxiety gap between genders is a direct consequence of the shrinking-size market.',
        source: 'Source: Momo: 2021 Netizens\' Body Anxiety Report',
      },
      {
        image: '/media/lab-notes/cost-13.jpeg',
        text: 'Health consequences of body anxiety are significant. In the past year, 47% of respondents reported emotional issues (anxiety, depression), 43% had gastrointestinal problems, 29% experienced headaches, and 19% suffered from body anxiety disorders. These are the hidden costs of a market that systematically excludes average body types.',
        source: 'Source: Doctor Lilac: 2022 National Health Insight Report',
      },
    ],
    conclusion: 'Shrinking clothing sizes are not merely a fashion trend — they are a coordination failure with measurable health costs. Each brand has an incentive to make sizes smaller, but no single brand can restore honest sizing alone. The result: 45.9% of people feel they need to lose weight, and 47% report emotional distress. The market saves on fabric; society pays in mental health.',
    relatedArticle: 'clothing-sizes',
  },
  'creator-economy': {
    title: 'Why the old market said no to horror',
    subtitle: 'What is signal failure in creative markets?',
    intro: 'In any creative industry, producers rely on market signals to decide what to make. Box office returns and genre counts are clear signals: romance and feature films dominate; horror barely registers. But signals can become outdated when the distribution model changes. A low-box-office genre in cinemas may become a high-return niche on digital platforms.',
    quote: 'Old data explains past choices. New platforms rewrite the rules.',
    sections: [
      {
        image: '/media/lab-notes/ce-1.png',
        source: 'Source: National Administration of China',
        text: 'New films by genre. Horror is not even a separate category — it sits inside "others" (38 films), far behind romance (39) and feature films (133). For a decade, producers saw this chart and decided: don\'t waste budget on horror. The supply side had already abandoned the genre.',
      },
      {
        image: '/media/lab-notes/ce-2.png',
        source: 'Data source: https://www.sohu.com/a/70466255_398736',
        text: 'Horror\'s share of China\'s annual box office. Always below 3%, often below 1%. On the demand side, audiences paid very little to see horror in theaters. That\'s two clear signals — low supply and low demand — telling filmmakers to stay away. These two charts explain why Li Hans\' professor gave his horror short a 79. In the old market, horror was a losing bet. Professors who discourage it aren\'t being arbitrary — they\'re reading the data of the past decade.',
      },
    ],
    conclusion: 'But Li isn\'t playing the cinema game. He distributes on bilibili, where distribution costs are zero and a niche audience can find him through search and recommendations. The old logic said "go big or go home." The creator economy says "go small, go cheap, find your tribe." The charts don\'t prove Li wrong. They explain why his bet is a real bet — and why, if he wins, it\'s because the market structure has changed.',
    relatedArticle: 'student-films',
  },
  externalities: {
    title: 'Rescue Economics: The Cost of Compassion',
    subtitle: 'Externalities & Public Good',
    intro: 'In urban systems, stray animals are often treated as a "negative externality" — a cost to be managed. Yet, private rescue groups operate as shadow welfare providers. By analyzing the flow of pets from breeders to streets, we uncover the economic friction between commercial desire and the hard reality of abandonment.',
    quote: 'The market sells the fantasy; rescue pays the bill.',
    sections: [
      {
        text: 'Behind the Adoption Day lies a systemic imbalance: 51.80% of pets enter homes through purchasing. This isn\'t just a consumer preference; it\'s a market failure in resource allocation. While micro-donations (the "One Cup of Milk Tea" model) provide a lifeline for strays, they are fighting against the tide of a commercial breeding industry. The sheer volume of purchases fuels the supply chain that ultimately leads to the 43.07% abandonment rate. The economic incentive for breeders is profit; the economic consequence for society is a growing stray population.',
        source: 'Source: NetEase News Public Welfare Survey',
      },
      {
        text: 'Survey data indicates that 34.09% of respondents have witnessed animal abuse, and a combined 43.07% have either abandoned pets or know someone who has. In economic terms, abandoned animals generate massive negative externalities. They impose hidden costs on municipalities: public sanitation, disease control, and traffic safety risks. The 20-year dedication of the rescue team — finding a lost cat after four days of searching — illustrates the high opportunity cost of unpaid labor required to mitigate these externalities. Society saves on taxes by underfunding animal control, but it pays in the form of volunteer burnout and street-level suffering.',
        source: 'Source: NetEase News Public Welfare Survey',
      },
      {
        text: 'Counteracting this trend, institutional rescue platforms like Beijing Adoption Day account for 22.10% of pet sources. This figure represents the "Milk Tea Premium." It proves that lowering the barrier to entry (from hundreds of dollars to the price of a drink) can mobilize the masses. Economically, this is a superior model: it transforms a commodity (a purchased pet) into a social contract (an adopted rescue). It is the most cost-effective way to internalize the externalities created by the 51.8% purchase market.',
        source: 'Source: NetEase News Public Welfare Survey',
      },
    ],
    conclusion: 'The stray animal crisis is a textbook case of negative externalities. Commercial breeding generates profits for sellers while shifting the costs of abandonment onto volunteers, donors, and municipal services. Micro-donation models like the "One Cup of Milk Tea" approach offer a scalable way to internalize these externalities by lowering the barrier to participation. The economics of rescue is fundamentally about who pays for compassion — and whether society can build systems that make compassion economically sustainable.',
    relatedArticle: 'stray-animals',
  },
  'labor-protection': {
    title: 'Labor Protection: Experiencing the Shadow Behind the Glory',
    subtitle: 'What is Labor Protection?',
    intro: 'Labor protection means setting clear rules so that the cost of work is not shifted onto vulnerable workers. For child actors, it includes limits on shooting hours, protection from physical harm, regular meals and rest, schooling time, and psychological safety.',
    quote: 'A child actor is a performer on screen, but still a child behind the camera.',
    sections: [
      {
        game: 'https://www.66rpg.com/game/1641073',
        source: 'Source: 66RPG interactive game',
        text: 'This interactive game invites readers to step into the role of Oscar, a seven-year-old child actor who attends elementary school and lives with his mother in Beijing. Through scenes at home, school and a film set, the player sees how filming assignments can replace ordinary school time, how praise and pressure appear together, and how a child may have to choose between defending himself and remaining silent.',
      },
      {
        tableau: 'https://public.tableau.com/views/story_16881121764440/1_1?:language=zh-CN&:display_count=n&:origin=viz_share_link',
        source: 'Source: UNICEF Global Databases, last updated May 2022; visualized through Tableau Public',
        text: 'The chart represents the global child labor rate based on UNICEF\'s data in May 2022. Child labor is a social issue of global concern. Despite many countries having legislated against child labor practices, there are still numerous children forced into dangerous work.',
      },
    ],
    conclusion: 'This data page connects the child actor story to a broader labor-protection question. Child actors are not identical to children in hazardous labor, but both cases ask how adults, institutions and industries should prevent children from carrying risks they cannot fully understand or negotiate.',
    relatedArticle: 'child-stars',
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
        <div className="border-b pb-8 mb-8" style={{ borderColor: 'var(--color-border)' }}>
          <span className="section-label mb-3 block">Lab Note</span>
          <h1 className="lab-note-title text-2xl md:text-4xl font-display font-medium leading-tight mb-4" style={{ color: 'var(--color-text)' }}>{data.title}</h1>
          <div className="p-6 border-l-[3px] mb-6" style={{ borderColor: 'var(--color-accent)', background: 'var(--color-accent-dim)' }}>
            <h2 className="lab-note-title text-lg md:text-xl font-display font-medium mb-2" style={{ color: 'var(--color-text)' }}>{data.subtitle}</h2>
            <p className="lab-note-text text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{data.intro}</p>
          </div>
          <p className="lab-note-title text-base md:text-lg font-display italic text-center max-w-2xl mx-auto" style={{ color: 'var(--color-accent)' }}>&ldquo;{data.quote}&rdquo;</p>
        </div>

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
              {s.source && <p className="text-[0.55rem] font-semibold tracking-wider uppercase opacity-40 mb-2" style={{ color: 'var(--color-text-muted)' }}>{s.source}</p>}
              {s.text && <p className="lab-note-text text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{s.text}</p>}
            </div>
          ))}

          <div className="border-t pt-8" style={{ borderColor: 'var(--color-border)' }}>
            <p className="lab-note-text text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{data.conclusion}</p>
          </div>

          <div className="flex items-center justify-between pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <Link to="/lab-notes" className="text-xs tracking-wider leading-tight opacity-50 hover:opacity-80 transition-opacity" style={{ color: 'var(--color-accent)' }}>
              &larr; Back To Lab Notes
            </Link>
            {relatedArticle ? (
              <Link to={`/article/${data.relatedArticle}?from=lab-note`} className="text-xs tracking-wider leading-tight opacity-50 hover:opacity-80 transition-opacity" style={{ color: 'var(--color-accent)' }}>
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
