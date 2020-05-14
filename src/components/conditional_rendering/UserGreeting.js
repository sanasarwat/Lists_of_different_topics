import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    //if else statment is not valid in jsx
    render() {

        // Shortcirut approach

          return this.state.isLoggedIn && <div>Welcome sana sarwat</div>



        //turnary approach


        // return (
        //     this.state.isLoggedIn ?  (
        //         <div>Welcome Sana</div>
        //         )
        //         :
        //         (
        //             <div>Welcome Guest</div>
        //         )
        // )
        

        //   2nd approach



        //     let message  //this is elment variable approach

        //    if(this.state.isLoggedIn){
        //     message= <div>sana sarwat</div>
        //    }
        //    else{
        //     message= <div>Welcome Guest</div>
        //    }

        //     return <div>{message}</div>






        //first approach



        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>sana sarwat</div>
        //     )
        // }     
        // else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }










        // return (
        //     <div>
        //         <div>UserGreeting</div>
        //         <div>Welcome Guest</div>
        //     </div>

        // )
    }
}

export default UserGreeting
