import React from 'react'

export default function Card(props) {
  return (
    <div style={{width:'60px' ,height:'100px',border:'1.5px solid blue' , borderRadius:'8px'}} >
<h1>{props.cardValue()}</h1>



    </div>
  )
}
