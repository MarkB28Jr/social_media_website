import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [username, setUsername] = useState('');
  const [id, setId] = useState(''); 0
  const [profileLoaded, setProfileLoaded] = useState(false);

  useEffect(() => {
    if (!profileLoaded) {
      axios.get('/profile')
        .then(response => {
          console.log(response.data)
          setId(response.data.userId);
          setUsername(response.data.username);
          setProfileLoaded(true);
        })
        .catch(error => {
          console.error('Error fetching profile:', error);
        });
    }
  }, [profileLoaded]);
  return (
    <UserContext.Provider value={{ username, setUsername, id, setId }}>
      {children}
    </UserContext.Provider>
  )
}