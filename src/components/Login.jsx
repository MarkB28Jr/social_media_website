import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"



const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
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
    <div className="flex justify-center items-center text-center mt-20">
      <form onSubmit={onSubmit} className="border rounded bg-gray-500" >
        <h1 className='bold text-2xl'>Login</h1>
        <div>
          <input
            name="username"
            type="emaitextl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Username"
            className="m-3 rounded-md text-center"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="m-3 rounded-md text-center"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded" type="submit" >Login</button>

      </form>

    </div>
  )
}

export default Login