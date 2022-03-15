import react from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Utils/User";


export function Header() {

const {loggedInUser, setLoggedInUser, isLoggedIn} = useContext(UserContext)

const handleLogout = () => {
  setLoggedInUser("")
}
 
  return (
    <div className="header">
      <Link to="/" style={{ color: "red", textDecoration: "none" }}>
        <h1>Chris' Corner</h1>
      </Link>
      {isLoggedIn ? <div className='header-loggedinuser'><p>{loggedInUser}</p><button type='button' className="header-logout-btn" onClick={handleLogout}>Log out</button></div> : <Link to="/login" style={{ color: "red", textDecoration: "none" }}>
        <p className="header-login">Login</p>
      </Link>}
    </div>
  );
}
