import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [username, setUsername] = useState(null)
  const [id, setId] = useState(null)

  useEffect(() => {
    axios.get('/social').then(response => {
      setId(response.data.id);
      setUsername(response.data.username);
    })
  }, [])

  return (
    <UserContext.Provider value={{ username, setUsername, id, setId }}>
      {children}
    </UserContext.Provider>
  );
}