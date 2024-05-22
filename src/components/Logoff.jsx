import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom"


const Logoff = () => {
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
        localStorage.clear()
        toast.success('Logout Succesful!')
        navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded" type="submit" onClick={onSubmit} >Log Off</button>
    </div>
  )
}

export default Logoff
