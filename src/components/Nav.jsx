import { NavLink } from "react-router-dom"


const Nav = () => {

  // const user = null

  return (
    <div className="nav">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/social">Social</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/community">Community</NavLink>
      </nav>
      {/* <div >
    <Toolbar className="toolbar">
      {user ? (
        <div className="profile">
          <Avatar className="avatar" alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
        </div>
      ):(

      )}
    </Toolbar>
      </div> */}
    </div>
  )
}

export default Nav
