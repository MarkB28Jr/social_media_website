// import { useState, useContext } from "react"
// import axios from 'axios'
// import { toast } from 'react-hot-toast'
// import { useNavigate } from "react-router-dom"
// import { UserContext } from '../context/UserContext'

// const Login = () => {
//   const navigate = useNavigate()
//   // const { setLoggedIn, setId } = useContext(UserContext)
//   const [data, setData] = useState('')

//   const onSubmit = async (e) => {
//     e.preventDefault()
//     const { email, password } = data
//     try {
//       const { data } = await axios.post('/users/login', {
//         email, password
//       })
//       // setLoggedIn(data.email)
//       // setId(data.id)
//       if (data.error) {
//         toast.error(data.error)
//       } else {
//         setData({
//           email: '',
//           password: '',
//         })
//         toast.success('Login Succesful!')
//         navigate('/')
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   /*************** Return ***************/
//   return (
//     <div className="bg-blue-50 h-screen flex items-center bg-cyan-500 hover:bg-cyan-600">
//       <form onSubmit={onSubmit} className="w-64 mx-auto mb-12">
//         <h1 className="text-violet-500 text-2xl p-2" >Login</h1>
//         <div>
//           <input
//             name="email"
//             type="email"
//             value={data.email}
//             onChange={(e) => setData({ ...data, email: e.target.value })}
//             placeholder="Enter email"
//             className="block w-full rounded-sm p-2 mb-2 border rounded-sm"
//           />
//         </div>
//         <div>
//           <input
//             name="password"
//             type="password"
//             value={data.password}
//             onChange={(e) => setData({ ...data, password: e.target.value })}
//             placeholder="Enter Password"
//             className="block w-full rounded-sm p-2 mb-2 border rounded-sm"
//           />
//         </div>
//         <div className="text-center mt-2 bg-red">
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-12 border border-blue-700 rounded" type="submit" >Submit</button>
//         </div>
//       </form>

//     </div>
//   )
// }

// export default Login
