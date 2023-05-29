import React, { useState } from 'react'

const ShortCircuit = () => {
    const [isError,setIsError]=useState(false)
  return (
    <React.Fragment>
      {isError && <h1 className='text-center text-3xl'>Error...</h1>}
      <h1 className='text-center text-4xl'>{isError ? <p>There is Error....</p> : <p>There is no Error...</p>}</h1>
     <button className='mx-[600px] my-[50px]' onClick={()=>setIsError(!isError)}>click </button>
    </React.Fragment>
  )
}

export default ShortCircuit
