import React from 'react'
import ReactDOM from 'react-dom'


const modalRoot = document.getElementById('portal-root')

function Portal() {
   
    return ReactDOM.createPortal (
        <div>
            <h1>
            Portal Demo
            </h1>,
           modalRoot
        </div>
         
    )
}

export default Portal
