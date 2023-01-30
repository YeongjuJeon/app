import React, { useRef, useState } from 'react'
import './App.css'

export default function App() {
  const [count, setcount]=useState(0);
  const countRef = useRef(0);
  console.log(countRef);
  const increaseCountState= ()=>{
    setcount(count + 1)
  }
  const increaseCountRef = ()=>{
    countRef.current = countRef.current+1;
  }
  return (
    <div>
      <p className='state'>State : {count}</p>
      <p className='state'>Ref : {countRef.current}</p>
      <button className='btn' onClick={increaseCountState}>state up</button>
      <button className='btn' onClick={increaseCountRef}>Ref up</button>
    </div>
  )
}

