import React, { Component } from 'react'


class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:''
        }
    }

    eventhandler =(event)=>{
        
        this.setState({
            username:event.target.value
        })
    }
    



    render() {
        return (
            <form>
                <div>
                    <label>
                        User Name
                    </label>
                    <input type='text' value={this.state.username} onChange={this.eventhandler}/>
                </div>
            </form>
        )
    }
}

export default Form
