import { useEffect, useState, useCallback } from "react"
import axios from 'axios'



const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [email, setEmail] = useState('')

  const fetchUser = async () => {
    let response = await axios.get('http://localhost:4000/user')
    setParks(response.data)
  }

  // Handle Changes
  const handleEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const handlePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/user', { email: email, password: password })
      setEmail([...email, response.data])
      setPassword("")

      // setFood("");
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);



  /*************** Return ***************/
  return (
    <div>
      <form onSubmit={handleSubmit} className="register" >
        <h1>Register</h1>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            placeholder="Enter email"
            required
          />
        </div>
        {/* <div>
          <label>Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
            required
          />
        </div> */}
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="Enter Password"
            required
          />
        </div>
        <button type="submit" ></button>
      </form>
    </div>
  )
}

export default Register
