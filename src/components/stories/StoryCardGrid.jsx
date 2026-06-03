import StoryCard from './StoryCard';

export default function StoryCardGrid({ articles }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, i) => (
        <StoryCard key={article.slug} article={article} index={i} />
      ))}
    </div>
  );
}
