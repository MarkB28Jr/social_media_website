import { useState } from "react"
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = data
    try {
      const { data } = await axios.post('/users/register', {
        name, email, password
      })
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({
          name: '',
          email: '',
          password: '',
        })
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
        <div>
          <label>Name</label>
          <input
            type="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Enter Name"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="Enter email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
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

export default Register
