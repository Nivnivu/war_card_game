import React from 'react';

export default function Computer(props) {

    const img = require( `${props.pack[props.counter].Img}` )

    return (
        <div>
        <h1>{props.computerName}</h1>
    <img src={img} />
    <p className='wins'>Wins: {props.wins} <span className='losts'>Losts: {props.losts}</span></p>
   
    
    </div>
    )
  }