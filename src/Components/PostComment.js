import { useState, useEffect } from "react";
import { postComment } from "../api";

export function PostComment({ article_id }) {

  const [textBox, setTextBox] = useState("");

  const [newComment, setNewComment] = useState({})

  const handleChange = (event) => {
    setTextBox(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, textBox);
    
  };

  //   useEffect(() => {
  //     postComment(article_id, textBox).then((postedCommentFromApi) => {
  //         console.log(postedCommentFromApi)
  //     })

  //   }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Post a comment:
          <textarea
            className="textarea-box"
            value={textBox}
            onChange={handleChange}
            placeholder="type your comment here..."
            required
            rows="4"
            cols="50"
          />
        </label>
        <br></br>
        <button className='post-button'  type="submit">Post</button>
      </form>
    </div>
  );
}
