import React, { useState } from 'react'
import axios from "axios"

const App = () => {
  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [roll,setRoll]=useState("")
  let [reg,setReg]=useState("")
  let [error,setError]=useState("")

  let handleSubmit = async ()=>{
    let data = await axios.post("http://localhost:8000/createtodos", {
      name: name,
      email: email,
      roll: roll,
      reg: reg
  },
  {
    headers :{
      authorization: "dghzf"
    }
  }
  )
   if(data.data.error){
     setError(data.data.error)
    }else {
      setError(data.data.success)
   }
  }


  return (
    <div>
      {
        error && 
        <h1>{error}</h1>
      }
      <input onChange={(e)=>setName(e.target.value)} placeholder='Name' className='border boreder-solid border-black' type="text" />
      <input onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className='border boreder-solid border-black' type="text" />
      <input onChange={(e)=>setRoll(e.target.value)} placeholder='Roll' className='border boreder-solid border-black' type="text" />
      <input onChange={(e)=>setReg(e.target.value)} placeholder='Registration' className='border boreder-solid border-black' type="text" />
      <button className='bg-blue-400 px-10 py-3 rounded ' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App