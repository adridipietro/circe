import React from 'react'
import { connect } from 'react-redux'
import Image from './Image'


const ImagesContainer = (props) => {

    const renderImages = (props) => {
        //debugger
        return props.images.map(image => {
            return <Image key={image.id} {...image}/>
        })
       
    }
    return (
        <div className="images-container">
            <h4> IMAGES </h4>
            {renderImages(props)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        images: state.images.images
    }
}

/* const mapDispatchToProps = {
    
} */

export default connect(mapStateToProps, null)(ImagesContainer)

