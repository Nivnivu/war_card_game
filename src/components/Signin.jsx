import React,{useState} from 'react'

export default function Signin(props) {



    const [name,setName]=useState('');
    const [allName,setAllName]=useState([]);

    const addName=()=>{
      setAllName([...allName,name])

    }


  return (
    <div>

<h1>Ready for war </h1>

<input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='enter your name'/>
<br />
<button onClick={()=>{props.validName(name)}}  > Enter</button>

{addName()}

<h1> {allName}</h1>



    </div>
  )
}
