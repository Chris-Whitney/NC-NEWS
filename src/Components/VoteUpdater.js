import { patchArticleVoteInc } from "../Utils/api";
import { patchArticleVoteDec } from "../Utils/api";
import { useState } from "react";

export function VoteUpdater({ votes, articleId, setVoteUpdater }) {
  const [vote, setVote] = useState(votes);

  const addVotes = () => {
    setVote((currVote) => currVote + 1);
    patchArticleVoteInc(articleId).then(() => {
      setVoteUpdater((currVote) => currVote + 1);
    });
  };

  const minusVotes = () => {
    setVote((currVote) => currVote - 1);
    patchArticleVoteDec(articleId).then(() => {
      setVoteUpdater((currVote) => currVote - 1);
    });
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
