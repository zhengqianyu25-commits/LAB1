const articles = [
  {
    slug: 'concert-scalping', number: '01', category: 'scarcity',
    titleEn: 'Sold Out in Seconds',
    titleZh: 'How scarcity and price caps fuel a billion-dollar ticket resale market.',
    conceptEn: 'Scarcity & Arbitrage', conceptZh: '稀缺性与套利',
    readTime: '5 min', section: 'Market',
    summary: 'When 500,000 fans chase 20,000 seats and tickets sell out in under a minute, a secondary market emerges where prices soar far beyond face value — and scalpers pocket the difference.',

    body: [
      'BEIJING — Tickets for Mandopop star Jay Chou’s 2024 arena tour vanished from official platforms in roughly 30 seconds. Minutes later, identical seats appeared on resale sites at prices ranging from three to eight times face value, according to consumer complaint records reviewed by reporters.',
      'The phenomenon, repeated across major concerts in China this year, has drawn public anger and government scrutiny. But economists and industry analysts say the scalping problem is not simply a matter of enforcement failure. It is, at root, a pricing problem.',
      '“When you price a good below what the market will bear, someone will capture that gap,” said an economics researcher who studies ticket markets. “Right now, that someone is rarely the artist or the promoter.”',
      'The mechanism is straightforward. A major concert might draw half a million intending buyers for 20,000 seats. If promoters set face-value prices at 880 to 1,880 yuan — constrained by fan expectations, brand image, and regulatory pressure — the true market-clearing price may be several times higher. The difference between these two numbers is the arbitrage opportunity that scalpers exploit.',
      'Scalpers operate with three advantages, investigators have found: information advantage, knowing exactly when and where tickets drop; technical advantage, deploying automated bots that can complete purchases faster than any human; and channel advantage, maintaining informal relationships with some ticket distribution points.',
      'Critics argue that promoters are effectively leaving money on the table — and directing it into an unregulated gray market. “If your tickets consistently sell out within seconds and reappear at triple the price, your pricing model is broken,” one industry analyst said.',
      'But charging the full market price carries its own costs. It would turn concerts into exclusive events for the wealthy, shutting out the very fans whose loyalty built the artist’s career. This tension between fairness and efficiency has no easy resolution.',
      'Several countermeasures are being tested. Real-name registration tied to government ID, facial recognition at venue entrances, dynamic pricing that adjusts in real time, and fan-club presales that prioritize long-term supporters have all been deployed with mixed results. Each solution creates new problems: privacy concerns, longer entry queues, and the risk that dedicated but lower-income fans are priced out entirely.',
      '“The scalper is a symptom, not the disease,” the researcher said. “The underlying problem is that concert tickets are a scarce resource whose price is artificially suppressed. Until that changes, the secondary market will find a way.”',
    ],

    lensExplanation: 'Ticket scalping is a textbook case of scarcity-driven arbitrage. When supply is fixed and demand far exceeds it, the true market price is higher than the official price. That gap creates room for intermediaries who buy low and sell high — capturing value that could have gone to artists, venues, or fans.',
    whoGains: 'Scalpers capture the price spread through information and technical advantages. Some ticket distributors may benefit through informal channel arrangements. Consumers willing and able to pay the premium gain access to sold-out events.',
    whoPays: 'Regular fans pay far above face value or are shut out entirely. Artists and promoters bear reputational damage and lost revenue. The overall cost of live entertainment rises, disproportionately excluding lower-income audiences.',
    pullQuote: 'The scalper is a symptom, not the disease.',
    takeaway: 'The scalping market is a signal: concert tickets are underpriced scarce goods. Stronger enforcement alone won’t fix it. The solution lies in redesigning how tickets are allocated so the value flows to those who create it, not those who extract it.',

    visualStyle: 'ticket-overlap', accentColor: '#B8860B',
    keyStats: {
      bigNumber: '30s',
      bigLabel: 'Time for tickets to sell out',
      compareA: { value: '¥880', label: 'Official face value' },
      compareB: { value: '¥5,000', label: 'Resale market price' },
    },
    media: {
      caption: 'MULTIMEDIA',
      video: { src: '/media/concert-scalping/video.mp4', type: 'video/mp4', caption: 'Video report on concert ticket scalping in China' },
      audio: { src: '/media/concert-scalping/audio.mp3', type: 'audio/mpeg', caption: 'Audio story' },
      images: [
        { src: '/media/concert-scalping/image1.jpeg', alt: 'Concert crowd at a major arena show' },
        { src: '/media/concert-scalping/image7.png', alt: 'Price comparison between official and resale ticket prices' },
        { src: '/media/concert-scalping/image9.png', alt: 'Secondary market price premium data chart' },
        { src: '/media/concert-scalping/image11.jpeg', alt: 'Fans lining up to purchase tickets' },
        { src: '/media/concert-scalping/image12.jpeg', alt: 'Supply and demand analysis of the live music market' },
        { src: '/media/concert-scalping/image13.jpeg', alt: 'Screenshot of a ticket platform sales interface' },
      ],
    },
  },
  {
    slug: 'zibo-bbq', number: '02', category: 'attention-economy',
    titleEn: 'Zibo Grills Its Way to Viral Fame',
    titleZh: 'How digital attention converted into real tourism dollars — and whether the city can sustain the heat.',
    conceptEn: 'Attention Economy', conceptZh: '注意力经济',
    readTime: '5 min', section: 'City',
    summary: 'Zibo turned online hype into real tourism dollars: millions of visitors, a 2,000% booking spike, and a 73% consumption jump. But the real story isn’t the grill — it’s whether the city can sustain the heat after the hashtag fades.',

    body: [
      ‘ZIBO, China — On March 5, the hashtag “University Students Flock to Zibo for Barbecue” trended as the top topic on the Douyin app. Numerous college students in Shandong Province visited Zibo this spring to express their gratitude to the local government for its warm hospitality during the pandemic. Videos showcasing their delightful barbecue experiences quickly went viral, creating the initial wave of enthusiasm among young people.’,

      ‘On April 8, influential vlogger Super B Tai posted a review video highlighting Zibo’s outstanding barbecue stalls, all of which he praised for the abundance and quality of the food. Within three hours, the video garnered half a million likes and was subsequently reposted by the official Douyin account of People’s Daily, China’s leading newspaper.’,

      ‘Following the viral spread of the “Zibo Barbecue” trend, many food bloggers and online influencers flocked to Zibo to experience and document the phenomenon. Since March, over 285,000 related online posts containing the keywords “Zibo” and “barbecue” have been generated, with an average daily dissemination rate of 10,179 posts. The videos related to Zibo’s barbecue culture have accumulated over 1.38 billion views, while the related topics on Weibo have been read over 230 million times. By any measure, “Zibo Barbecue” became one of the most widely discussed topics in China.’,

      { type: ‘image’, src: ‘/media/zibo-bbq/image2.jpeg’, alt: ‘Food bloggers livestream from a barbecue street in Zibo’, caption: ‘Food bloggers livestream from a barbecue street in Zibo.’ },

      ‘Major official media outlets, including CCTV, Xinhua News Agency, and People’s Daily, swiftly reported on the rising popularity of Zibo’s barbecue culture. The Director of Zibo’s Tourism and Culture Bureau personally addressed the media and live-streaming audiences, introducing the unique way of enjoying Zibo barbecue: “Grilled meat and vegetables on iron skewers, served with special barbecue sauce, chili powder, and cumin, then wrapped in a pancake along with scallions.”’,

      ‘To accommodate the growing interest, the Zibo government implemented a series of convenient policies. On March 31, the National Railway Administration launched the first dedicated barbecue train service from Jinan to Zibo, offering gifts and city guidebooks to visiting tourists. Within the city, 21 specialized barbecue bus routes were established, covering all popular barbecue shops in the urban area.’,

      ‘On April 16, a video of a tourist who paid 20 yuan for a pancake that was originally priced at 6 yuan quickly gained attention online. In response, the Zibo government launched initiatives to rectify various issues related to restaurant, hotel, and transportation fees. Meanwhile, local residents actively participated in efforts to enhance the city’s image. Taxi drivers organized free transportation services for tourists at the train station, and locals presented visitors with local delicacies while encouraging them to enjoy the barbecue, even at the expense of their own dining and parking spaces. Barbecue shop owners would proactively recommend other delicious barbecue establishments to minimize customers’ waiting time.’,

      { type: ‘image’, src: ‘/media/zibo-bbq/image1.jpeg’, alt: ‘A customer grills skewers over a small stove at a Zibo barbecue stall’, caption: ‘A customer grills skewers over a small stove at a Zibo barbecue stall.’ },

      ‘During the May Day holiday, the Zibo government organized a dedicated “Barbecue Festival,” attracting a large number of tourists who came to experience the city’s warmth and hospitality. Over the five-day holiday, Zibo welcomed a total of over 4.8 million visitors, resulting in a 73% increase in tourism consumption compared to April. Tourism bookings also grew by 2,000% compared to the previous year, catapulting Zibo to the top of the list of popular tourist destinations nationwide.’,

      { type: ‘image’, src: ‘/media/zibo-bbq/image3.jpeg’, alt: ‘A chef prepares skewers in a Zibo restaurant kitchen’, caption: ‘A chef prepares skewers in a Zibo restaurant kitchen.’ },

      ‘Leveraging the power of online platforms and social media, barbecue has become a calling card for Zibo — a textbook case of how digital attention converts into tourism revenue. Yet the real challenge is whether the city can sustain this momentum or face diminishing returns once the novelty fades. Zibo is now exploring long-term branding strategies to turn a viral moment into lasting growth.’,
    ],

    lensExplanation: 'The attention economy treats public focus as a scarce, monetizable resource. Zibo’s barbecue phenomenon is a textbook case: a single hashtag triggered 1.38 billion video views, which converted into tourism spending, government infrastructure investment, and a national city brand — all within weeks.',
    whoGains: 'Zibo’s hospitality, dining, and transportation sectors saw immediate revenue surges. The city gained a national brand virtually overnight. Content creators and platforms profited from massive engagement. Local businesses experienced unprecedented demand during the holiday boom.',
    whoPays: 'Local residents bore the costs of congestion, rising prices, and strained public services. The government committed substantial resources to manage the influx of 4.8 million visitors. Competing destinations lost tourism share. The city faces the risk of overinvestment if the trend fades.',
    pullQuote: 'The real story isn\'t the grill — it\'s whether the city can sustain the heat after the hashtag fades.',
    takeaway: 'Zibo turned a viral hashtag into a national tourism phenomenon and a 2,000% booking surge. But attention is rented, not owned. The real test is whether the city can build lasting brand equity before the novelty wears off.',

    visualStyle: 'flame-grill', accentColor: '#CC5500',
    keyStats: {
      bigNumber: '4.8M',
      bigLabel: 'Visitors during the May Day holiday',
      compareA: { value: '1.38B', label: 'Douyin video views' },
      compareB: { value: '+2,000%', label: 'Tourism bookings YoY' },
    },
    media: {
      caption: 'MULTIMEDIA',
      video: { src: '/media/zibo-bbq/video.mp4', type: 'video/mp4', caption: 'Video report on the Zibo barbecue phenomenon' },
      audio: { src: '/media/zibo-bbq/audio.wav', type: 'audio/wav', caption: 'Audio report' },
      images: [
        { src: '/media/zibo-bbq/image1.jpeg', alt: 'Customer grilling skewers at a Zibo barbecue stall' },
        { src: '/media/zibo-bbq/image2.jpeg', alt: 'Food bloggers livestreaming from Zibo barbecue street' },
        { src: '/media/zibo-bbq/image3.jpeg', alt: 'A chef preparing skewers in a Zibo restaurant kitchen' },
      ],
    },
  },
  {
    slug: 'clothing-sizes', number: '03', category: 'cost-control',
    titleEn: 'When “Large” Isn\'t Large Enough',
    titleZh: 'The economics behind shrinking women\'s clothing sizes.',
    conceptEn: 'Cost Control & Standards', conceptZh: '成本控制与标准缺失',
    readTime: '5 min', section: 'Body',
    summary: 'Across China\'s e-commerce platforms, women\'s clothing sizes are shrinking — a trend driven by cold cost calculations that shift the burden onto consumers\' bodies and mental health.',

    body: [
      'SHANGHAI — Browse any major Chinese e-commerce platform for women’s clothing and the pattern is unmistakable: “one size fits all” labels dominate listings, “S” and “XS” sizes receive promotional pricing, and garments labeled “large” correspond to what older sizing standards would have called medium. For millions of female shoppers, the experience is the same: clothes that should fit do not.',
      'Industry analysts say the primary driver is economic. Every additional size a brand produces requires a separate pattern, production run, and inventory management unit. By narrowing the size range and labeling generously, fast-fashion brands and e-commerce white-label sellers cut production costs and accelerate inventory turnover. “It’s not about aesthetics first,” one supply-chain researcher said. “It’s about reducing stock-keeping complexity.”',
      'But cost control alone cannot explain why consumers accept it. A second mechanism is at work: the commodification of thinness. When social media platforms and fashion marketing converge on a single body ideal, “fitting into small sizes” becomes a status signal. Brands are selling more than fabric — they are selling inclusion in an aesthetic category.',
      'Information asymmetry sharpens the problem. Online shoppers cannot try on garments before purchasing. They rely on size charts and model photography — both of which brands control. Models are selected for extreme thinness. Images are edited. Key measurements are omitted or averaged misleadingly. Consumers discover the mismatch only after delivery, and the time and psychological cost of returns often deters them from seeking redress.',
      'The externalities are significant. When mainstream brands systematically exclude average body types, body dissatisfaction is amplified at a population level. Eating disorders, cosmetic surgery demand, and weight-loss product consumption all trace partial roots to a clothing market that defines normal bodies as too large. “The brand saves a few centimeters of fabric,” one consumer rights advocate said. “Society picks up the tab in mental health costs.”',
      'China currently lacks enforceable, unified size standards for women’s apparel. Different brands and platforms operate on incompatible sizing systems, depriving consumers of a reliable baseline for comparison. Some countries have moved toward mandatory truthful-size labeling and restrictions on digitally altered advertising images, but regulatory action in China remains limited.',
      'The dilemma is structural: it is both a business choice and a cultural choice. Demanding more sizes from brands also means demanding broader social acceptance of diverse body types. The economic insight is that shrinking sizes are not a random aesthetic trend — they are a deliberate cost-shifting mechanism. Brands lower their costs; consumers absorb the anxiety.',
    ],

    lensExplanation: 'Shrinking women’s clothing sizes can be explained through two economic lenses: cost control, where fewer sizes mean lower production and inventory costs; and information asymmetry, where brands exploit the fact that online shoppers cannot verify fit before purchase, offloading the cost of that uncertainty onto consumers.',
    whoGains: 'Fast-fashion brands and e-commerce sellers reduce production and inventory costs, boosting margins. The appearance and weight-loss industry benefits from sustained demand driven by body dissatisfaction.',
    whoPays: 'Consumers whose bodies fall outside the narrowed size range bear the psychological cost of exclusion and additional shopping time. Young women face systematically amplified body anxiety. Society absorbs the cultural cost of narrowing beauty standards.',
    pullQuote: 'The brand saves a few centimeters of fabric. Society picks up the tab.',
    takeaway: 'Shrinking clothing sizes are not merely a fashion trend. They are a cost-transfer mechanism: brands save on fabric and inventory, while millions of women pay in chronic body insecurity.',

    visualStyle: 'measuring-tape', accentColor: '#8B5E3C',
    keyStats: {
      bigNumber: '65%',
      bigLabel: 'Of brands now use one-size-fits-all',
      compareA: { value: 'M (2010)', label: 'Standard size 10 years ago' },
      compareB: { value: 'M (Today)', label: 'Fits like an XS' },
    },
    media: {
      caption: 'MULTIMEDIA',
      video: { src: '/media/clothing-sizes/video.mp4', type: 'video/mp4', caption: 'Video report on women\'s clothing size shrinkage' },
      audio: { src: '/media/clothing-sizes/audio.mp3', type: 'audio/mpeg', caption: 'Audio story' },
      images: [
        { src: '/media/clothing-sizes/image1.jpeg', alt: 'Side-by-side comparison of women\'s clothing sizes across brands' },
        { src: '/media/clothing-sizes/image2.jpeg', alt: 'Fast-fashion brand size chart analysis' },
        { src: '/media/clothing-sizes/image3.jpeg', alt: 'Examples of one-size-fits-all marketing' },
        { src: '/media/clothing-sizes/image4.jpeg', alt: 'Visual representation of body image and sizing issues' },
        { src: '/media/clothing-sizes/image5.jpeg', alt: 'Consumer feedback and complaints about sizing' },
      ],
    },
  },
  {
    slug: 'child-stars', number: '04', category: 'labor-protection',
    titleEn: 'After the Slap',
    titleZh: 'Who protects child performers on China\'s film sets?',
    conceptEn: 'Labor Protection', conceptZh: '劳动保护与监管成本',
    readTime: '5 min', section: 'Rights',
    summary: 'A viral video of a child actor being struck during filming ignited national outrage — and exposed a regulatory vacuum around underage performers in China\'s entertainment industry.',

    body: [
      'BEIJING — In early 2023, a behind-the-scenes clip showing a young actor being struck across the face by an adult performer during a television drama shoot spread rapidly across Chinese social media. The production team later stated the slap was intended to achieve “artistic realism,” but the public response zeroed in on a deeper question: what protections exist for children who work on film sets?',
      'Labor economists describe child performers as a textbook case of vulnerable workers. They operate in an industry with acute power imbalances, long and unpredictable hours, and contracts often negotiated by parents who may have financial incentives that do not fully align with their child’s welfare. “The child has virtually no bargaining power,” one labor rights researcher said. “And the adults around them may have competing interests.”',
      'This is a classic principal-agent problem. Parents are legally the child’s guardians, entrusted to act in their best interest. But when parents also function as the child’s manager and primary beneficiary of their income, the alignment can break. The economic incentive to accept a lucrative role can override the protective impulse.',
      'The regulatory gap is significant. Compared with South Korea, which tightened child-performer labor laws after a series of high-profile cases, or the United States, where California’s Coogan Act mandates that 15 percent of a child performer’s earnings be placed in a protected trust, China has limited enforceable rules governing working hours, mandatory education, psychological support, or independent on-set supervision for minors.',
      'Establishing such protections imposes real costs: compliance monitoring, dedicated child welfare officers on set, restricted shooting schedules that extend production timelines. “The question is who pays for those costs,” the researcher said. “When the answer is nobody, the protection doesn’t happen.”',
      'There is also a trade-off. Excessively strict regulations could lead production companies to avoid casting children altogether, reducing opportunities for young performers. The challenge is designing rules that protect without excluding.',
      '“Ultimately, it comes down to whether we see child performers as workers or as children first,” the researcher said. “If they are workers, they deserve labor protections. If they are children first, their education and wellbeing must take priority over commercial interests. Either way, someone has to bear the cost. Right now, that cost falls on the child.”',
    ],

    lensExplanation: 'Child performer rights are a labor-protection problem where the cost of safeguards is unallocated, so it defaults to zero. A principal-agent dynamic further complicates matters: parents, acting as agents, may not always prioritize the child’s best interest when financial incentives conflict with protective duties.',
    whoGains: 'Production companies and investors benefit from the marketability of child performers. Some families improve their economic circumstances through their child’s income. The entertainment industry as a whole profits from the “cuteness premium” of young talent.',
    whoPays: 'Child performers bear the physical and psychological toll of adult working conditions. Their education and normal social development are compromised. Society incurs downstream costs when former child stars face mental health struggles and career-transition difficulties as adults.',
    pullQuote: 'When nobody is assigned to pay, protection doesn\'t happen.',
    takeaway: 'Protecting child performers costs money. The question is not whether they should be protected, but who pays — and without mandatory cost allocation to those best positioned to bear it, child-star protections will remain paper promises.',

    visualStyle: 'spotlight-stage', accentColor: '#6B3FA0',
    keyStats: {
      bigNumber: '0',
      bigLabel: 'Enforceable child-performer protections in China',
      compareA: { value: 'China', label: 'No mandatory trust or hour limits' },
      compareB: { value: 'California', label: '15% earnings in protected trust' },
    },
    media: {
      caption: 'MULTIMEDIA',
      images: [
        { src: '/media/child-stars/image4.png', alt: 'Child actor on a television drama set' },
        { src: '/media/child-stars/image7.png', alt: 'Director briefing a young performer between takes' },
        { src: '/media/child-stars/image9.png', alt: 'Film crew on a production set' },
        { src: '/media/child-stars/image10.png', alt: 'Discussion forum on minor performer rights' },
        { src: '/media/child-stars/image11.png', alt: 'Child protection advocacy in entertainment industry' },
        { src: '/media/child-stars/image12.png', alt: 'Behind-the-scenes footage from a child-star production' },
      ],
    },
  },
  {
    slug: 'stray-animals', number: '05', category: 'externalities',
    titleEn: 'Adopt, Don\'t Shop',
    titleZh: 'How China\'s animal rescues survive on love and small donations.',
    conceptEn: 'Externalities & Donations', conceptZh: '外部性与捐赠经济',
    readTime: '5 min', section: 'Public Good',
    summary: 'China\'s stray animal population keeps growing while rescue organizations operate in permanent financial precarity — a sector powered by compassion that reveals the economics of externalities and volunteer labor.',

    body: [
      'GUANGZHOU — On any given evening, volunteers with one of the city’s dozens of animal rescue groups sweep through parks and alleys, trapping stray cats and dogs for sterilization, vaccination, and rehoming. The work is grueling, unpaid, and ceaseless. The organizations that coordinate it are almost uniformly underfunded, relying on sporadic WeChat transfers and charity sales to cover monthly costs that can reach tens of thousands of yuan.',
      'Economists describe stray animals as a negative-externality problem. When a person abandons a pet, the private benefit — freedom from the cost and responsibility of care — is fully captured by the individual. But the costs — public health risks from unvaccinated animals, noise complaints, sanitation issues — are distributed across the entire community. The person who creates the problem does not pay for its consequences.',
      'Animal rescue, meanwhile, produces positive externalities. When a rescue group sterilizes and rehomes a stray, the entire neighborhood benefits from reduced disease risk and fewer nuisance animals. But the rescue group cannot charge every beneficiary for this service. Economists classify such services as public goods: everyone gains from them, yet no single person has sufficient incentive to fund them alone.',
      'This structural mismatch explains the sector’s chronic funding crisis. A typical rescue organization faces fixed monthly costs for rent, veterinary care, food, and sterilization surgeries that can exceed 30,000 yuan. On the revenue side, the same organization depends on unpredictable small donations and volunteer labor. “We’re always one bad month away from crisis,” one shelter operator said.',
      'The economics of volunteer labor are particularly striking. Most Chinese rescue groups rely almost entirely on unpaid workers who clean kennels, transport animals, manage adoption listings, and handle administrative tasks in their spare time. Their labor has enormous social value but is entirely invisible in GDP accounting. The true cost of rescue work — including volunteer hours — is systematically underestimated.',
      'Some economists argue the solution requires internalizing the externalities: imposing an abandonment fee on pet purchases, mandating microchip registration, subsidizing sterilization, or requiring pet owners to carry liability insurance. Cities including Guangzhou and Shenzhen have begun experimenting with trap-neuter-return programs, and some municipalities are exploring administrative penalties for abandonment.',
      '“The sector doesn’t lack compassion,” the shelter operator said. “It lacks a funding model. When the positive externalities of rescue can’t be converted into stable revenue, and the negative externalities of abandonment can’t be traced back to the person responsible, love and small donations can only carry you so far.”',
    ],

    lensExplanation: 'Stray animal rescue sits at the intersection of multiple economic concepts. Abandonment generates negative externalities borne by society, while rescue produces positive externalities that cannot be efficiently charged for. Rescue organizations depend almost entirely on small donations and volunteer labor — a non-institutionalized funding model that keeps the sector in permanent resource scarcity.',
    whoGains: 'Entire communities benefit from the public-health and safety gains produced by rescue organizations’ sterilization, vaccination, and adoption work. Adopters acquire pets at very low cost. Some platforms and content creators profit from rescue-related engagement and emotional content.',
    whoPays: 'Volunteers contribute massive amounts of unpaid labor, absorbing physical exhaustion and emotional strain. Rescue leaders operate under persistent financial pressure. Donors collectively contribute significant sums without institutionalized safeguards or sustainability.',
    pullQuote: 'We\'re always one bad month from crisis.',
    takeaway: 'Stray animal rescue suffers not from a shortage of compassion but from a shortage of institutional design. When the positive externalities of rescue cannot be converted into stable funding, and the negative externalities of abandonment cannot be traced to perpetrators, a model built on love and spare change has structural limits.',

    visualStyle: 'paw-heart', accentColor: '#C06014',
    keyStats: {
      bigNumber: '¥30K',
      bigLabel: 'Monthly cost to run a rescue shelter',
      compareA: { value: '¥0', label: 'Cost to abandon a pet' },
      compareB: { value: '¥30,000', label: 'Monthly rescue operating cost' },
    },
    media: {
      caption: 'MULTIMEDIA',
      video: { src: '/media/stray-animals/video.mp4', type: 'video/mp4', caption: 'Video report on stray animal rescue operations' },
      audio: { src: '/media/stray-animals/audio.mp3', type: 'audio/mpeg', caption: 'Audio story' },
      images: [
        { src: '/media/stray-animals/image5.jpeg', alt: 'A stray cat on a city street' },
        { src: '/media/stray-animals/image9.png', alt: 'Shelter volunteers caring for rescued dogs' },
        { src: '/media/stray-animals/image10.png', alt: 'Animal rescue organization promotional material' },
        { src: '/media/stray-animals/image11.png', alt: 'Adoption event for stray animals' },
        { src: '/media/stray-animals/image12.png', alt: 'Daily care routine at a rescue shelter' },
        { src: '/media/stray-animals/image13.png', alt: 'Rescue data and outcomes statistics' },
        { src: '/media/stray-animals/image16.png', alt: 'Volunteers with rescued animals' },
      ],
    },
  },
  {
    slug: 'student-films', number: '06', category: 'creator-economy',
    titleEn: 'A Horror Film in a Dark Dorm',
    titleZh: 'Why student creators go viral online but get average grades in class.',
    conceptEn: 'Creator Economy', conceptZh: '创作者经济',
    readTime: '5 min', section: 'Creator',
    summary: 'A three-minute short filmed with a phone and a desk lamp earned millions of Bilibili views but a middling class grade. The disconnect reveals two systems for valuing creative work.',

    body: [
      'BEIJING — Using a smartphone, a desk lamp, and a dormitory corridor left dark by a water outage, a student at the Communication University of China produced a three-minute horror short that surpassed one million views on the video platform Bilibili. The production cost was near zero. The cast was the filmmaker’s roommates. The editing software was free.',
      'Online commenters praised its pacing, shot composition, and atmosphere. But in the classroom, the same film received only a moderate grade. The disconnect is not a story about unfair grading — it is a story about two fundamentally different systems for valuing creative work, each with its own logic.',
      'On content platforms, value is measured in attention: view counts, likes, shares, and comment density. Platform algorithms reward high engagement and completion rates, favoring content that grabs viewers quickly and provokes an emotional response. Under this system, a student filmmaker’s low budget is not a liability but an advantage — it signals authenticity and resourcefulness, qualities that algorithm-driven audiences reward.',
      'Academic evaluation measures a different set of values: narrative coherence, technical proficiency, thematic depth, and scholarly rigor. These criteria align more closely with traditional film-industry standards and pedagogical goals. They reward work that demonstrates systematic training — a “standard product,” in economic terms.',
      '“Both systems are internally consistent,” a media studies researcher said. “The problem arises when a creator tries to satisfy both simultaneously and discovers they reward different things.”',
      'A deeper structural issue is the winner-take-all dynamic of platform economics. The volume of content uploaded to short-video and user-generated-content platforms grows exponentially, while total user attention is relatively fixed. The result is a superstar effect: a tiny fraction of creators capture the vast majority of views, while most receive almost nothing for their labor — including work that might score highly in an academic evaluation but lacks “internet appeal.”',
      'For student creators, the temptation to optimize for attention is powerful. Platform metrics offer immediate, quantifiable validation that course grades cannot match. But the algorithms and audience tastes that confer virality shift rapidly, and chasing them can come at the expense of the narrative craft and technical foundation that constitute a creator’s long-term competitive advantage.',
      '“The tension isn’t about which system is right,” the researcher said. “It’s about recognizing that they are different. Students who understand both — and can navigate the gap between them — are the ones who build sustainable creative careers.”',
    ],

    lensExplanation: 'The creator economy empowers individuals to produce content at near-zero cost and distribute it through platforms where attention converts into reputation and opportunity. But platform algorithms optimize for engagement, not craft, while academic evaluation rewards systematic training. The winner-take-all structure means most creators’ labor generates no economic return.',
    whoGains: 'Platforms benefit from a vast supply of free student content that fills their libraries and generates advertising revenue. The small fraction of creators who go viral gain industry attention and career opportunities. Audiences consume creative work at zero monetary cost.',
    whoPays: 'The majority of student creators invest substantial time and creativity with little economic or academic return. Chasing viral appeal can erode systematic skill development. Algorithmic unpredictability generates persistent psychological pressure.',
    pullQuote: 'The internet rewards attention. The classroom rewards craft.',
    takeaway: 'Student creators operate not in a simple meritocracy of talent but at the intersection of two evaluation systems. The internet rewards attention; the classroom rewards craft. Those who learn to navigate both — without being captured by either — are the real winners of the creator economy.',

    visualStyle: 'camera-lens', accentColor: '#2C6E8F',
    keyStats: {
      bigNumber: '¥0',
      bigLabel: 'Production budget of the viral short',
      compareA: { value: '1M+', label: 'Bilibili views' },
      compareB: { value: 'B', label: 'Course grade received' },
    },
    media: {
      caption: 'MULTIMEDIA',
      video: { src: '/media/student-films/video.mov', type: 'video/quicktime', caption: 'Original student horror short film' },
      audio: { src: '/media/student-films/audio.mp3', type: 'audio/mpeg', caption: 'Audio story' },
      images: [
        { src: '/media/student-films/image1.png', alt: 'Student film crew on location' },
        { src: '/media/student-films/image24.png', alt: 'Post-production editing session' },
        { src: '/media/student-films/image25.png', alt: 'Student director at the monitor' },
        { src: '/media/student-films/image39.png', alt: 'Bilibili playback interface for student film' },
        { src: '/media/student-films/image41.png', alt: 'Comparison of academic grading criteria and online feedback' },
        { src: '/media/student-films/image42.png', alt: 'Low-budget set design and lighting setup' },
        { src: '/media/student-films/image54.png', alt: 'Behind-the-scenes of student production' },
      ],
    },
  },
];

export default articles;
