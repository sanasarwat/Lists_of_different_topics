import React, { Component } from 'react'
// import RegularComp from './RegularComp'
// import PureComp from './PureComp'
import Memo from './Memo'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'sana'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'sana'
            })
        },2000)
    }
    
    render() {
        console.log('****ParentCompRender***')
        return (
            <div>
                 ParentComp
                 <Memo name={this.state.name}/>
                {/* <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
