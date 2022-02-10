export function SortBy({setSortBy, sortBy}) {


  const handleSortDate = () => {
    setSortBy("created_at");
  };

  const handleSortVotes = () => {
      setSortBy('votes')
  };

  const handleSortComments = () => {
      setSortBy('comment_count')
  };

  return (
    <div>
      <p className="sortby-p">Sort by:</p>
      <button className="sort-btn" onClick={handleSortDate}>
        Date
      </button>
      <button className="sort-btn" onClick={handleSortVotes}>
        Votes
      </button>
      <button className="sort-btn" onClick={handleSortComments}>
        Comments
      </button>
    </div>
  );
}
