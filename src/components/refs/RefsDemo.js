import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
        
    }

    componentDidMount(){
       
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    clickHandler =()=>{
    //  alert(this.inputRef.current.value)
    console.log(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo

//1st step is create ref using react.createrefs method.
//2nd step is to attach this ref to input element in render method
//3rd step is to call the focus method in input element



