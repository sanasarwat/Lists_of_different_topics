import React, { Component } from 'react'
import abc from '../images/abc.jpg'

class ImagePractice2 extends Component {
    render() {
        return (
            <div>
               <img src={abc} alt='mypic' height='200px'/>
            </div>
        )
    }
}

export default ImagePractice2

//when image save in src folder
