import Register from "./Register"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import Community from './Community'


const Rout = () => {
  const {email, id} = useContext(UserContext)

  if(email){
    return <Community />
  }
  
  return (
      <Register /> 
  )
}

export default Rout
