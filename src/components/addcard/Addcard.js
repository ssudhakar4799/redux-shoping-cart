import React from 'react'
import { useSelector } from 'react-redux'

export default function Addcard() {
    const state=useSelector((state)=>state)
    console.log(state);
  return (
    <div>Addcard</div>
  )
}
