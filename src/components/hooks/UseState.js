import React,{useState} from 'react'

function UseState() {
    //array method 
//    const usestate = useState('sanasarwat');
//    const name= usestate[0]
//    const changename = usestate[1]

    //destructured method
    const [name, changename] = useState('sana sarwat')
   const clickHandler=()=>{
    changename('asadrehman')
   }
   
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={clickHandler} type='button'>Change</button>
        </div>
    )
}

export default UseState
