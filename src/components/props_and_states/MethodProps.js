import React, { Component } from 'react'
import ChildComp from './ChildComp'

class MethodProps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentname:'parent'
        }
        this.greetParent =this.greetParent.bind(this)
    }

    greetParent(childname){
        //alert('Hello'+this.state.name)
        //Es6 technique
        alert(`Hello ${this.state.parentname} from ${childname}`)
    }
    
    render() {
        return (
            <div>
                <ChildComp greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default MethodProps

//this is parent Component 

// call the child comp from parent comp
