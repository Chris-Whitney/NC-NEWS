import { useState } from "react";
import { useContext } from "react";
import { postComment } from "../Utils/api";
import { UserContext } from "../Utils/User";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import '../Styling/PostComment.css';

export function PostComment({ article_id }) {
  const [textBody, setTextBody] = useState("");

  const [loginPrompt, setLoginPrompt] = useState("");

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
        .catch((err) => {
          console.log(err.response)
        })
    } else {
      event.preventDefault();
      setLoginPrompt("Please login to comment")
    }
      
    
  };

  const postButtonStyle = {
      ml: '25px',
      mb: '10px',
      fontSize: '12px',
      backgroundColor: '#009cf0',

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="post-cmnt-label">
          Post a comment:
          <p className="login-prompt">{loginPrompt}</p>
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
        <Button sx={postButtonStyle} variant="contained" type="submit">
          Post<SendIcon fontSize="smaller" />
        </Button>
        </div>
      </form>
    </div>
  );
}
