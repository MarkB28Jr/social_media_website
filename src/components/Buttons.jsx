import { useState, useEffect } from "react"

const Buttons = () => {
  
  // const [destroy, setDestroy] = useState('')
  // const [edit, setEdit] = useState('')
  
  const [deleteButton, setDeleteButton] = useState('')
  const [editButton, setEditButton] = useState('')
  
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded" type="submit" >Register</button>
    </div>
  )
}

export default Buttons
