import { patchArticleVoteInc } from "../Utils/api";
import { patchArticleVoteDec } from "../Utils/api";
import { useState, useContext } from "react";
import { UserContext } from "../Utils/User";

export function VoteUpdater({ votes, articleId, setVoteUpdater }) {
  const [vote, setVote] = useState(votes);

  const { setLoggedInUser, isLoggedIn, loggedInUser } = useContext(UserContext);

  const addVotes = () => {
    if (isLoggedIn) {
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
      <button className="votes-btn" onClick={addVotes}>
        👍
      </button>
      {vote}
      <button className="votes-btn" onClick={minusVotes}>
        👎
      </button>
    </>
  );
}
