import React from 'react'
import { useState } from 'react'
const SetCount = () => {
    const [value, setValue] = useState(0)
  return (
    <React.Fragment>
      <section style={{margin:'8rem'}}>
        <h2>{value}</h2>
        <button onClick={()=>setValue(value+1)}>Increse</button>
        <button  onClick={()=>{setValue(value-1)}}>Decrease</button>
        <button onClick={()=>{setValue(0)}}>reset</button>
      </section>
    </React.Fragment>
  )
}

export default SetCount
