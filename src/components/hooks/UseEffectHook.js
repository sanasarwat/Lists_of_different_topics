import React,{useState, useEffect} from 'react'

function UseEffectHook() {
    const [count, changecount] = useState(0)
    const [count1, changecount1] = useState(50)
    
    const clickHandler=()=>{
      

        changecount(count+1)
    };

    useEffect(()=>{
        console.log('useeffect call')
    },[count]) //monitor that object which u want to use effect

    const clickHandlerDecrement=()=>{
      

        changecount1(count1-1)
    };


    
   
    return (
        <div>
            <h1>Count Up:{count}</h1>
            <button type='button' onClick={clickHandler}>Increament</button>

            <h1>Count Up:{count1}</h1>
            <button type='button' onClick={clickHandlerDecrement}>Dcreament</button>
        </div>
    )
}

export default UseEffectHook
