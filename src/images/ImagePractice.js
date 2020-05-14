import React, { Component } from 'react'

class ImagePractice extends Component {
    render() {
        return (
            <div>
                <img src={process.env.PUBLIC_URL+'/abc.jpg'} alt='my pic' height='200px' />
            </div>
        )
    }
}

export default ImagePractice

//when image save in public folder
