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
//   useEffect(()=>{
// console.log("UseEffect called");
//   })

// It runs once when the component is mounted([] mean no dependencies)
  // useEffect(()=>{
  //   console.log("Useeffect called")
  // },[])
  //  it runs ewhen the component is mounted and whenever dependence changes.
  // useEffect(()=>{
  //    console.log("Useeffect called")
  //    },[count])
  useEffect(()=>{
    console.log("Useeffect called")
    return ()=>{
      console.log("Components will unmount !!")
    }
    },[count])
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
