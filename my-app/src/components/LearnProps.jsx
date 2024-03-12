// import React from 'react'

// function LearnProps(props) {
//   return (
//     <div>
//       <h1>LearnProps1</h1>
//       <h2>All Props</h2>
//       <h3>{props.name}</h3>
//       <h3>{props.jack}</h3>

//     </div>
//   )
// }

// export default LearnProps;

import React from 'react'

function LearnProps({name,jack}) {
  return (
    <div>
    
      <h2>All Props</h2>
      <h3>{name}</h3>
      <h3>{jack}</h3>

    </div>
  )
}

export default LearnProps;