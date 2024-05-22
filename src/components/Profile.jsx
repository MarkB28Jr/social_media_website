import { useState, useEffect, useContext } from "react"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-hot-toast'

const Profile = () => {

  const navigate = useNavigate()
  const [socials, setSocials] = useState('')
  const [profileName, setProfileName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [image, setImage] = useState('')
  const [userId, setUserId] = useState('')

  const fetchUserData = async () => {
    try {
      const userId = window.localStorage.getItem('userId') ? JSON.parse(window.localStorage.getItem('userId')) : null
      // console.log(userId)
      if (userId) {
        const response = await axios.get(`/users/${userId}`);
        setUserId(response.data);
        // console.log(response.data)
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.put(`/users/${userId}`)
      setCommunity('')
      if (data.error) {
        toast.error(data.error)
      } else {
        console.log(data.id)
        toast.success('Profile Updated')
      }
      res.json(data)
    } catch (error) {
      console.log(error)
    }
  }


  const handleDelete = async (id) => {
    try {
      const user = await axios.delete(`/users/${id}`)
      console.log(user)
      toast.success('Profile deleted!')
    } catch (error) {
      console.log(error)
      toast.error('Error deleting profile')
    }
  }

  useEffect(() => {
    fetchUserData();
  }, [])

  /*************** Return ***************/
  return (
    <div className="gap-10 flex justify-center items-center text-center center mt-20 ">
      <div className="bg-purple-100 w-1/4 rounded-lg">
        <h1 className="bold text-2xl text-center">Profile</h1>
        <div className="grid grid-cols-1 justify-items-center  w-100" >
          <div className="m-1 rounded-md bold" >Username: {userId.username}</div>
          <div className="m-1 rounded-md bold" >Email: {userId.email}</div>
          <Link to={`/users/${userId._id}`}>
            <button className="border-solid border-2 border-black bg-blue-200 w-20 bg-white mb-1 m-1 w-11 rounded-lg">Edit</button>
          </Link>
            <button className="border-solid border-2 border-black bg-blue-200 w-20 bg-white mb-2 w-12 rounded-lg " onClick={handleDelete} >Delete</button>
        </div>
      </div>
      <form onSubmit={onSubmit} className="bg-gray-300 rounded-lg" >
        <h1 className="text-center bold text-2xl">
        </h1>
        <div>
          <input
            type="text"
            value={image}
            placeholder="Enter Image URL address"
            onChange={(e) => setImage(e.target.value)}
            className="m-3 rounded-md text-center"
          />
        </div>
        <div>
          <input
            type="text"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            placeholder="Enter Profile Name"
            className="m-3 rounded-md text-center"

          />
        </div>
        <div>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter Age"
            className="m-3 rounded-md text-center"
          />
        </div>
        <div>
          <input
            type="text"
            value={gender}
            placeholder="Enter Gender"
            onChange={(e) => setGender(e.target.value)}
            className="m-3 rounded-md text-center"
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded">Submit</button>
        </div>
      </form>
    </div>
  )
}


export default Profile
