import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { toast } from 'react-hot-toast'
import { useParams } from "react-router-dom"



const ProfileDelete = () => {

  const navigate = useNavigate()
  const { id } = useParams()

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.delete(`/social/delete/${id}`, { profileName, age, gender, image })
      if (data.error) {
        toast.error(data.error)
      } else {
        toast.success('Profile Deleted!')
        navigate('/social')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="border-black border-solid bg-black text-white ">
      <form >
      <button className='bg-blue-300' onSubmit={onSubmit}>Yes! Delete Profile</button>
      <Link to='/social'>
      <button className='bg-blue-300'>No! Do NOT Delete Profile</button>
      </Link>
      </form>
    </div>
  )
}

export default ProfileDelete
