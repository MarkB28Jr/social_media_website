import { useState } from "react"
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault();
    // const { email, password } = data
    try {
      const { data } = await axios.post('/users/register', { email, password })
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

  /*************** Return ***************/
  return (
    <div>
      <form onSubmit={onSubmit} className="register" >
        <h1>Register</h1>
        {/* <div>
          <label>Name</label>
          <input
            type="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Enter Name"
            className="m-3"
          />
        </div> */}
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value )}
            placeholder="Enter email"
            className="m-3"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value )}

            placeholder="Enter Password"
            className="m-3"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-12 border border-blue-700 rounded" type="submit" ></button>
      </form>
    </div>
  )
}

export default Register
