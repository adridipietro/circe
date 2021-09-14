import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { deletePost, likePost } from '../actions/index'
import { connect } from 'react-redux'


const Post = (props) => {
    const history = useHistory()
    const [count, setCount] = useState(0)

    const handleDelete = () => {
        props.deletePost(props.id)
        document.querySelector(`#post-${props.id}`).remove()
        history.push('/posts')
    }

    const handleLike = () => {
        props.likePost(props.id)
        setCount(count + 1)
        history.push('/posts')
    }

    return (
        <div className="single-post" id={`post-${props.id}`}>
            <h4>{props.name}</h4>
            <p>{props.text}</p>
            <p>{props.like}</p>
            <br/>
            <button className="delete" onClick={handleDelete} id={props.id}>delete</button>
            <button className="like" onClick={handleLike} id={props.id}>like</button>
            <p className="likes-container">{count}</p>
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
