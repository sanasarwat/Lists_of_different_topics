import React, { Component } from 'react'

class CallbackRefs extends Component {
    constructor(props) {
        super(props)
    
       
        this.cbRef =null

        this.setCbRef=(element)=>{
            this.cbRef=element
        }
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        
    }
    clickHandler =()=>{
    
    console.log(this.cbRef.value)
    }
    render() {
        return (
            <div>
                 <input type='text' ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default CallbackRefs


//2nd way ref CallBack Ref
//1:create the ref
//assign the value null

//2: craete the method that will assign a dom element to ref we have create in step 1
//3: attach this method to input element
//4: 3rd step is to call the focus method in input element