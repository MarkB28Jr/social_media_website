import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { toast } from 'react-hot-toast'


const Social = () => {

  const navigate = useNavigate()
  const [socials, setSocials] = useState('')
  const [communitys, setCommunitys] = useState('')
  const [profileName, setProfileName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [image, setImage] = useState('')

  const fetchSocials = async () => {
    let response = await axios.get('/social')
    setSocials(response.data)
  }
  const fetchCommunitys = async () => {
    let response = await axios.get('/social/community')
    setCommunitys(response.data)
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
  useEffect(() => {
    fetchCommunitys();
  }, [])

  /*************** Return ***************/
  return (
    <div className="flex h-screen ">
      <div className="bg-purple-100 w-1/3">
        <h1 className="text-center items-center">Profile</h1>
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


      <div className="flex flex-col bg-purple-500 w-2/3 p-2">
        <div className="grid">
          <h1 className="text-center items-center">Different Communitys</h1>
        </div>
        <div>
        {communitys.length > 0 && (
          <div className="grid grid-cols-1  bg-gray-300  justify-center items-center text-center mt-20" >
            {communitys.map((community) => (
              <div key={community._id} className="border-4 border-black-200 rounded-sm">
                <div className="m-1 rounded-md text-center" >Community: {community.communityName}</div>
                <div className="m-1 rounded-md text-center" >Content: {community.content}</div>
              </div>
            ))}
          </div>
        )}
        </div>
        <div className="flex gap-2">
        </div>
      </div>
    </div>
  )
}

export default Social
