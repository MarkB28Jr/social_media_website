import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

const CommunityDetails = () => {
  const { id } = useParams()
  const [community, setCommunity] = useState("")
  const [socials, setSocials] = useState('')

  const fetchSocials = async () => {
    let response = await axios.get('/social')
    setSocials(response.data)
  }
  const fetchCommunitys = async () => {
    let response = await axios.get(`/social/community/${id}`)
    setCommunity(response.data)
    console.log(response)
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

  //   return (
  //     <div>
  //       {/* display other details of the community here */}
  //     </div>
  //   )
  // }
  return (
    <div className="flex h-screen ">
            <div className="bg-purple-100 w-1/3">
        <h1 className="text-center bold text-2xl">Profile</h1>
        {socials.length > 0 && (
          <div className="grid grid-cols-2  bg-gray-300  justify-center items-center text-center" >
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
        <div>
        <h1 className="text-center bold text-2xl underline">{community.communityName}</h1>
        </div>
        <div className="flex-grow text-center items-center border-solid border-black">
          <div>
          <h1 className="text-center bold text-2xl">{community.content}</h1>
          </div>
        </div>
        <div className="flex gap-2">
          <input type="text"
            placeholder="Message here"
            className="bg-white flex-grow border rounded-sm p-2"
          />
          <button className=" p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommunityDetails
