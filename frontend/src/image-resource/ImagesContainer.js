import React from 'react'
import { connect } from 'react-redux'
import { ImageCard } from './ImageCard'
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { updateQuery } from '../actions/index.js'
import Search from '../Search'


//debugger 

const filteredSearch = (props, query) => {
    return props.images.filter(image => {
        return image.name.toLowerCase().includes(query.toLowerCase())
    })
}

const renderImages = (id = 0, props, query ) => {
    if (!query){
        return props.images.map(image => {
            return <ImageCard key={image.id} {...image} />
        })
    } else if (query){
        return filteredSearch(props, query).map(image => {
            return <ImageCard key={image.id} id={id} {...image} />
        })
    }
}


const ImagesContainer = (props) => {
    const { id } = useParams()
    const query = useSelector(state => state.images.query)

    return (
        <div className="images-container">
            <Search images={props.images} updateQuery={props.updateQuery}/>
            <h4> IMAGES </h4>
            {renderImages(id, query, props)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        images: state.images.images
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateQuery: (query) => dispatch(updateQuery(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesContainer)

