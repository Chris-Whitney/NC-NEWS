export function SortBy({setSortBy}) {


  const handleSortDate = () => {
    setSortBy("created_at");
  };

  const handleSortVotes = () => {
      setSortBy('votes')
  };

  const handleSortComments = (event) => {
      setSortBy('comment_count');
  };

  return (
    <div className="sort-bar">
      <p className="sortby-p">Sort by:</p>
      <button className="sort-btn" onClick={handleSortDate}>
        Date
      </button>
      <button className="sort-btn" onClick={handleSortVotes}>
        Votes
      </button>
      <button disabled='' className="sort-btn" onClick={handleSortComments}>
        Comments
      </button>
    </div>
  );
}
