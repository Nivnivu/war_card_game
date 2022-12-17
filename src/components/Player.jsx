import React from 'react';

export default function Player(props) {
    const img = require( `${props.pack[props.counter].Img}` )
    return (
        <div>
    <img src={img}  />
    <p className='wins'>Wins: {props.wins} <span className='losts'>  Losts: {props.losts}</span></p>
    <h1>{props.playerName}</h1>
    <p className='roundLost'>Round Losts: {props.lost}</p>
    <p className='roundWon'>Round Wins: {props.won}</p>
    </div>
    )
  }