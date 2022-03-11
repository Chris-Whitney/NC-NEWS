import react from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../Utils/api";
import { getCommentsForArticle } from "../Utils/api";
import { VoteUpdater } from "./VoteUpdater";
import { SortBy } from "./SortBy";

export function Articles({ topicFilter }) {

  const [loading, setLoading] = useState(false);

  const [articles, setArticles] = useState([]);

  const [sortBy, setSortBy] = useState("created_at");

  const [voteUpdater, setVoteUpdater] = useState(0);

  useEffect(() => {
    getArticles(sortBy, topicFilter).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setLoading(true);
    });
  }, [sortBy, topicFilter]);

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
                to={`/${article.article_id}`}
                className="articles-title-link">
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
                {article.created_at}
              </p>
              {/* <p className="articles-body">{article.body}</p> */}
              <Link
                to={`/${article.article_id}`}
                className="articles-comments-btn"
              >
                {article.comment_count} Comments{" "}
              </Link>
              <VoteUpdater
                votes={article.votes}
                articleId={article.article_id}
                setVoteUpdater={setVoteUpdater}
              />{" "}
              votes
            </li>
          );
        })}
      </ul>
    </div>
    ) : <p>loading...</p>}
    </>
  );
}
