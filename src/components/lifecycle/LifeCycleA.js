import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    //1st step create constructr
    constructor(props) {
        super(props)
    
        this.state = {
             name:'sana'
        }
        console.log('LifeCycleA Constructer')
       
    }
     
    //2nd method
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDrivedStateFromProps')

        return null
    }
     //4rth method

    componentDidMount(){
        console.log('LifeCycleA ComponentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')

        
    }

    getSnapshotBeforeUpdate(prveProps,prevState ){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }
    

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }

    changeStatehander = () => {
        this.setState({
            name:'sarwat'
        })
    }
    
    //3rd method 
    render() {
        console.log('LifeCycleA Render')
        return (
            <div>
               LifeCycleA
               <button onChange={this.changeStatehander}>Change state</button>
               <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
