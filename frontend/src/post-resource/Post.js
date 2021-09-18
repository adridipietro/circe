import React from 'react'
import { useHistory } from 'react-router'
import { deletePost, likePost } from '../actions/index'
import { connect } from 'react-redux'


const Post = (props) => {
    const history = useHistory()

    const handleDelete = () => {
        props.deletePost(props.id)
        document.querySelector(`#post-${props.id}`).remove()
        history.push('/posts')
    }

    const handleLike = () => {
        props.likePost(props.id)
        history.push('/posts')
    }

    return (
        <div className="single-post" id={`post-${props.id}`}>
            <h4>{props.name}</h4>
            <p>{props.text}</p>
            <p>{props.likes}</p>
            <br/>
            <button className="delete" onClick={handleDelete} id={props.id}>delete</button>
            <button className="like" onClick={handleLike} id={props.id}>like</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id)),
        likePost: (id) => dispatch(likePost(id))
    }
}

export default connect(null, mapDispatchToProps)(Post)
