import React, { Component } from 'react'

class Greet extends Component {
    
    render() {
        const {name,heroname} =this.props
        //const {state1,state2} =this.state
        return (
            <div>
                {name} a.k.a {heroname}
            </div>
        )
    }
}

export default Greet
