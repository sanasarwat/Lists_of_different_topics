import React from 'react'

function Memo({name}) {
    console.log('MemocompRendering')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(Memo)
