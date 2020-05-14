import React, { Component } from 'react'

class LifeCycleB extends Component {
    //1st step create constructr
    constructor(props) {
        super(props)
    
        this.state = {
             name:'sana'
        }
        console.log('LifeCycleB Constructer')
    }
     
    //2nd method
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB getDrivedStateFromProps')

        return null
    }
     //4rth method

    componentDidMount(){
        console.log('LifeCycleB ComponentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')

        return true
    }

    getSnapshotBeforeUpdate(prveProps,prevState ){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }
    
    //3rd method 
    render() {
        console.log('LifeCycleB Render')
        return (
            <div>
               LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
