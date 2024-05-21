import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
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
      const { data } = await axios.post('/social', { profileName, age, gender })
      setSocials([...socials, data])
      setProfileName("")
      setAge("");
      setGender("");
      if (data.error) {
        toast.error(data.error)
      } else {
        toast.success('Profile made!')
        navigate('/community')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchSocials();
  }, [])
  /*************** Return ***************/
  return (
    <div className="gap grid justify-center items-center text-center center ms-8">
      <form onSubmit={onSubmit} className="bg-gray-300 rounded-lg" >
        <h1 className="text-center">Profile</h1>
        <div>
          {/* <label>Name</label> */}
          <input
            type="text"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            placeholder="Enter Profile Name"
            className="m-3 rounded-md text-center"

          />
        </div>
        <div>
          {/* <label>Age</label> */}
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}

            placeholder="Enter Age"
            className="m-3 rounded-md text-center"
          />
        </div>
        <div>
          {/* <label>Image URL</label> */}
          <input
            type="text"
            value={image}
            placeholder="Enter Image URL address"
            onChange={(e) => setImage(e.target.value)}
            className="m-3 rounded-md text-center"
          />
        </div>
        <div>
          {/* <label>Gender</label> */}
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
        <div className="grid grid-cols-2  bg-gray-300  justify-center items-center text-center mt-20" >
          {socials.map((social) => (
            <div key={social._id} className="border-4 border-black-200 rounded-sm">
              <div className="m-1 rounded-md text-center" >Name: {social.profileName}</div>
              <div className="m-1 rounded-md text-center" >Age: {social.age}</div>
              <div className="m-1 rounded-md text-center" >Gender: {social.gender}</div>
              <div>
                <label>Image: <img src={social.image} alt="" className="m-1 rounded-md text-center" placeholder="Enter Image URL address" /></label>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Profile
