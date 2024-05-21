import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'

const CommunityDetails = () => {
  const { id } = useParams()
  const [community, setCommunity] = useState("")


  const fetchCommunitys = async () => {
    let response = await axios.get(`/social/community/${id}`)
    setCommunity(response.data)
    console.log(response)
  }
  useEffect(() => {
    fetchCommunitys();
  }, [id])

  // useEffect(() => {
  //   const fetchCommunity = async () => {
  //     const response = await axios.get(`/social/community/${id}`)
  //     setCommunity(response.data)
  //   }
  //   fetchCommunity()
  // }, [id])

  if (!community) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{community.communityName}</h1>
      <p>{community.content}</p>
      {/* display other details of the community here */}
    </div>
  )
}

export default CommunityDetails
