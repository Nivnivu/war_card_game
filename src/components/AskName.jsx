import React, {useState} from 'react';

export default function AskName(props) {
    const [name, setName] = useState('');
    const found = props.playerList.find(e => e.name == name);
    const checkIfPlayed = () => {
        if (found == undefined){
            props.addObjectToArray({name: name, roundWin: 0, roundLost: 0})
        } else {
            props.setRoundWin(found.roundWin)
            props.setcRoundWin(found.roundLost)
        }
    }

    return (
        <>
        <div>
        <h1>Welcome To War</h1>
    <p className='enterName'> Enter Your Name:</p>
    <input onChange={(e) => { setName(e.target.value)}} type="text"/>
    <br/>
    <br/>
    <button onClick={() => {props.changeName(name); checkIfPlayed()}}>Start The War !</button>
    </div>
    <div>
    <table>
    <tr>
        <th>Name</th>
        <th>Wins</th>
        <th>Losts</th>
    </tr>
      {props.playerList.map(item => (
        <tr><td>{item.name}</td><td>{item.roundWin}</td><td>{item.roundLost}</td> </tr>
      ))}
    </table>
    </div>
    </>
    )
  }