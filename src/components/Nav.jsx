import { NavLink } from "react-router-dom"


const Nav = () => {



/*************** Return ***************/
  return (
    <div className="nav">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/social">Social</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/community">Community</NavLink>
      </nav>
    </div>
  )
}

export default Nav
