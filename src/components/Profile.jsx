import { useState, useEffect } from "react"
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

  const fetchSocials = async () => {
    let response = await axios.get('/social')
    setSocials(response.data)
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/social', { profileName, age, gender, image })
      setSocials([...socials, data])
      setProfileName("")
      setAge("")
      setGender("")
      setImage("")
      if (data.error) {
        toast.error(data.error)
      } else {
        toast.success('Profile made!')
        navigate('/social')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/social/community/delete${id}`)
      setSocials(socials.filter((social) => social._id !== id))
      toast.success('Profile deleted!')
    } catch (error) {
      console.log(error)
      toast.error('Error deleting profile')
    }
  }

  useEffect(() => {
    fetchSocials();
  }, [])
  /*************** Return ***************/
  return (
    <div className="gap-10 flex justify-center items-center text-center center mt-20 ">
      <form onSubmit={onSubmit} className="bg-gray-300 rounded-lg" >
        <h1 className="text-center bold text-2xl">Profile</h1>
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
      {socials.length > 0 && (
        <div className="grid grid-cols-1 gap-5 items-center text-center mt-20" >
          {socials.map((social) => (
            <div key={social._id} className="border-2 bg-gray-300 border-black rounded-sm">
              <img src={social.image} className="w-60 rounded-full m-1 justify-items-center self-center" placeholder="Enter Image URL address" />
              <div className="m-1 rounded-md text-center" >Name: {social.profileName}</div>
              <div className="m-1 rounded-md text-center" >Age: {social.age}</div>
              <div className="m-1 rounded-md text-center" >Gender: {social.gender}</div>
              <div className="gap-2">
                <Link to={`/social/${social._id}`}>
                  <button className="border-solid border-2 border-black bg-blue-200 w-20 bg-white mb-1 m-1 w-11 rounded-lg">Edit</button>
                </Link>
                <Link to={`/social/community/delete${social._id}`}>
                  <button className="border-solid border-2 border-black bg-blue-200 w-20 bg-white mb-2 w-12 rounded-lg " onSubmit={handleDelete} >Delete</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Profile
