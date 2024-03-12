import React from 'react'
import { useState } from 'react'

function LearnState() {
    const [num,setNum]=useState(0);
    console.log(num);
    const handleNum=()=>{
        // setNum(9)
    }
    const [position,setPosition]=useState({x:1,y:2})
    // console.log(position.x)
    const handlePosition=()=>{
        setPosition({x:4,y:6})
        // setResult(...Result)
    }
  return (
    <div>
      <h1>LearnState</h1>
    
    
    <h2>Number :{num}</h2>
<button onClick={handleNum}>Change Number</button>
<h2>position :{position.x}</h2>
<button onClick={handlePosition}>Change position</button>



    </div>
  )
}

export default LearnState
