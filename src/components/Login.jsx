import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"



const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUsername: setLoggedInUser, setId } = useContext(UserContext)

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/users/login', { username, password })
      if (data.error) {
        toast.error(data.error)
      } else {
        setLoggedInUser(username)
        console.log(username)
        setId(data.id)
        console.log(data.id)
        toast.success('Login Succesful!')
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  /*************** Return ***************/
  return (
    <div>
      <form onSubmit={onSubmit} className="register" >
        <h1>Login</h1>
        <div>
          <label>Username</label>
          <input
            name="username"
            type="emaitextl"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded" type="submit" >Login</button>

      </form>

    </div>
  )
}

export default Login