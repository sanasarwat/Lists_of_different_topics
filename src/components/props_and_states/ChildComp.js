import React from 'react'
import MethodProps from './MethodProps'

function ChildComp(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            {/* call the parent method from child comp */}

            <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComp
