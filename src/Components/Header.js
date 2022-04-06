import react from "react";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Utils/User";
import "../Styling/Header.css";

export function Header() {
  const { loggedInUser, setLoggedInUser, isLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUser("");
  };

  const handlePageReload = () => {
    navigate("/");
    window.location.reload(false);
  };

  return (
    <div className="header">
      <h1 onClick={handlePageReload}>Chris' Corner</h1>
      {isLoggedIn ? (
        <div className="header-loggedinuser">
          <p>{loggedInUser}</p>
          <Button
            type="button"
            className="header-logout-btn"
            onClick={handleLogout}
          >
            Log out
          </Button>
        </div>
      ) : (
        <Link to="/login" style={{ color: "red", textDecoration: "none" }}>
          <Button className="header-login">Login</Button>
        </Link>
      )}
    </div>
  );
}
