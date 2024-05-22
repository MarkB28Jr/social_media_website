import { useState, useEffect } from "react"
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const CommunityDetails = () => {
  const { id } = useParams()
  const [community, setCommunity] = useState("")
  const [communityName, setCommunityName] = useState("")
  const [content, setContent] = useState([])
  const [userId, setUserId] = useState('')
  const [profileName, setProfileName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [image, setImage] = useState('')

  const fetchUserData = async () => {
    try {
      const userId = window.localStorage.getItem('userId') ? JSON.parse(window.localStorage.getItem('userId')) : null
      const response = await axios.get(`/users/${userId}`)
      let user = response.data
      setUserId(user)
      setProfileName(user.profile.profileName)
      setAge(user.profile.age)
      setGender(user.profile.gender)
      setImage(user.profile.image)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  const fetchCommunitys = async () => {
    let response = await axios.get(`/communitys/${id}`)
    setCommunity(response.data)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.put(`/communitys/${id}`, { comments: [content] })
      if (data.error) {
        toast.error(data.error)
      } else {
        setContent('')
        toast.success('Comments Added')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = (index, e) => {
    const values = [...content]
    values[index] = e.target.value
    setContent(values)
  }

  useEffect(() => {
    fetchCommunitys();
  }, [id])
  useEffect(() => {
    fetchUserData();
  }, [])
  // if (!community) {
  //   return <div className="text-8xl text-center h-screen center h-100 center">Loading...</div>
  // }

  return (
    <div className="flex h-screen flex-center ">
      {/****************************** Profile Section *****************************/}
      <div className="w-1/4 h-4/10 max-width-50">
        <h1 className="bold text-2xl text-center text-white ">Profile</h1>
        {userId.profile && (
          <div className="mx-7 border-gray-300 border-5 bg-black rounded-lg p-3 text-white">
            <div className="grid grid-cols-1 w-100" >
              <div className="grid grid-col justify-center">
                <img src={userId.profile.image} className="w-60 rounded-full m-1 justify-items-center self-center align-center" placeholder="Enter Image URL address" />
              </div>
              <div className="m-1 rounded-md bold" >Username: {userId.username}</div>
              <div className="m-1 rounded-md bold" >Email: {userId.email}</div>
              <div className="m-1 rounded-md bold" >Name: {userId.profile.profileName}</div>
              <div className="m-1 rounded-md bold" >Age: {userId.profile.age}</div>
              <div className="m-1 rounded-md bold" >Gender: {userId.profile.gender}</div>
            </div>
            <div className="justify-items-center self-center">
              <Link to={`/users/${userId._id}`}>
                <button className="text-black border-solid border-2 border-black bg-blue-200 w-20 bg-white mb-1 m-1 w-11 rounded-lg">Edit</button>
              </Link>
              <button className="text-white border-2 bg-blue-700 w-20 bg-white mb-2 w-12 rounded-lg " onClick={handleDelete} >Delete</button>
            </div>
          </div>
        )}
      </div>

      {/****************************** Community Details Section *****************************/}
      <div className="flex-grow flex-col bg-purple-500 w-3/4 p-2">
        <div>
          <h1 className="text-center bold text-2xl underline">{community.communityName}</h1>
        </div>
        <div className="bg-white border-1 border-solid border-black mt-3">
          {community.content}
        </div>
        <form onSubmit={onSubmit}>
          <div className="flex justify-center items-center h-screenm-12 gap-2">
            <input
              type="text"communtyName
              value={communityName}
              onChange={(e) => setCommunityName(e.target.value)}
              placeholder="Add Content"
              className="bg-white flex-strech  rounded-lg  w-96 h-8 align-center justify-item-center"
            />
            <button className="flex align-center justify-item-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" rounded-lg bg-gray-200 w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            </button>
          </div>
        </form>
      </div>
    </div >
  )
}

export default CommunityDetails