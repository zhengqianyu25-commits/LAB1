import { Link } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';

const members = [
  { name: 'Fang Yiran', role: 'Editor-in-Chief', photo: import.meta.env.BASE_URL + 'media/fangyiran.jpg', desc: 'Oversees editorial direction, approves final content, and ensures every story meets the site\'s clarity and accuracy standards.' },
  { name: 'Tang Yani', role: 'Executive Producer', photo: import.meta.env.BASE_URL + 'media/tangyani.jpg', desc: 'Manages production workflow, coordinates contributors, and ensures timely delivery of multimedia stories.' },
  { name: 'Ma Zihan', role: 'Reviewing Expert', photo: import.meta.env.BASE_URL + 'media/mazihan.png', desc: 'Reviews factual accuracy, checks sources, and verifies data interpretation before publication.' },
  { name: 'Zheng Qianyu', role: 'Creative Director', photo: import.meta.env.BASE_URL + 'media/zhengqianyu.jpg', desc: 'Defines visual identity, oversees layout and graphics, and ensures consistency across all story formats.' },
  { name: 'Zhu Kaixue', role: 'Chief Commentator', photo: import.meta.env.BASE_URL + 'media/zhukaixue.jpg', desc: 'Writes opinion-led analysis and provides editorial perspective on social and cultural issues.' },
  { name: 'Mo Siyang', role: 'Chief Economic Analyst', photo: import.meta.env.BASE_URL + 'media/mosiyang.jpg', desc: 'Leads economics-angle storytelling, interprets market signals and incentives in each feature.' },
];

export default function TeamPage() {
  return (
    <div className="page-enter">
      <section className="container-main pt-12 md:pt-16 pb-8">
        <SectionTitle subtitle="Team">Our Team</SectionTitle>

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            No Filter Lab is an explanatory news website built by six students from Communication University of China. We reject emotional viral narratives and focus on decoding social phenomena through an economic lens.
          </p>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            Division of Labor: A Relay Race — To avoid editing conflicts, we adopted a workflow of "Parallel Writing in Shared Docs + Single-Person Relay." Each member independently handled one in-depth article and one website module.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {members.map((m, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 p-5 border" style={{ borderColor: 'var(--color-border)', borderRadius: '2px' }}>
              {m.photo && (
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 shrink-0" style={{ borderColor: 'var(--color-accent)' }}>
                    <img src={m.photo} alt={m.name} className="w-full h-full object-cover" style={{ objectPosition: m.name === 'Fang Yiran' ? '50% 35%' : m.name === 'Tang Yani' ? '50% 0%' : 'center', transform: m.name === 'Tang Yani' ? 'scale(1.45) translateY(-4px)' : 'none' }} loading="lazy" />
                  </div>
                </div>
              )}
              <div className="md:w-36 shrink-0">
                <p className="text-sm font-display font-medium" style={{ color: 'var(--color-text)' }}>{m.name}</p>
                <p className="text-[0.6rem] font-semibold tracking-wider uppercase" style={{ color: 'var(--color-accent)' }}>{m.role}</p>
              </div>
              <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--color-text-secondary)' }}>{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/about" className="text-xs font-semibold tracking-wider uppercase hover:opacity-70" style={{ color: 'var(--color-accent)' }}>
            &larr; Back to About
          </Link>
        </div>
      </section>
    </div>
  );
}
