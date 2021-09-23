import React from 'react'
import  { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { deleteImage, likeImage } from '../actions/index'
import { useHistory } from 'react-router'

import { Button } from 'react-bootstrap'


const Image = (props) => {
    const history = useHistory()
    const image = useSelector(state => state.images.images.find(image => image.id === parseInt(props.match.params.id)))
   

    const handleDelete = () => { 
        //debugger
        props.deleteImage(image.id)
        //document.querySelector(`#image-${image.id}`).remove()
        history.push(`/images`)
    }
    
    const handleLike = () =>{
        props.likeImage(image.id)
        history.push(`/images/${image.id}`)
    }


    return (

            <div className="single-image" id={`image-${image.id}`}>
                <h4>{image.name}</h4>
                <p>source: {image.source}</p>
                <p>caption: {image.caption}</p>
                <p>likes: {image.likes}</p>
                <br/>
                <Button variant="secondary"className="delete" onClick={handleDelete} id={image.id}>delete</Button>
                <Button variant="success" className="like" onClick={handleLike} id={image.id}>like</Button>
                        
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
        deleteImage: (id) => dispatch(deleteImage(id)),
        likeImage: (id) => dispatch(likeImage(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Image)
