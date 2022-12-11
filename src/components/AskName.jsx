import React, {useState} from 'react';

export default function AskName(props) {
    const [name, setName] = useState('');
    return (
        <div>
        <h1>Welcome To War</h1>
    <p className='enterName'> Enter Your Name:</p>
    <input onChange={(e) => { setName(e.target.value)}} type="text"/>
    <br/>
    <br/>
    <button onClick={() => {props.changeName(name)}}>Start The War !</button>
    </div>
    )
  }