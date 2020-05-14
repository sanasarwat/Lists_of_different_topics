import React, { Component } from 'react'

class HoverCount extends Component {
    
    render() {
        const {count,clickCount} =this.props
        return (
            <div>
                <h2 onMouseOver={clickCount}>Hoverd {count} Times</h2>
            </div>
        )
    }
}

export default HoverCount
