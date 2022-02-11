import { useEffect, useState, useContext } from "react";
import { UserContext } from "../Utils/User";
import { getAllUsers } from "../Utils/api";
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [users, setUsers] = useState([]);
 const { setLoggedInUser, isLoggedIn, loggedInUser } = useContext(UserContext)

 const navigate = useNavigate();
 console.log(isLoggedIn)
 console.log(loggedInUser)

  const handleUserSelect = (event) => {
        setLoggedInUser(event.target.value);
        navigate('/');

  }
  useEffect(() => {
    getAllUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
      
    });
  }, []);

  return (
    <div>
      <form>
        <select onChange={handleUserSelect}>
        <option value="" disabled selected hidden>
              select user
            </option>
          {users.map((user) => {
            return <option key={user.username}>{user.username}</option>;
          })}
        </select>
      </form>
    </div>
  );
}
