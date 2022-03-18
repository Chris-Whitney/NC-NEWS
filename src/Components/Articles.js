import react from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../Utils/api";
import { getCommentsForArticle } from "../Utils/api";
import { VoteUpdater } from "./VoteUpdater";
import { SortBy } from "./SortBy";
import { formatDate } from "../Utils/api";

export function Articles({ topicFilter }) {

  const {topic } = useParams();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const [articles, setArticles] = useState([]);

  const [sortBy, setSortBy] = useSearchParams({});

  const [voteUpdater, setVoteUpdater] = useState(0);

  const sort = sortBy.get("sort_by");


  useEffect(() => {
    getArticles(topic, sort)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [sort, topicFilter]);

  return (
    <>
      {loading ? (
        <div className="articles-div">
          <SortBy sortBy={sortBy} setSortBy={setSortBy} />
          <ul className="articles-ul">
            {articles.map((article) => {
              return (
                <li className="articles-li" key={article.article_id}>
                  <Link
                    to={`articles/${article.article_id}`}
                    className="articles-title-link"
                  >
                    <h2 className="articles-title">{article.title}</h2>
                  </Link>
                  <p className="articles-topic">
                    Topic:{" "}
                    <span style={{ color: "rgb(253, 118, 0)" }}>
                      {article.topic}
                    </span>
                    , posted by{" "}
                    <span style={{ color: "rgb(253, 118, 0)" }}>
                      {article.author}
                    </span>{" "}
                    <br></br>
                    {formatDate(article.created_at)}
                  </p>
                  <Link
                    to={`/articles/${article.article_id}`}
                    className="articles-comments-btn"
                  >
                    {article.comment_count} Comments{" "}
                  </Link>
                  <VoteUpdater
                    votes={article.votes}
                    articleId={article.article_id}
                    setVoteUpdater={setVoteUpdater}
                  />{" "}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
