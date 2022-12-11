import React from "react";

export default function Final(props){
    return <div className="container"> 
    <h1>You {props.string} The Round!</h1>
    <p className="roundWon">Rounds Won: {props.roundWin}</p>
    <p className="roundLost">Rounds Lost: {props.lost}</p>
    <button onClick={() => props.setCard(0)}>Play Another Round!</button>
    <br/>
    <br/>
    <button onClick={() => window.location.reload()}>Change Player</button>
    </div>
}