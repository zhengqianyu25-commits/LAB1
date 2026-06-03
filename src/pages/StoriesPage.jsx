import articles from '../data/articles';
import StoryCarousel from '../components/stories/StoryCarousel';
import StoryStrip from '../components/stories/StoryStrip';
import SectionTitle from '../components/common/SectionTitle';

export default function StoriesPage() {
  return (
    <div className="page-enter">
      <section className="container-main pt-12 md:pt-16 pb-8">
        <SectionTitle subtitle="All Stories">All Stories</SectionTitle>

        <StoryCarousel articles={articles} />

        <div className="flex flex-col gap-0 mt-10">
          {articles.map((a) => (
            <StoryStrip key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </div>
  );
}
