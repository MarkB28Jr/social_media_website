import { NavLink } from "react-router-dom";
// import { useState } from 'react';

const Nav = () => {
  // const { user, isLoggedIn } = useState('');

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Community</span>
        <NavLink className="text-white self-strech p-1 justify-center" to="/">Home</NavLink>
        <NavLink className="text-white self-strech p-1" to="/social">Social</NavLink>
        <NavLink className="text-white self-strech p-1" to="/community">Community</NavLink>
        <NavLink className="text-white self-strech p-1" to="/users/register">Register</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
