import React, { Component } from 'react'

class RenderCount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    
    // these two method will work

    // clickCount=()=>{
    //     this.setState({
    //        count:this.state.count+1
    //     })
    // }


    clickCount=()=>{
        this.setState(prev=>{
           return {count: prev.count+1}
        })
    }
    render() {
        return (
            <div>
                {this.props.children(this.state.count,this.clickCount)}
            </div>
        )
    }
}

export default RenderCount
