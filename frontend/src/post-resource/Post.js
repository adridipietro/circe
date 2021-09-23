import React from 'react'
import { useHistory } from 'react-router'
import { deletePost, likePost } from '../actions/index'
import { connect } from 'react-redux'
import  { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'


const Post = (props) => {
    const history = useHistory()
    const post = useSelector(state => state.posts.posts.find(post => post.id === parseInt(props.match.params.id)))

    const handleDelete = (post) => {
        props.deletePost(post.id)
        document.querySelector(`#post-${post.id}`).remove()
        history.push('/posts')
    }

    const handleLike = (post) => {
        props.likePost(post.id)
        history.push(`/posts/${post.id}`)
    }

    return (
        <div className="single-post" id={`post-${post.id}`}>
            <h4>{post.name}</h4>
            <p>{post.text}</p>
            <p>{post.likes}</p>
            <br/>
            <Button className="delete" onClick={handleDelete} id={post.id}>delete</Button>
            <Button className="like" onClick={handleLike} id={post.id}>like</Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id)),
        likePost: (id) => dispatch(likePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
