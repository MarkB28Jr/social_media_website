import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [data, setData] = useState('');
  useEffect(() => {
    axios.get('/profile').then(response => {
      setData(response.data);
      // setEmail(response.data.email);
    });
  }, []);
  return (
    <UserContext.Provider value={{ data, setData}}>
      {children}
    </UserContext.Provider>
  )
}