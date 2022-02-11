import react from "react";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../Utils/User";


export function Header() {

const {loggedInUser, isLoggedIn} = useContext(UserContext)


  return (
    <div className="header">
      <Link to="/" style={{ color: "red", textDecoration: "none" }}>
        <h1>NC - NEWS</h1>
      </Link>
      {isLoggedIn ? <p>{loggedInUser}</p> : <Link to="/login" style={{ color: "red", textDecoration: "none" }}>
        <p className="header-login">Login</p>
      </Link>}
    </div>
  );
}
