import React from 'react';

export default function Computer(props) {
    return (
        <div>
    <img src={ require( `${props.pack[props.counter].Img}` ) } width="150px" />
    <p className='wins'>Wins: {props.wins}</p>
    <p className='losts'>Losts: {props.losts}</p>
    <h1>{props.computerName}</h1>
    </div>
    )
  }