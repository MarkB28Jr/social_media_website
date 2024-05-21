import { useState, useEffect } from "react"
import axios from 'axios'
// import { useNavigate } from "react-router-dom"
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'


const Social = () => {
  const [socials, setSocials] = useState('')
  const [communitys, setCommunitys] = useState('')
  const [communityName, setCommunity] = useState('')

  const fetchSocials = async () => {
    let response = await axios.get('/social')
    setSocials(response.data)
  }
  const fetchCommunitys = async () => {
    let response = await axios.get('/social/community')
    setCommunitys(response.data)
  }


  
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/social/community', { communityName })
      setCommunity('')
      if (data.error) {
        toast.error(data.error)
      } else {
        console.log(data.id)
        toast.success('Community Added')
      }
      res.json(data)
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
        <h1 className="bold text-2xl text-center mt-20">Profile</h1>
        {socials.length > 0 && (
          <div className="grid grid-cols-1 justify-items-center  w-100" >
            {socials.map((social) => (
              <div key={social._id} className="grid left-0 top-0 bg-gray-300 border-2 border-black rounded-sm m-4">
                  <img src={social.image} className="w-60 rounded-full m-1 justify-items-center self-center" placeholder="Enter Image URL address" />
                <div className="m-1 rounded-md bold" >Name: {social.profileName}</div>
                <div className="m-1 rounded-md bold" >Age: {social.age}</div>
                <div className="m-1 rounded-md bold" >Gender: {social.gender}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col bg-purple-500 w-2/3 p-2">
        <div className="grid">
          <h1 className="text-center bold text-2xl">Communities</h1>
        </div>
        <div>
          {communitys.length > 0 && (
            <div className="grid grid-cols-1 justify-center" >
              {communitys.map((community) => (
                  <div key={community._id} className="bg-white border-2 border-solid border-black rounded-lg m-2">
                <Link to={`/social/community/${community._id}`}>
                    <div className="m-1 rounded-md text-center underline bold text-2xl" >{community.communityName}</div>
                    <div className="m-1 rounded-md text-xl" >{community.content}</div>
                </Link>
                  </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-2 ">
        </div>
        <form onSubmit={onSubmit}>
          <div className="flex gap-2">
            <input
              type="text"
              value={communityName}
              onChange={(e) => setCommunity(e.target.value)}
              placeholder="Add Content"
              className="bg-white flex rounded-lg p-1 w-96  h-8 mt-2 "
            />
            <button className=" "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" rounded-lg bg-gray-200 w-8 h-8">
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
