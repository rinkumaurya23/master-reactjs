import React, { useState } from 'react'

function CounterApp() {
    const [count,setCount]=useState(0)
    const handleCounter=()=>{
        setCount(count+1)
        // setCount((prevCount)=>prevCount+1)
    }
    const resetCounter=()=>{
        setCount(0)
    }
  return (
    <div>
      <h1>count :{count}</h1>
      <button onClick={handleCounter}>Incerase</button>
      <button onClick={resetCounter}>Reset Count</button>

    </div>
  )
}

export default CounterApp;
