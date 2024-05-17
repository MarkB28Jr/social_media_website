import { useState } from "react"



const Register = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = async () => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, username, password }),
      headers: { 'Content-Type': 'application/json' }
    })
    if (response.status !== 200) {
      alert('Something went wrong')
    } else {
      alert('Succes')
      window.location.href = '/login'
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="register" >
        <h1>Register</h1>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
