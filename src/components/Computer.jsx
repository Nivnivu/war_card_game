import React from 'react';

export default function Computer(props) {
    return (
        <div>
        <h1>{props.computerName}</h1>
    <img src={ require( `${props.pack[props.counter].Img}` ) } />
    <p className='wins'>Wins: {props.wins} <span className='losts'>Losts: {props.losts}</span></p>
   
    
    </div>
    )
  }