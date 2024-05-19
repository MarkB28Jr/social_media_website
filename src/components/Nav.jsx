import { NavLink } from "react-router-dom";
// import { useState } from 'react';

const Nav = () => {
  // const { user, isLoggedIn } = useState('');

  return (
    <div className="nav">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/social">Social</NavLink>
        {/* <NavLink to="/profile">Profile</NavLink> */}
        <NavLink to="/community">Community</NavLink>
        {/* {isLoggedIn ? (
          <span>Welcome, {user.email}!</span>
        ) : (
          <> */}
            <NavLink to="/users/login">Login</NavLink>
            <NavLink to="/users/register">Register</NavLink>
          {/* </>
        )} */}
      </nav>
    </div>
  );
};

export default Nav;
