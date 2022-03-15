import { patchArticleVoteInc } from "../Utils/api";
import { patchArticleVoteDec } from "../Utils/api";
import { useState, useContext } from "react";
import { UserContext } from "../Utils/User";

export function VoteUpdater({ votes, articleId, setVoteUpdater }) {
  const [vote, setVote] = useState(votes);

  const [hasVoted, setHasVoted] = useState(false);

  const { setLoggedInUser, isLoggedIn, loggedInUser } = useContext(UserContext);

  const addVotes = () => {
    if (isLoggedIn) {
      setHasVoted(true);
      setVote((currVote) => currVote + 1);
      patchArticleVoteInc(articleId).then(() => {
        setVoteUpdater((currVote) => currVote + 1);
      });
    } else {
      alert("Please login to vote");
    }
  };

  const minusVotes = () => {
    if (isLoggedIn) {
      setHasVoted(true);
      setVote((currVote) => currVote - 1);
      patchArticleVoteDec(articleId).then(() => {
        setVoteUpdater((currVote) => currVote - 1);
      });
    } else {
      alert("Please login to vote");
    }
  };

  return (
    <>
    {hasVoted ? (
      <>
      <button className="votes-btn" disabled>
        👍
      </button>
     {vote}
      <button className="votes-btn" disabled>
        👎
      </button>
      </>
    ) : 
    <>
      <button className="votes-btn" onClick={addVotes}>
        👍
      </button>
     {vote}
      <button className="votes-btn" onClick={minusVotes}>
        👎
      </button>
      </> } 
    </>
  );
}
