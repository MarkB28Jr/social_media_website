import { useState, useEffect } from "react"
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const Social = () => {

  const navigate = useNavigate()
  const [communitys, setCommunitys] = useState('')
  const [communityName, setCommunityName] = useState('')
  const [userId, setUserId] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [profileName, setProfileName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [image, setImage] = useState('')

  /*************** FETCH axios ***************/
  const fetchUserData = async () => {
    try {
      const userId = window.localStorage.getItem('userId') ? JSON.parse(window.localStorage.getItem('userId')) : null
      const response = await axios.get(`/users/${userId}`)
      let user = response.data
      console.log(user)
      setUserId(user)
      setUsername(userId.username)
      setEmail(userId.email)
      setProfileName(profileName)
      setAge(age)
      setGender(gender)
      setImage(image)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  const fetchCommunitys = async () => {
    let response = await axios.get('/communitys')
    setCommunitys(response.data)
  }

  /*************** onSubmit / handleChange / handleDelete ***************/

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const userId = window.localStorage.getItem('userId') ? JSON.parse(window.localStorage.getItem('userId')) : null
      const { data } = await axios.post('/communitys', { communityName, userId })
      if (data.error) {
        toast.error(data.error)
      } else {
        toast.success('Community Added')
        navigate('/social')

      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleDelete = async () => {
    try {
      const userId = window.localStorage.getItem('userId') ? JSON.parse(window.localStorage.getItem('userId')) : null
      if (userId) {
        await axios.delete(`/users/${userId}/profile`)
        toast.success('Profile deleted!')
        setProfileName('')
        setAge('')
        setGender('')
        setImage('')
      }
    } catch (error) {
      console.log(error)
      toast.error('Error deleting profile')
    }
  }

  const onClick = () => {
    setCommunitys([...communitys, { communityName }])
    setCommunityName("")
  }
  
  /*************** useEffect ***************/
  useEffect(() => {
    fetchUserData();
  }, [])
  useEffect(() => {
    fetchCommunitys();
  }, [])


  return (

    <div className="flex h-screen ">
      {/****************************** Profile Section *****************************/}
      <div className="w-1/4 h-4/10 max-width-50">
        <h1 className="bold text-2xl text-center text-black ">Profile</h1>
          <div className="mx-7 border-black border-solid border-5 bg-gray-300 rounded-lg p-3 text-black">
            <div className="grid grid-cols-1 w-100" >
              <div className="grid grid-col justify-center">
              <img src={userId && userId.profile ? userId.profile.image : ''} className="w-60 rounded-full m-1 justify-items-center self-center align-center" placeholder="Enter Image URL address" />
              </div>
              <div className="m-1 rounded-md bold text-black" >Username: {userId.username}</div>
              <div className="m-1 rounded-md bold text-black" >Email: {userId.email}</div>
              <div className="m-1 rounded-md bold text-black" >Name: {userId && userId.profile ? userId.profile.profileName : ''} </div>
              <div className="m-1 rounded-md bold text-black" >Age: {userId && userId.profile ? userId.profile.age : ''} </div>
              <div className="m-1 rounded-md bold text-black" >Gender: {userId && userId.profile ? userId.profile.gender : ''} </div>
            </div>
            <div className="flex justify-items-center self-center align-center">
              <Link to={`/users/${userId._id}`}>
                <button className="text-black border-solid border-2 border-black bg-blue-200 w-20 bg-white mb-1 m-1 w-11 rounded-lg">Edit</button>
              </Link>
              <button className="text-black border-solid border-2 border-black bg-blue-200 w-20 bg-white mb-1 m-1 w-11 rounded-lg" onClick={handleDelete} >Delete</button>
            </div>
          </div>
      </div>

      {/****************************** Community Section *****************************/}
      <div className="flex flex-col bg-purple-500 w-3/4 p-2">
        <div className="overflow-y-auto">
          <div className="grid  mt-50">
            <h1 className="text-center bold text-5xl align-center justify-center ">Communities</h1>
          </div>
          <div>
            {communitys.length > 0 && (
              <div className="flex-grow m-12 p-5" >
                {communitys.map((community) => (
                  <div key={community._id} className="bg-white border-2 border-solid border-black rounded-lg m-6">
                    <Link to={`/communitys/${community._id}`}>
                      <div className="rounded-md text-center underline bold text-2xl p-3" >{community.communityName}</div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <form onSubmit={onSubmit}>
          <div className="flex justify-center items-center h-screenm-12 gap-2">
            <input
              type="text"
              value={communityName}
              onChange={(e) => setCommunityName(e.target.value)}
              placeholder="Add Content"
              className="bg-white flex-strech  rounded-lg  w-96 h-8 align-center justify-item-center"
            />
            <button onClick={onClick} className="flex align-center justify-item-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" rounded-lg bg-gray-200 w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Social