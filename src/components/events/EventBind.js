import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:'Hello'
        }
        //intilized the bind method in constructor
        this.msghandler =this.msghandler.bind(this)
    }
    // msghandler(){
    //     this.setState({
    //         msg:'GoodBye'
    //     })
    //     console.log(this)
    // }
     
    //4th approach
    msghandler=()=>{
        this.setState({
            msg:'GoodBye'
        })
        console.log(this)
    }

   

    
    render() {
        return (
            <div>
                 {this.state.msg}
                 {/* //1stmethod */}
                {/* <button onClick={this.msghandler.bind(this)}>Click</button> */}

                {/* 2nd method to bind  */}
                {/* <button onClick={()=>this.msghandler()}>Click</button> */}


                {/* 3rd approach */}
                <button onClick={this.msghandler}>Click</button>

            </div>
        )
    }
}

export default EventBind
