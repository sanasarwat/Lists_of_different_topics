import React from 'react'

const DestructingProps =({name,heroname}) => {
    //const {name,heroname} =props
    
    return (
        <div>
            Hello {name} a.k.a {heroname}
        </div>
    )
}

export default DestructingProps
