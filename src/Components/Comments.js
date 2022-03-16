import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { deleteComment, getCommentsForArticle } from "../Utils/api";
import { PostComment } from "./PostComment";
import { UserContext } from "../Utils/User";

export function Comments() {
  const { article_id } = useParams();

  const { isLoggedIn, loggedInUser } = useContext(UserContext);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsForArticle(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [comments, article_id]);

  const handleDeleteComment = (value) => () => {
    deleteComment(value);
    alert("deleted!");
  };

  return (
    <div>
      <ul>
        {comments.map((comment) => {
          return (
            <li className="comments-card" key={comment.comment_id}>
              <p className="comments-author">
                <span style={{ color: "rgb(253, 118, 0)" }}>
                  {comment.author}
                </span>{" "}
                posted on {comment.created_at}
              </p>
              <p className="comments-body">{comment.body}</p>
              {loggedInUser === comment.author ? (
                <div className="del-btn-container">
                <button
                  className="del-btn"
                  onClick={handleDeleteComment(comment.comment_id)}
                >
                  X
                </button>
                
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
      <PostComment article_id={article_id} />
    </div>
  );
}
