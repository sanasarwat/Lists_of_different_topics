import React, { Component } from 'react'

export class StrictMode extends Component {
    componentWillMount(){
        console.log('cmpwillmount')
    }
    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default StrictMode
