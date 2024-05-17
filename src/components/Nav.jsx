import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Nav = () => {
  const { username, isLoggedIn } = useContext(AuthContext);

  return (
    <div className="nav">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/social">Social</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/community">Community</NavLink>
        {isLoggedIn ? (
          <span>Welcome, {username}!</span>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Nav;
