import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

const CommunityDetails = () => {
  const { id } = useParams()
  const [community, setCommunity] = useState("")
  const [socials, setSocials] = useState('')
  const [content, setContent] = useState('')

  const fetchSocials = async () => {
    let response = await axios.get('/social')
    setSocials(response.data)
  }
  const fetchCommunitys = async () => {
    let response = await axios.get(`/social/community/${id}`)
    setCommunity(response.data)
    console.log(response)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(`/social/community/${id}`, { content })
      if (data.error) {
        toast.error(data.error)
      } else {
        toast.success('Comment Added')
      }
    } catch (error) {
      console.log(error)
    }
  }



  useEffect(() => {
    fetchCommunitys();
  }, [id])

  useEffect(() => {
    fetchSocials();
  }, [])

  if (!community) {
    return <div>Loading...</div>
  }


  return (
    <div className="flex h-screen flex-center ">
      <div className="bg-purple-100 w-1/3">
        <h1 className="text-center bold text-2xl">Profile</h1>
        {socials.length > 0 && (
          <div className="grid grid-cols-1 justify-items-center text-center" >
            {socials.map((social) => (
              <div key={social._id} className="border-1 border-black-200 rounded-sm border-solid border-black">
                <div>
                  <img src={social.image} className="w-60 rounded-full m-1 justify-items-center self-center" placeholder="Enter Image URL address" />
                </div>
                <div>{social.user}</div>
                <div className="m-1 rounded-md text-center" >Name: {social.profileName}</div>
                <div className="m-1 rounded-md text-center" >Age: {social.age}</div>
                <div className="m-1 rounded-md text-center" >Gender: {social.gender}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col bg-purple-500 w-2/3 p-2">
        <div>
          <h1 className="text-center bold text-2xl underline">{community.communityName}</h1>
        </div>
        <div className="bg-white border-1 border-solid border-black mt-3">
         {community.content}
        </div>

        <form onSubmit={onSubmit}>
          <div className="flex gap-1 mt-20 justify-items-center">
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Add Content"
              className="bg-white flex rounded-lg p-1 w-96  h-8 mt-2 "
            />
            <button className=" p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" rounded-lg bg-gray-200 w-8 h-8">
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
