import Register from "./Register"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"


const Rout = () => {
  const {username, id} = useContext(UserContext)

  if(username){
    return <Community />
  }
  
  return (
      <Register /> 
  )
}

export default Rout
