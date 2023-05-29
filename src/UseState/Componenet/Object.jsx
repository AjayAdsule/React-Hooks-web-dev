import React from 'react'
import { useState } from 'react'
const Object = () => {
    const obj={
        name: 'ajay',
        age:22,
        city:'Delhi'
    }
    const [detail, setDetail] = useState(obj)
    const handleChange=()=>{
        setDetail({...obj,age:25}) //if you want to change object the syntax is use spread opretor for copy of exiting object than change the object
    }
  return (
    <React.Fragment>
        <h1>{detail.name}</h1>
        <h2>{detail.age}</h2>
        <h2>{detail.city}</h2>
        <button onClick={handleChange}>change</button>
    </React.Fragment>
  )
}

export default Object
