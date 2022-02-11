import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleArticle } from "../Utils/api";
import { Comments } from "./Comments";

export function SingleArticle() {
  const { article_id } = useParams();

  const [singleArticle, setSingleArticle] = useState({});
  

  useEffect(() => {
    getSingleArticle(article_id).then((articleFromApi) => {
      setSingleArticle(articleFromApi);
    });
  }, [article_id]);

  return (
    <div>
      <ul className="sing-art-li">
        <h2 className="sing-art-title">{singleArticle.title}</h2>
        <li className="sing-art-body">{singleArticle.body}</li>
        <br></br>
        <li className="sing-art-author">Posted by <span style={{color: 'rgb(253, 118, 0)'}}>{singleArticle.author}</span> {singleArticle.created_at}</li>
      </ul>
      <h3 className="sing-art-h3">Comments:</h3>
      <Comments />
    </div>
  );
}
