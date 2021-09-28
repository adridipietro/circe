import React from 'react'
import { connect } from 'react-redux'
import { ImageCard } from './ImageCard'
//import Search from '../Search'


const ImagesContainer = (props) => {
/*     const { search } = window.location;
    const query = new URLSearchParams(search).get('s'); */

    const renderImages = () => {
        //debugger
        return props.images.map(image => {
            return <ImageCard key={image.id} {...image}/>
        })
       
    }
    return (
        <div className="images-container">
            {/* <Search 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          /> */}
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

