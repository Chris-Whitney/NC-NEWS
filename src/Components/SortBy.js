import Button from "@mui/material/Button";

export function SortBy({ setSortBy }) {

  const handleSortData = (e) => {
    setSortBy({sort_by: e.target.value});
  };

  return (
    <div className="sort-bar">
      <p className="sortby-p">Sort by:</p>
      <button className="sort-btn" value="created_at" onClick={handleSortData}>
        Date
      </button>
      <button className="sort-btn" value="votes" onClick={handleSortData}>
        Votes
      </button>
      <button
        disabled=""
        className="sort-btn"
        value="comment_count"
        onClick={handleSortData}
      >
        Comments
      </button>
    </div>
  );
}
