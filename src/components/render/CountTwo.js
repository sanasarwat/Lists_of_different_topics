import React, { Component } from 'react'

class CountTwo extends Component {
    
   
    render() {
        const {count,clickCount} =this.props
        return (
            
            <div>
                <button onClick={clickCount}>Click {count} Count</button>
            </div>
        )
    }
}

export default CountTwo
