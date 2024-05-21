import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { toast } from 'react-hot-toast'
import { useParams } from "react-router-dom"



const ProfileUpdate = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const [socials, setSocials] = useState('')
  const [profileName, setProfileName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [image, setImage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/social/${id}`, { profileName, age, gender, image })
      setSocials([...socials, data])
      if (data.error) {
        toast.error(data.error)
      } else {
        toast.success('Profile Updated!')
        navigate('/social')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="gap grid justify-center items-center text-center center mt-20">
      <form onSubmit={onSubmit} className="bg-gray-300 rounded-lg" >
        <h1 className="text-center bold text-2xl">Edit Your Profile</h1>
        <div>
          <input
            type="text"
            value={image}
            placeholder="Update Image URL"
            onChange={(e) => setImage(e.target.value)}
            className="m-3 rounded-md text-center"
          />
        </div>
        <div>
          <input
            type="text"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            placeholder="Update Name"
            className="m-3 rounded-md text-center"
          />
        </div>
        <div>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Update Age"
            className="m-3 rounded-md text-center"
          />
        </div>
        <div>
          <input
            type="text"
            value={gender}
            placeholder="Update Gender"
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

export default ProfileUpdate
