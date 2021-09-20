import React from 'react'
import { connect } from 'react-redux'
import { deleteImage, likeImage } from '../actions/index'
import { useHistory } from 'react-router'


const Image = (props) => {
    

    const history = useHistory()

    const handleDelete = () => {
        props.deleteImage(props.id)
        document.querySelector(`#image-${props.id}`).remove()
        history.push(`/images`)
    }

    const handleLike = () => {
        props.likeImage(props.id)
        history.push(`/images/${props.id}`)
    }

    return (
        <div className="single-image" id={`image-${props.id}`}>
            <h4>{props.name}</h4>
            <p>source: {props.source}</p>
            <p>caption: {props.caption}</p>
            <p>likes: {props.likes}</p>
            <br/>
            <button className="delete" onClick={handleDelete} id={props.id}>delete</button>
            <button className="like" onClick={handleLike} id={props.id}>like</button>
            
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteImage: (id) => dispatch(deleteImage(id)),
        likeImage: (id) => dispatch(likeImage(id))
    }
}

export default connect(null, mapDispatchToProps)(Image)
