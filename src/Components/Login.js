import { useEffect, useState, useContext } from "react";
import { UserContext } from "../Utils/User";
import { getAllUsers } from "../Utils/api";
import { useNavigate } from "react-router-dom";

import '../Styling/Login.css';


export function Login() {
  const [users, setUsers] = useState([]);
  const { setLoggedInUser, isLoggedIn, loggedInUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  

  const handleUserSelect = value => (event) => {
    event.preventDefault()
    setLoggedInUser(value);
    navigate("/");
  };
  useEffect(() => {
    getAllUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
      setLoading(true);
    });
  }, []);

  return (
    <>
    {loading ? (
    <div className="login-container">
      <ul className="login-user-ul">
        {users.map((user) => {
          return (
            <li key={user.username} onClick={handleUserSelect(user.username)} className="login-user-li">
              <h3>{user.username}</h3>
              <img className="login-user-img" src={user.avatar_url}></img>
            </li>
          );
        })}
      </ul>
    </div>
    ) : <p className='loading'>loading...</p>}
    </>
  );
}
