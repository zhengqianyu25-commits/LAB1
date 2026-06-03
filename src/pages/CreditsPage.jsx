import SectionTitle from '../components/common/SectionTitle';

const members = [
  { id: 'A', name: 'Member A', story: 'Concert Ticket Scalping', module: 'Homepage Hero & Headline Section', tasks: 'Headline story page; hero section, site name, slogan, lead story card, and Stories entrance button.', workload: 'Heavy' },
  { id: 'B', name: 'Member B', story: 'Zibo BBQ Tourism Boom', module: 'Stories Overview Page', tasks: 'Zibo story page; 6 story cards with summaries, keywords, and Read More links.', workload: 'Heavy' },
  { id: 'C', name: 'Member C', story: 'Women\'s Clothing Size Shrinkage', module: 'Article Template & Visual Standards', tasks: 'Clothing story page; standard article template with unified layout for titles, body, video, explanation box, and buttons.', workload: 'Heavy' },
  { id: 'D', name: 'Member D', story: 'Child Star Rights Protection', module: 'Lab Notes Economics Concept Cards', tasks: 'Child star story page; 6 economics concept cards forming the site\'s signature module.', workload: 'Medium' },
  { id: 'E', name: 'Member E', story: 'Stray Animal Rescue', module: 'About, Credits & Source Attribution', tasks: 'Stray animal story page; project positioning, audience, story selection criteria, source attribution, and team contributions.', workload: 'Medium' },
  { id: 'F', name: 'Member F', story: 'Student Filmmaking', module: 'Mobile Adaptation, Link Testing & QR Code', tasks: 'Student film story page; mobile layout checks, all links, video/image loading, QR code generation, and final submission documents.', workload: 'Heavy' },
];

export default function CreditsPage() {
  return (
    <div className="page-enter">
      <section className="container-main pt-12 md:pt-16 pb-8">
        <SectionTitle subtitle="Credits">Credits</SectionTitle>
      </section>

      <section className="container-main pb-8">
        <div className="max-w-3xl mb-12">
          <p className="text-paper-text-secondary leading-relaxed mb-4">
            This project uses a flat collaboration model. Each member has equal standing and is responsible for one story page and one site module, ensuring visible individual contributions and a balanced workload.
          </p>
          <p className="text-sm text-paper-text-muted leading-relaxed">
            Formula: Each member = Story Owner + Site Module Owner. All major decisions &mdash; including site style, homepage order, headline style, and final structure &mdash; are made collectively by the group.
          </p>
        </div>

        <div className="space-y-4">
          {members.map((member) => (
            <div
              key={member.id}
              className="border border-paper-border rounded-xl p-5 md:p-6 hover:border-paper-accent/20 transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0 md:justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xl font-bold text-paper-accent/25 select-none w-8">
                    {member.id}
                  </span>
                  <span className="font-bold text-paper-text text-lg">
                    {member.name}
                  </span>
                </div>
                <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-mono border border-paper-border text-paper-text-muted">
                  {member.workload}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-11">
                <div>
                  <span className="text-xs font-mono text-paper-accent tracking-wider uppercase block mb-1">
                    Story
                  </span>
                  <span className="text-sm text-paper-text-secondary">
                    {member.story}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-mono text-paper-accent tracking-wider uppercase block mb-1">
                    Module
                  </span>
                  <span className="text-sm text-paper-text-secondary">
                    {member.module}
                  </span>
                </div>
              </div>

              <p className="text-xs text-paper-text-muted mt-3 ml-11 leading-relaxed">
                {member.tasks}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-main py-12 border-t border-paper-border">
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-paper-accent tracking-[0.3em] uppercase">
            SOURCES
          </span>
          <h3 className="text-xl font-bold text-paper-text mt-2 mb-4">
            Source Attribution
          </h3>
          <p className="text-sm text-paper-text-secondary leading-relaxed mb-3">
            All news materials are drawn from course-provided reporting materials and publicly available news coverage. Economics explanations were researched and written collaboratively by the team. Site imagery and icons use open-source resources or CSS-generated graphics.
          </p>
          <p className="text-sm text-paper-text-muted leading-relaxed">
            Built with React + Vite + Tailwind CSS. Typography uses system default Chinese font stack (PingFang SC, Microsoft YaHei, Noto Sans SC).
          </p>
        </div>
      </section>
    </div>
  );
}
