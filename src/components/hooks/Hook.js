import React from 'react'
import CustomHook from './CustomHook'

function Hook() {
    const data = CustomHook();
    return (
        <div>
            <h1>Count up:{data.count}</h1>
            <button onClick={data.countHnadler}>Increament</button>
        </div>
    )
}

export default Hook
