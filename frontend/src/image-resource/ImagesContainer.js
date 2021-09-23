import React from 'react'
import { connect } from 'react-redux'
import { ImageCard } from './ImageCard'


const ImagesContainer = (props) => {

    const renderImages = () => {
        //debugger
        return props.images.map(image => {
            return <ImageCard key={image.id} {...image}/>
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

