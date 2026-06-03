import SectionTitle from '../components/common/SectionTitle';

export default function AboutPage() {
  return (
    <div className="page-enter">
      <section className="container-main pt-12 md:pt-16 pb-8">
        <SectionTitle subtitle="About">About</SectionTitle>
      </section>
      <section className="container-main pb-16">
        <div className="max-w-article space-y-10">
          {[
            { label: 'What', title: 'What We Are', body: 'No Filter Lab is an explanatory journalism site for young readers. We don\'t just tell you what happened — we ask why it happened: who benefits, who bears the costs, and what choices could change the outcome. We use economics to decode social news, youth culture, and public issues.' },
            { label: 'Who', title: 'Our Audience', body: 'Chinese university students aged 18–25 who care about trending topics, consumer trends, live entertainment, urban issues, and the creator economy. Also: journalism and economics students, international readers, and instructors.' },
            { label: 'How', title: 'Editorial Approach', body: 'Flat collaboration with no editor-in-chief. Each member owns one story and one site module. Every story includes a No Filter Lens and a Who Gains / Who Pays breakdown. The goal: three minutes to understand the logic behind any event.' },
          ].map(s => (
            <div key={s.label}>
              <span className="section-label dark-bright-gold">{s.label}</span>
              <h3 className="mt-2 text-xl font-bold font-display dark-bright" style={{ color: 'var(--color-text)' }}>{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed dark-bright" style={{ color: 'var(--color-text-secondary)' }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
