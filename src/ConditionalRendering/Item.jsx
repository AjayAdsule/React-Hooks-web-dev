import React, { useEffect, useState } from 'react'

const Item = () => {
  const [size,setSize]=useState(window.innerWidth)
  const checkSize=()=>{
    setSize(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize',checkSize)
    return()=>{
      window.removeEventListener('resize',checkSize)
    }
  },[])
  return (
    <React.Fragment>
        <h1>window size :{size}px</h1>
    </React.Fragment>
  )
}

export default Item
