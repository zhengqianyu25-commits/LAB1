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
      'ZIBO, China — On March 5, the hashtag “University Students Flock to Zibo for Barbecue” trended as the top topic on the Douyin app. Numerous college students in Shandong Province visited Zibo this spring to express their gratitude to the local government for its warm hospitality during the pandemic. Videos showcasing their delightful barbecue experiences quickly went viral, creating the initial wave of enthusiasm among young people.',

      'On April 8, influential vlogger Super B Tai posted a review video highlighting Zibo’s outstanding barbecue stalls, all of which he praised for the abundance and quality of the food. Within three hours, the video garnered half a million likes and was subsequently reposted by the official Douyin account of People’s Daily, China’s leading newspaper.',

      'Following the viral spread of the “Zibo Barbecue” trend, many food bloggers and online influencers flocked to Zibo to experience and document the phenomenon. Since March, over 285,000 related online posts containing the keywords “Zibo” and “barbecue” have been generated, with an average daily dissemination rate of 10,179 posts. The videos related to Zibo’s barbecue culture have accumulated over 1.38 billion views, while the related topics on Weibo have been read over 230 million times. By any measure, “Zibo Barbecue” became one of the most widely discussed topics in China.',

      { "type": "image", "src": "/media/zibo-bbq/image2.jpeg", "alt": "Food bloggers livestream from a barbecue street in Zibo", "caption": "Food bloggers livestream from a barbecue street in Zibo." },

      'Major official media outlets, including CCTV, Xinhua News Agency, and People’s Daily, swiftly reported on the rising popularity of Zibo’s barbecue culture. The Director of Zibo’s Tourism and Culture Bureau personally addressed the media and live-streaming audiences, introducing the unique way of enjoying Zibo barbecue: “Grilled meat and vegetables on iron skewers, served with special barbecue sauce, chili powder, and cumin, then wrapped in a pancake along with scallions.”',

      'To accommodate the growing interest, the Zibo government implemented a series of convenient policies. On March 31, the National Railway Administration launched the first dedicated barbecue train service from Jinan to Zibo, offering gifts and city guidebooks to visiting tourists. Within the city, 21 specialized barbecue bus routes were established, covering all popular barbecue shops in the urban area.',

      'On April 16, a video of a tourist who paid 20 yuan for a pancake that was originally priced at 6 yuan quickly gained attention online. In response, the Zibo government launched initiatives to rectify various issues related to restaurant, hotel, and transportation fees. Meanwhile, local residents actively participated in efforts to enhance the city’s image. Taxi drivers organized free transportation services for tourists at the train station, and locals presented visitors with local delicacies while encouraging them to enjoy the barbecue, even at the expense of their own dining and parking spaces. Barbecue shop owners would proactively recommend other delicious barbecue establishments to minimize customers’ waiting time.',

      { "type": "image", "src": "/media/zibo-bbq/image1.jpeg", "alt": "A customer grills skewers over a small stove at a Zibo barbecue stall", "caption": "A customer grills skewers over a small stove at a Zibo barbecue stall." },

      'During the May Day holiday, the Zibo government organized a dedicated “Barbecue Festival,” attracting a large number of tourists who came to experience the city’s warmth and hospitality. Over the five-day holiday, Zibo welcomed a total of over 4.8 million visitors, resulting in a 73% increase in tourism consumption compared to April. Tourism bookings also grew by 2,000% compared to the previous year, catapulting Zibo to the top of the list of popular tourist destinations nationwide.',

      { "type": "image", "src": "/media/zibo-bbq/image3.jpeg", "alt": "A chef prepares skewers in a Zibo restaurant kitchen", "caption": "A chef prepares skewers in a Zibo restaurant kitchen." },

      'Leveraging the power of online platforms and social media, barbecue has become a calling card for Zibo — a textbook case of how digital attention converts into tourism revenue. Yet the real challenge is whether the city can sustain this momentum or face diminishing returns once the novelty fades. Zibo is now exploring long-term branding strategies to turn a viral moment into lasting growth.',
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
      video: { src: 'I6ndDG7Pcmw', type: 'youtube', caption: 'Zibo grills its way to viral fame — video report' },
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
    titleEn: 'After One Slap: Who Protects Child Actors on Set?',
    titleZh: "A Shanghai child actor was slapped for real during filming. His case exposes gaps in China's child performer protections.",
    conceptEn: 'Labor Protection', conceptZh: '劳动保护与监管成本',
    readTime: '5 min', section: 'Rights',
    summary: "A young Shanghai actor was slapped for real during filming, leaving his face visibly red and swollen. His case raises questions about child performers' rights, from safer filming methods to clearer industry standards for shooting hours, meals, and protection from physical harm.",

    body: [
      "SHANGHAI, May 23 — A worrying incident involving child actor Zhou Anxin in Shanghai has sparked widespread attention and concern over rights protection for child performers. The incident took place on the set of a film, where the production team opted for actual physical impact while portraying a scene in which a child is made to cry. After the shooting, the young actor's face remained red and swollen before recovering. His role that day required him to be slapped and cry.",

      { "type": "image", "src": "/media/child-stars/image2.png", "alt": "Crew uses artificial tears instead of forcing the child to cry", "caption": "During a crying scene, the 'Spark Fluorescent' crew used artificial tears instead of forcing the child actor to cry emotionally, aiming to protect the child's psychological well-being." },

      "His mother said, \"After seeing the script, I actually didn't want him to shoot.\" She added, \"I went to the crew and asked whether we could use special effects or stage the action, but they didn't agree.\"",

      "Despite his mother's prior inquiry about the possibility of using a staged action, her suggestion was not adopted because the production team leaned toward presenting an authentic scene. During the actual filming, Zhou Anxin cried real tears after being slapped and did not stop crying after the filming was over. His mother noticed that his face was visibly red and swollen, which made her deeply distressed and upset.",

      "Zhou Anxin is an experienced child actor who has previously appeared in advertisements, TV dramas and films. His mother acknowledges the demands of the production team but genuinely hopes to find better and safer solutions. \"I could sometimes feel that he was under a lot of pressure, having to shoot and do homework, and going back to school to make up for it. Every time I see him exhausted, I think 'I don't want to count it,' but he doesn't tell me himself,\" his mother said.",

      { "type": "image", "src": "/media/child-stars/image1.png", "alt": "Crew prepared toys for the child actor before filming", "caption": "Before filming, the crew prepared toys for the child actor to reduce boredom and help create a more relaxed environment on set." },

      "Numerous child actors are not given special care, and their rights are sometimes violated.",

      "\"The use of child actors in the industry currently relies heavily on the awareness of each crew and lacks a uniform standard,\" said Frank Zhang, Assistant Production Controller at a culture communication company. \"While harsh beatings and forced labor are not common, children are often required to stay up late and shoot long hours, and filming is not purposely scheduled to avoid weekdays to ensure that the children have a normal school day.\"",

      "\"It is also common for children to be treated poorly in order to advance the filming schedule. Due to gaps in national legislation and the lack of default norms in the industry, labor contracts often do not contain provisions specifically addressing the rights of child actors,\" Zhang added.",

      "The lack of explicit legislation and specific regulations to protect child performers exposes them to various risks. Child performers often face issues such as sleep deprivation, long working hours, irregular eating habits and physical injuries.",

      { "type": "image", "src": "/media/child-stars/image3.png", "alt": "Crew member applies artificial tears tested by medical university", "caption": "A crew member applies artificial tears to the child actor during the crying scene. The material was tested in advance by doctoral students at Southern Medical University to confirm it was harmless to children." },

      "For No Filter Lab, the case also shows the hidden cost of production pressure. When a crew saves time by using real physical impact or long shooting hours, that cost may be shifted onto children's bodies, emotions and education.",

      "Against this backdrop, the \"Sparkling Stars\" project team, dedicated to safeguarding the legitimate rights of child actors, has expressed concern about the protection of their rights. The project team has conducted extensive interviews with child performers and agents, developing a set of professional standards aimed at safeguarding the rights of child actors. These standards include defining filming times, meal times and measures to prevent physical harm.",

      "Project leader Yu Hailong expressed hope that more individuals will join efforts to protect the rights of child performers and urged the industry to promptly introduce relevant regulations.",

      { "type": "image", "src": "/media/child-stars/image4.png", "alt": "Crew films child actor while balancing production and child protection", "caption": "The crew films a child actor while trying to balance production needs with the protection of children's rights and mental health." },

      "\"The overall goal of our project is to encourage the community to look at child performers as children in need of help, rather than only treating them as stars,\" Yu said. \"We hope people can focus more on the shadow of rights violations behind their glow. From there, more organizations can be called upon to defend their legal rights.\"",

      { "type": "image", "src": "/media/child-stars/image5.png", "alt": "Staff and child actors take a group photo after the project", "caption": "Staff and child actors take a group photo after the project, which aimed to explore a more child-friendly production model." },
    ],

    lensExplanation: "The case of Zhou Anxin exposes the hidden cost of production pressure. When a crew saves time by using real physical impact or long shooting hours, that cost is shifted onto children's bodies, emotions, and education. The lack of uniform industry standards means child performers' rights depend on individual crew awareness rather than enforceable regulations.",
    whoGains: "Production companies save time and money by avoiding special effects, staged actions, and child-friendly scheduling. The entertainment industry benefits from child performers' marketability without bearing the full cost of their protection.",
    whoPays: "Child performers bear the physical and psychological toll of adult working conditions, sleep deprivation, and irregular schedules. Their education and wellbeing are compromised. Parents face distress watching their children suffer. Society lacks a system to hold production companies accountable.",
    pullQuote: "Look at child performers as children in need of help, rather than only treating them as stars.",
    takeaway: "The Zhou Anxin case reveals that child performer protection in China relies on individual crew awareness rather than enforceable rules. Until uniform standards for filming hours, meals, and physical safety are legislated, the hidden costs of production will continue to fall on the most vulnerable.",

    visualStyle: 'spotlight-stage', accentColor: '#6B3FA0',
    keyStats: {
      bigNumber: '0',
      bigLabel: 'Uniform national standards for child actors in China',
      compareA: { value: 'China', label: 'Relies on individual crew awareness' },
      compareB: { value: 'Sparkling Stars', label: 'Proposed: filming times, meals, anti-harm measures' },
    },
    media: {
      caption: 'MULTIMEDIA',
      images: [
        { src: '/media/child-stars/image1.png', alt: 'Crew prepared toys for child actor before filming' },
        { src: '/media/child-stars/image2.png', alt: 'Artificial tears used instead of forcing child to cry' },
        { src: '/media/child-stars/image3.png', alt: 'Crew member applies tested artificial tears' },
        { src: '/media/child-stars/image4.png', alt: 'Filming while balancing production and child protection' },
        { src: '/media/child-stars/image5.png', alt: 'Group photo after child-friendly production project' },
      ],
    },
  },
  {
    slug: 'stray-animals', number: '05', category: 'externalities',
    titleEn: 'One Cup of Milk Tea: Changing the Fate of Stray Animals',
    titleZh: "How Beijing Adoption Day turns micro-donations into a systematic solution for stray animal welfare.",
    conceptEn: 'Externalities & Donations', conceptZh: '外部性与捐赠经济',
    readTime: '5 min', section: 'Public Good',
    summary: "Beijing's stray animals face numerous challenges in the bustling city. But a group of dedicated volunteers is making a difference through an initiative that treats animal welfare as a logistics and economics problem rather than merely a moral one.",

    body: [
      "BEIJING — Beijing's stray animals face numerous challenges in the bustling city. However, a group of dedicated volunteers is actively working to make a difference through an initiative known as Beijing Adoption Day. While driven by compassion, the initiative also serves as a grassroots response to the social costs imposed by pet overpopulation.",

      { "type": "image", "src": "/media/stray-animals/image1.jpeg", "alt": "The team used low-cost equipment to multi-angle document Beijing Adoption Day", "caption": "The team used low-cost equipment to multi-angle document Beijing Adoption Day, delivering transparent, No Filter coverage of public welfare efforts." },

      "With the aim of curbing the rising stray animal population and addressing associated issues, such as abandonment and neglect, one of the pivotal aspects of Beijing Adoption Day is their \"Monthly Donations\" program. By donating an amount equivalent to the cost of a cup of milk tea each month, people can have a significant impact on the lives of these animals. The donations received help provide much-needed resources, including shelters, food, insulated water bowls during winter, vaccines, and sterilization surgeries for stray animals.",

      "From an economic standpoint, this micro-donation model lowers the barrier to entry for altruism, stabilizing the organization's cash flow similar to a subscription service.",

      "Recognizing that finding loving homes for rescued stray cats and dogs is crucial, Beijing Adoption Day organizes regular pet adoption events. These events serve as a platform for connecting these animals with potential adopters, giving them a chance to become cherished family members. The events not only enable people to find furry companions but also emphasize the significance of adopting rather than buying pets from breeders or stores.",

      "This helps correct the resource misallocation often seen in commercial breeding markets.",

      { "type": "image", "src": "/media/stray-animals/image2.jpeg", "alt": "Adopters fill detailed forms at Beijing Adoption Day", "caption": "Adopters fill detailed forms and receive regular follow-ups. This rule reduces moral hazard and ensures responsible adoption." },

      "In addition to facilitating adoptions, Beijing Adoption Day actively promotes age-appropriate sterilization as part of responsible pet ownership. Through educational campaigns and partnerships with local veterinary clinics, the organization aims to raise awareness about the benefits of spaying and neutering pets. By spreading this crucial message, they hope to prevent future instances of abandonment and reduce the stray animal population in the long run.",

      "The success of Beijing Adoption Day heavily relies on the tireless dedication of passionate volunteers who selflessly invest their time and energy in this noble cause. Motivated solely by their desire to make a positive impact on stray animals' lives, these volunteers do not receive any compensation for their efforts.",

      "Zhu Jiayin, one of the responsible personnel of Beijing Adoption Day, shared her two-year experience with the organization. She mentioned how the extended break brought about by the pandemic allowed her to actively participate in the work of Beijing Adoption Day and contribute to the welfare of vulnerable animals.",

      { "type": "image", "src": "/media/stray-animals/image3.jpeg", "alt": "Beijing Adoption Day volunteers at a weekend event", "caption": "Unlike traditional charities that rely on emotional appeals, this operation runs on professionalized volunteerism. Their use of high-end cameras and audio gear isn't just for show — it's a strategic tool to produce data-backed visual reports." },

      "To maximize their initiatives' impact, Beijing Adoption Day primarily organizes events on weekends. Firstly, many volunteers have their regular jobs during weekdays, making weekends the best available time for their commitment. Secondly, organizing events on weekends attracts larger crowds, increasing exposure for Beijing Adoption Day and spreading awareness about its mission to a wider audience.",

      "Beijing Adoption Day's commitment to improving the lives of stray animals has garnered widespread support from both local residents and the international community. Their efforts have created a paradigm shift in people's attitudes towards animal welfare, leading to increased empathy and compassion for vulnerable animals.",

      "Through advocacy for adoption and responsible pet ownership, Beijing Adoption Day aims to create a future where all animals are treated with kindness and compassion. Their efforts give abandoned cats and dogs hope for second chances. The power of collective action lies not just in good intentions, but in systemic efficiency. By treating animal welfare as a logistics and economics problem rather than merely a moral one, they are proving that even in a chaotic city, rational solutions can save lives.",
    ],

    lensExplanation: "Beijing Adoption Day's micro-donation model — a cup of milk tea per month — lowers the barrier to altruism and stabilizes cash flow like a subscription service. The adoption events correct resource misallocation in commercial breeding markets, while volunteer professionalism builds social trust capital. This is welfare treated as a logistics and economics problem, not just a moral one.",
    whoGains: "Stray animals receive shelter, food, medical care, and adoption opportunities. Donors contribute meaningfully with minimal individual cost. The community benefits from reduced stray populations and increased awareness of responsible pet ownership.",
    whoPays: "Volunteers invest significant unpaid time and energy. The organization relies on unstable micro-donations. Society bears the continuing costs of pet abandonment and overpopulation that the initiative can only partially address.",
    pullQuote: "The power of collective action lies not just in good intentions, but in systemic efficiency.",
    takeaway: "Beijing Adoption Day proves that treating animal welfare as a logistics and economics problem — rather than merely a moral one — can create sustainable, scalable solutions. A cup of milk tea per month, multiplied by a community of donors, can systematically change the fate of stray animals.",

    visualStyle: 'paw-heart', accentColor: '#C06014',
    keyStats: {
      bigNumber: '1 Cup',
      bigLabel: 'Monthly donation — the cost of a milk tea',
      compareA: { value: 'Micro-donation', label: 'Lowers barrier to altruism' },
      compareB: { value: 'Subscription model', label: 'Stabilizes organizational cash flow' },
    },
    media: {
      caption: 'MULTIMEDIA',
      video: { src: '/media/stray-animals/video.mp4', type: 'video/mp4', caption: 'Video report on Beijing Adoption Day' },
      images: [
        { src: '/media/stray-animals/image1.jpeg', alt: 'Low-cost equipment documenting adoption day' },
        { src: '/media/stray-animals/image2.jpeg', alt: 'Adoption forms and volunteer follow-up process' },
        { src: '/media/stray-animals/image3.jpeg', alt: 'Beijing Adoption Day weekend volunteer event' },
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
