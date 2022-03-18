import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleArticle } from "../Utils/api";
import { Comments } from "./Comments";
import { VoteUpdater } from "./VoteUpdater";
import { Error } from './Error';
import { formatDate } from "../Utils/api";

export function SingleArticle() {
  const { article_id } = useParams();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [singleArticle, setSingleArticle] = useState({});

  useEffect(() => {
    let unmounted = false;
    getSingleArticle(article_id).then((articleFromApi) => {
      if (!unmounted) {
        setSingleArticle(articleFromApi);
        setLoading(true);
      }
      
    })
    .catch((err) => {
      setError(err.response)
    })
    return () => {unmounted = true}
  }, [article_id, singleArticle.votes]);

  return (
    <>
    {error ?  <Error error={error} /> : loading ? (
    <div>
      <ul className="sing-art-li">
        <h2 className="sing-art-title">{singleArticle.title}</h2>
        <li className="sing-art-body">{singleArticle.body}</li>
        <br></br>
        <li className="sing-art-author">
          Posted by{" "}
          <span style={{ color: "rgb(253, 118, 0)" }}>
            {singleArticle.author}
          </span>{" "}
          {formatDate(singleArticle.created_at)}
          <br></br>
          <VoteUpdater votes={singleArticle.votes} articleId={singleArticle.article_id}/>
        </li>
      </ul>
      <h3 className="sing-art-h3">Comments:</h3>
      <Comments />
    </div>
    ) : <p>loading...</p>}
    </>
  );
}
