import { patchArticleVoteInc } from "../Utils/api";
import { patchArticleVoteDec } from "../Utils/api";
import { useState, useContext } from "react";
import { UserContext } from "../Utils/User";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import "../Styling/VoteUpdater.css";

export function VoteUpdater({ votes, articleId }) {
  const [vote, setVote] = useState(votes);
  const [voteUpdater, setVoteUpdater] = useState(0);

  const [hasVoted, setHasVoted] = useState(false);

  const [hasDisliked, setHasDisliked] = useState(false);

  const [loginPrompt, setLoginPrompt] = useState("");

  const { isLoggedIn } = useContext(UserContext);

  const addVotes = () => {
    if (isLoggedIn) {
      setHasDisliked(false);
      setHasVoted(true);
      setVote((currVote) => currVote + 1);
      patchArticleVoteInc(articleId).then(() => {
        setVoteUpdater((currVote) => currVote + 1);
      });
    } else {
      setLoginPrompt("Please login to vote");
    }
  };

  const minusVotes = () => {
    if (isLoggedIn) {
      setHasVoted(false);
      setHasDisliked(true);
      setVote((currVote) => currVote - 1);
      patchArticleVoteDec(articleId).then(() => {
        setVoteUpdater((currVote) => currVote - 1);
      });
    } else {
      setLoginPrompt("Please login to vote");
    }
  };

  return (
    <>
      {hasVoted ? (
        <button className="votes-btn" disabled>
          <ThumbUpAltIcon fontSize="smaller"/>
        </button>
      ) : (
        <button className="votes-btn" onClick={addVotes}>
          <ThumbUpAltIcon fontSize="smaller"/>
        </button>
      )}
      {vote} likes
      {hasDisliked ? (
        <button className="votes-btn" disabled>
          <ThumbDownAltIcon fontSize="smaller"/>
        </button>
      ) : (
        <button className="votes-btn" onClick={minusVotes}>
          <ThumbDownAltIcon fontSize="smaller"/>
        </button>
      )}
      <p className="login-prompt">{loginPrompt}</p>
    </>
  );
}
