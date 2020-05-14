import React from 'react'

function IndexKkey() {

    const names=['sana','saba','sabiqa','sana']
    const nameList =  names.map( (x, index) => <h1 key={index}>{index}  {x}</h1>)

    return (
        <div>
              {nameList}
        </div>
    )
}

export default IndexKkey
