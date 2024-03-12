import React from 'react'

function LearnLiftingStateUp(props) {
    const handleClick = (e)=>{
        e.preventDefault()
        let dt = "i Am child data"
        props.myClick(dt)


    }
  return (
    <div>
      

          <h1>LearnLiftingStateUp</h1>
          <button onClick={handleClick}>Click1</button>
  </div>
  )
}

export default LearnLiftingStateUp
