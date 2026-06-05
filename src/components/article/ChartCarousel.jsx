import { useState } from 'react';
import { Link } from 'react-router-dom';

const chartData = {
  'concert-scalping': {
    category: 'scarcity',
    title: 'Price Ceiling',
    charts: [
      { src: 'media/lab-notes/scarcity-1.png', caption: '70% of tickets come from official channels, but 30% still flow through other channels.' },
    ],
  },
  'zibo-bbq': {
    category: 'attention-economy',
    title: 'Attention Economy',
    charts: [
      { src: 'media/lab-notes/ae-1.png', caption: 'Zibo Barbecue search index skyrocketed 181,376% year-on-year on Douyin.' },
      { src: 'media/lab-notes/ae-2.png', caption: 'UGC video supply jumped to 10,000 videos on April 29 alone.' },
      { src: 'media/lab-notes/ae-3.jpeg', caption: 'Zibo Station recorded 94,594 arrivals on peak day of the holiday.' },
      { src: 'media/lab-notes/ae-4.jpeg', caption: 'Gen Z (18-30) drove 58% of Zibo barbecue content engagement.' },
      { src: 'media/lab-notes/ae-5.jpeg', caption: 'Female users accounted for 55.51% of engaged viewers.' },
    ],
  },
  'clothing-sizes': {
    category: 'cost-control',
    title: 'Coordination Failure',
    charts: [
      { src: 'media/lab-notes/cc-1.png', caption: '31.9% of female netizens weigh themselves once a day.' },
      { src: 'media/lab-notes/cc-2.png', caption: '45.9% of netizens think they need to lose weight.' },
      { src: 'media/lab-notes/cc-3.png', caption: '47% reported emotional issues (anxiety, depression) in the past year.' },
    ],
  },
  'child-stars': {
    category: 'labor-protection',
    title: 'Labor Protection',
    charts: [
      { src: 'media/lab-notes/lp-1.png', caption: 'Step into the role of Oscar — a child actor navigating home, school and film set.' },
      { src: 'media/lab-notes/lp-2.png', caption: 'Global child labor rate remains a concern, especially in Central Asia, South America and Africa.' },
    ],
  },
  'stray-animals': {
    category: 'externalities',
    title: 'Externalities & Public Good',
    charts: [],
  },
  'student-films': {
    category: 'creator-economy',
    title: 'Creator Economy',
    charts: [
      { src: 'media/lab-notes/ce-1.png', caption: 'Horror sits inside "others" (38 films), far behind romance (39) and feature films (133).' },
      { src: 'media/lab-notes/ce-2.png', caption: 'Horror\'s share of China\'s annual box office: always below 3%, often below 1%.' },
    ],
  },
};

export default function ChartCarousel({ article }) {
  const data = chartData[article.slug];
  const [lightbox, setLightbox] = useState(null);
  if (!data || data.charts.length === 0) return null;

  return (
    <section className="container-main py-6">
      <div className="article-width">
        <span className="section-label mb-4 block">Data Behind the Story</span>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
          {data.charts.map((chart, i) => (
            <div key={i} className="group border rounded-sm overflow-hidden cursor-zoom-in transition-all duration-300 hover:border-[var(--color-accent)]" style={{ borderColor: 'var(--color-border)', background: 'rgba(255,255,255,0.7)' }} onClick={() => setLightbox(chart)}>
              <div className="aspect-[4/3] overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
                <img src={chart.src} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <p className="px-3 py-2 text-[0.7rem] leading-snug opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--color-text-secondary)' }}>{chart.caption}</p>
            </div>
          ))}
        </div>
        <Link to={`/lab-note/${data.category}`} className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-all hover:opacity-70" style={{ color: 'var(--color-accent)' }}>
          Explore {data.title} Data &rarr;
        </Link>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.9)' }} onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white text-3xl opacity-60 hover:opacity-100">&times;</button>
          <img src={lightbox.src} alt="" className="max-w-full max-h-[90vh] object-contain" onClick={e => e.stopPropagation()} />
          <p className="absolute bottom-8 text-sm text-white/60 text-center max-w-lg px-4">{lightbox.caption}</p>
        </div>
      )}
    </section>
  );
}
