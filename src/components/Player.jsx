import React from 'react';

export default function Player(props) {
    return (
        <div>
    <img src={ require( `${props.pack[props.counter].Img}` ) } width="150px" />
    <p className='wins'>Wins: {props.wins}</p>
    <p className='losts'>Losts: {props.losts}</p>
    <h1>{props.playerName}</h1>
    <p className='roundLost'>Round Losts: {props.lost}</p>
    <p className='roundWon'>Round Wins: {props.won}</p>
    </div>
    )
  }