import Button from "@mui/material/Button";
import { fontSize } from "@mui/system";
import "../Styling/SortBy.css";

export function SortBy({ setSortBy }) {
  const handleSortData = (e) => {
    setSortBy({ sort_by: e.target.value });
  };

  const buttonStyles = {
    m: "5px",
    fontSize: "12px",
    backgroundColor: "#009cf0",
  };

  return (
    <div className="sort-bar">
      <Button
        size="small"
        sx={buttonStyles}
        variant="contained"
        value="created_at"
        onClick={handleSortData}
      >
        Date
      </Button>
      <Button
        size="small"
        variant="contained"
        sx={buttonStyles}
        value="votes"
        onClick={handleSortData}
      >
        Votes
      </Button>
      <Button
        size="small"
        variant="contained"
        sx={buttonStyles}
        value="comment_count"
        onClick={handleSortData}
      >
        Comments
      </Button>
    </div>
  );
}
