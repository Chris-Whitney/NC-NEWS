import { patchArticleVoteInc } from "../Utils/api";
import { patchArticleVoteDec } from "../Utils/api";
import { useState, useContext } from "react";
import { UserContext } from "../Utils/User";

export function VoteUpdater({ votes, articleId }) {
  const [vote, setVote] = useState(votes);
  const [voteUpdater, setVoteUpdater] = useState(0);

  const [hasVoted, setHasVoted] = useState(false);

  const [hasDisliked, setHasDisliked] = useState(false);

  const [loginPrompt, setLoginPrompt] = useState("");

  const { setLoggedInUser, isLoggedIn, loggedInUser } = useContext(UserContext);

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
          👍
        </button>
      ) : (
        <button className="votes-btn" onClick={addVotes}>
          👍
        </button>
      )}

      {vote} likes

      {hasDisliked ? (
        <button className="votes-btn" disabled>
          👎
        </button>
      ) : (
        <button className="votes-btn" onClick={minusVotes}>
          👎
        </button>
      )}
      <p className="login-prompt">{loginPrompt}</p>
    </>
  );
}
