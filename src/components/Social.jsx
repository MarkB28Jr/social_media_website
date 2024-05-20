import { useEffect, useState, useCallback } from "react"
import axios from 'axios'


const Social = () => {
  


/*************** Return ***************/
return (
  <div className="flex h-screen ">
    <div className="bg-purple-100 w-1/3">
      <h1 className="text-center items-center">Contacts</h1>
    </div>


    <div className="flex flex-col bg-purple-500 w-2/3 p-2">
      <div className="flex-grow">
        <h1 className="text-center items-center">Different Communitys
          </h1> 
      </div>
      <div className="flex gap-2">
      </div>
    </div>
  </div>
)
}

export default Social
