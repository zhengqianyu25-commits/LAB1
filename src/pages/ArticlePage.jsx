import { useParams } from 'react-router-dom';
import articles from '../data/articles';
import ArticleHero from '../components/article/ArticleHero';
import ArticleBody from '../components/article/ArticleBody';
import NoFilterLens from '../components/article/NoFilterLens';
import GainPayCard from '../components/article/GainPayCard';
import ArticleTakeaway from '../components/article/ArticleTakeaway';
import MediaSection from '../components/article/MediaSection';
import KeyStats from '../components/article/KeyStats';

import RelatedStories from '../components/article/RelatedStories';
import Engagement from '../components/common/Engagement';
import AudioLink from '../components/article/AudioLink';
import ChartCarousel from '../components/article/ChartCarousel';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="page-enter container-main py-32 text-center">
        <h1 className="text-3xl font-bold text-paper-text mb-4">
          Article Not Found
        </h1>
        <p className="text-paper-text-secondary mb-8">
          No article found for "{slug}".
        </p>
      </div>
    );
  }

  return (
    <div className="page-enter">
      <div className="container-main pt-6 pb-4">
      </div>

      <div className="border-b border-paper-border">
        <ArticleHero article={article} />
      </div>

      <KeyStats data={article.keyStats} />

      <section className="container-main pb-6">
        <div className="article-width flex items-center gap-5">
          <span className="section-label">{article.conceptEn}</span>
          <span className="text-xs opacity-50" style={{ color: 'var(--color-text-muted)' }}>{article.readTime} read</span>
        </div>
      </section>

      <ArticleBody body={article.body} />

      {article.media && <MediaSection media={article.media} />}

      <AudioLink article={article} />

      <ChartCarousel article={article} />

      <NoFilterLens
        conceptEn={article.conceptEn}
        explanation={article.lensExplanation}
      />

      <GainPayCard whoGains={article.whoGains} whoPays={article.whoPays} />

      <ArticleTakeaway takeaway={article.takeaway} />

      <Engagement slug={article.slug} />
      <RelatedStories article={article} />

      <div className="container-main py-8">
        <div className="article-width">
        </div>
      </div>
    </div>
  );
}
