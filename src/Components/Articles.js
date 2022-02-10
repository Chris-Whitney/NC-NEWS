import react from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { getCommentsForArticle } from "../api";
import { VoteUpdater } from "./VoteUpdater";
import { SortBy } from "./SortBy";

export function Articles({topicFilter}) {
  const [articles, setArticles] = useState([]);
  
  const [sortBy, setSortBy] = useState("created_at")
  

  const [voteUpdater, setVoteUpdater] = useState(0);

  useEffect(() => {
    getArticles(sortBy, topicFilter).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [sortBy, topicFilter]);

  // useEffect(() => {
  //     getArticles(topicFilter).then((articlesFromApi) => {
  //         setArticles(articlesFromApi)
  //     })
  // }, [topicFilter])

  return (
    <div className="articles-div">
      <SortBy sortBy={sortBy} setSortBy={setSortBy}/>
      <ul>
        {articles.map((article) => {
          return (
            <li className="articles-li" key={article.article_id}>
              <h2 className="articles-title">{article.title}</h2>
              <p className="articles-topic">Topic: {article.topic}, posted by {article.author} {article.created_at}</p>
              <p className="articles-body">{article.body}</p>
              <Link
                to={`/${article.article_id}`}
                className="articles-comments-btn"
              >
                {article.comment_count} Comments{" "}
              </Link>
              <VoteUpdater votes={article.votes} articleId={article.article_id} setVoteUpdater={setVoteUpdater}/> votes
            </li>
          );
        })}
      </ul>
    </div>
  );
}
