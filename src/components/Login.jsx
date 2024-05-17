import { useState, useEffect, useCallback } from 'react';


const Login = () => {

const [login, setLogin] = useState('')
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleChange = useCallback((e) => {
  //   setLogin(e.target.value);
  // }, []);
  const handleEmailChange = useCallback((e) => {
    setUsername(e.target.value);
  }, []);
  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/users/login', {email: email, password: password })
      setLogin([...login, response.data])
      setUsername("")
      setPassword("");
    } catch (error) {
      console.log(error)
    }
  }

    return (
      <div>
        <form onSubmit={handleSubmit} className='login'>
          <h1>Login</h1>
          <div>
            <label>Name</label>
            <input
              type='text'
              placeholder='Username'
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type='password'
              placeholder='Password'
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type='submit' >Log In</button>
        </form>
      </div>
    );
  };

  export default Login;