
// 4 methods

// css style
// inline StyleSheet
// css module
// css in js libraries


import React from 'react'
import './myStyle.css'

function Style() {
    const heading ={
        fontSize: '72px',
        color:'green'

    }
    return (
        <div>
            <h1 className='primary'>StyleSheet</h1>
            {/* Inline css */}
            <h2 style={heading}>Inline css</h2>
        </div>
    )
}

export default Style
