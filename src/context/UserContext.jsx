// import React from 'react'

// const UserContext = React.createContext()

// export default UserContext

// import axios from 'axios'
// import { createContext, useState, useEffect } from 'react'

// export const UserContext = createContext({})

// export function UserContextProvider({ children }) {
//   const [emailLocal, setEmailLocal] = useState(null)
//   const [id, setId] = useState(null)

//   useEffect(() => {
//     axios.get('/users').then(response => {
//       localStorage.setItem('user', data)
//       setId(response.data.id);
//       setEmailLocal(response.data.username);
//     })
//   }, [])

//   return (
//     <UserContext.Provider value={{ emailLocal, setEmailLocal, id, setId }}>
//       {children}
//     </UserContext.Provider>
//   );
// }