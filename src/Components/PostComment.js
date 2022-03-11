import { useState, useEffect } from "react";
import { useContext } from "react";
import { postComment } from "../Utils/api";
import { UserContext } from "../Utils/User";

export function PostComment({ article_id }) {
  const [textBody, setTextBody] = useState("");

  // const [newComment, setNewComment] = useState({});

  const { loggedInUser, isLoggedIn } = useContext(UserContext);

  const handleChange = (event) => {
    setTextBody(event.target.value);
  };

  const handleSubmit = (event) => {
    if(isLoggedIn) {
      event.preventDefault();
      setTextBody("");
      postComment(article_id, loggedInUser, textBody)
        .then((res) => {
          alert("posted!");
        })
    } else {
      alert("Please login to comment")
    }
      
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="post-cmnt-label">
          Post a comment:
          <textarea
            className="textarea-box"
            value={textBody}
            onChange={handleChange}
            placeholder="type your comment here..."
            required
            rows="4"
            cols="40"
          />
        </label>
        <br></br>
        <div className="post-cmnt-btn">
        <button className="post-button" type="submit">
          Post
        </button>
        </div>
      </form>
    </div>
  );
}
