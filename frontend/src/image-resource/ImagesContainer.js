import React from 'react'
import { connect } from 'react-redux'
import Image from './Image'
//import { getImages } from '../actions/index.js'

export const ImagesContainer = (props) => {

    const renderImages = () => {
        return props.images.map(image => {
            return <Image key={image.id} {...image}/>
        })
    }
    return (
        <div className="images-container">
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

