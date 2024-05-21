import axios from 'axios'
import { useContext, useState } from "react"
// import { UserContext } from "../context/UserContext"
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/users/register', { username, email, password })
      setUsername('')
      setPassword('')
      setEmail('')
      if (data.error) {
        toast.error(data.error)
      } else {
        toast.success('Register Succesful!')
        navigate('/users/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-center items-center text-center mt-20">
      <form onSubmit={onSubmit} className="border rounded bg-gray-500" >
        <h1 className="bold text-2xl">Register</h1>
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
            className="m-3 rounded-md text-center"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="m-3 rounded-md text-center"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="m-3 rounded-md text-center"
          />
        </div>
        <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded m-2" type="submit" >Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register
