import React, { useEffect, useState } from 'react'
// import { useEffect } from 'react'

const LearnUseEffect=()=> {
  const [count,setCount]=useState(0)
  const handleCount =()=>{
    setCount(count +1)
  }
  const [randomNumber,setRandomNumber]=useState(null);
  const generateRandomNumber =()=>{
    const newRandomNumber =Math.floor(Math.random()*100)+1;
    setRandomNumber(newRandomNumber);
  }
  // Example - it runs times when component is mounted and re-render 
  useEffect(()=>{
console.log("UseEffect called");
  })
  return (
    <div>
      <h1>LearnUseEffect</h1>
      <h2>Count : {count}</h2>
      <button onClick={handleCount}>Increase Count</button>
      <hr/>
      <h1>LearnUseEffect</h1>
      <h2>randomNumber : {randomNumber}</h2>
      <button onClick={generateRandomNumber}>RandomNumber</button>
    </div>
  )
}

export default LearnUseEffect;
