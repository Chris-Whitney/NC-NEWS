import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCommentsForArticle } from "../api";
import { PostComment } from "./PostComment";

export function Comments() {
  const { article_id } = useParams();

  const [comments, setComments] = useState([]);

  

  useEffect(() => {
    getCommentsForArticle(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, []);

  const handleDeleteComment = () => {
    console.log()
  }

  // useEffect(() => {
  //   getCommentsForArticle(article_id).then((commentsFromApi) => {
  //     setComments(commentsFromApi);
  //   });
  // }, [voteUpdater]);

  return (
    <div>
      <ul>
        {comments.map((comment) => {
          return (
            <li className="comments-card" key={comment.comment_id}>
              <p className="comments-author">
                {comment.author} posted on {comment.created_at}
              </p>
              <p className="comments-body">{comment.body}</p>
              <button onClick={handleDeleteComment}>Delete</button>
            </li>
          );
        })}
      </ul>
        <PostComment article_id={article_id}/>
    </div>
  );
}
