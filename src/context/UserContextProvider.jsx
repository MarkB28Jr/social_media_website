// import axios from 'axios'
// import { useState, useEffect } from 'react'

// import UserContext from './UserContext'


// const UserContextProvider = ({ children }) => {
//   const [user, setUser] =useState(null)
//   const [id, setId] = useState(null)

//   // useEffect(() => {
//   //   axios.get('/users').then(response => {
//   //     localStorage.setItem('user', data)
//   //     setId(response.data.id);
//   //     setUser(response.data.username);
//   //   })
//   // }, [])

//   return (
//     <UserContext.Provider value={{ user, setUser, id, setId }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export default UserContextProvider