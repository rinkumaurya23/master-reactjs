import React from 'react'

function LearnEvent() {
    const handleclick=(e)=>{
     e.preventDefault()
     console.log("Button Clicked 1")
    }
    const handleClick2=(myId)=>{
     
        console.log("Button Clicked 2",myId)
       }
  return (
    <div>
      <h1>LearnEvent</h1>
      {/* ?Without argument */}
      <button onClick={handleclick}>click1</button>
      {/* ?with argument */}
      <button onClick={(e)=>handleClick2("Emp2123")}>click2</button>
    </div>
  )
}

export default LearnEvent;
