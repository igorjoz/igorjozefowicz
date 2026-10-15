export default function ArticleDates({ article, labels }) {
    if (!article?.publishedAt) return null;
    return <div className="article-dates">
        <span>{labels.published}: <time dateTime={article.publishedAt}>{article.publishedDate}</time></span>
        {article.updatedAt && <span>{labels.updated}: <time dateTime={article.updatedAt}>{article.updatedDate}</time></span>}
    </div>;
}
