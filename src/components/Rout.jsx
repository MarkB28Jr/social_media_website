import { useContext } from "react"
import Register from "./Register"
import { UserContext } from "../context/UserContext"


const Rout = () => {
  const {username, id} = useContext(UserContext)

  if(username){
    return 'logged in!'
  }
  
  return (
      <Register /> 
  )
}

export default Rout
