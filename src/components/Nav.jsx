import { NavLink } from "react-router-dom";


const Nav = () => {

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Community</span>
        <NavLink className="text-white self-strech p-1 justify-center" to="/">Home</NavLink>
        <NavLink className="text-white self-strech p-1 justify-center" to="/social">Social</NavLink>
        <NavLink className="text-white self-strech p-1 justify-center" to="/community">Community</NavLink>
        <NavLink className="text-white self-strech p-1 justify-center" to="/profile">Profile</NavLink>
        <NavLink className="text-white self-strech p-1 justify-center" to="/users/login">Login</NavLink>
        <NavLink className="text-white self-strech p-1 justify-center" to="/users/register">Register</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
