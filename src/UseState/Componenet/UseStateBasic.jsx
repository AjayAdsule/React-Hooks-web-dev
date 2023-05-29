import React from 'react'
import { useState } from 'react'
const UseStateBasic = () => {
   const [Title, setTitle] = useState("Hello")
    const HandleChange=()=>{
      setTitle("Hello Ajay")
        console.log(`title has change`);
    }
  return (
    <React.Fragment>
      <h1>{Title}</h1>
      <button onClick={HandleChange}>Change</button>
    </React.Fragment>
  )
}

export default UseStateBasic
