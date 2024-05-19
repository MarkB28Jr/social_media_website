import { useState, useContext } from "react"
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import { UserContext } from '../context/UserContext'

const Login = () => {
  const navigate = useNavigate()
  // const { setLoggedIn, setId } = useContext(UserContext)
  const [data, setData] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = data
    try {
      const { data } = await axios.post('/users/login', {
        email, password
      })
      // setLoggedIn(data.email)
      // setId(data.id)
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({
          email: '',
          password: '',
        })
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
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="Enter email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            placeholder="Enter Password"
          />
        </div>
        <button type="submit" ></button>
      </form>

    </div>
  )
}

export default Login
