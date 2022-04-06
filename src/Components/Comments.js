import { useParams } from "react-router-dom";
import "../Styling/Comments.css";
import Button from "@mui/material/Button";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useEffect, useState, useContext } from "react";
import { deleteComment, getCommentsForArticle } from "../Utils/api";
import { PostComment } from "./PostComment";
import { UserContext } from "../Utils/User";
import { formatDate } from "../Utils/api";

export function Comments() {
  const { article_id } = useParams();

  const { loggedInUser } = useContext(UserContext);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    let unmounted = false;
    getCommentsForArticle(article_id).then((commentsFromApi) => {
      if (!unmounted) {
        setComments(commentsFromApi);
      }
    });
    return () => {
      unmounted = true;
    };
  }, [comments, article_id]);

  const handleDeleteComment = (value) => () => {
    deleteComment(value);
    alert("deleted!");
  };
   const deleteButtonStyle ={
    m: '5px',
    mb: '10px',
    pl: '0px',
    pr: "0px",
    fontSize: '12px',
    backgroundColor: '#009cf0'
   }

  return (
    <div className="comments-div">
      <ul className="comments-ul">
        {comments.map((comment) => {
          return (
            <li className="comments-card" key={comment.comment_id}>
              <p className="comments-author">
                <span style={{ color: "rgb(253, 118, 0)" }}>
                  {comment.author}
                </span>{" "}
                posted {formatDate(comment.created_at)}
              </p>
              <p className="comments-body">{comment.body}</p>
              {loggedInUser === comment.author ? (
                <div className="del-btn-container">
                  <Button
                    sx={deleteButtonStyle}
                    variant="contained"
                    size="small"
                    // className="del-btn"
                    onClick={handleDeleteComment(comment.comment_id)}
                  >
                    <DeleteForeverIcon fontSize="small"/>
                  </Button>
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
