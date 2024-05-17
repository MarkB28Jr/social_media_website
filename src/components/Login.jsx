import { useState, useEffect } from 'react'


const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const Login = async (e) => {
    e.preventDefualt()
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
    if (response.status !== 200) {
      alert('Failed')
    } else {
      alert('Succes')
      window.location.href = '/'
    }
  }


  return (
    <div>
      <form onSubmit={Login} className='login'>
        <h1>Login</h1>
        <div>
          <label>Name</label>
          <input
            type='text'
            placeholder='Username'
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            placeholder='Password'
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' >Log In</button>
      </form >
    </div >
  )
}

export default Login
