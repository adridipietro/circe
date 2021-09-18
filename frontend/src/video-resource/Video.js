import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { deleteVideo, likeVideo } from '../actions/index'

const Video = (props) => {

    const history = useHistory()

    const handleDelete = () => {
        props.deleteVideo(props.id)
        document.querySelector(`#video-${props.id}`).remove()
        history.push('/videos')
    }

    const handleLike = () => {
        props.likeVideo(props.id)
        history.push('/videos')
    }

    return (
        <div className="single-video" id ={props.id}>
            <h4>{props.name}</h4>
            <p>source: {props.source}</p>
            <p>caption: {props.caption}</p>
            <p>likes: {props.likes}</p>
            <br/>
            <button className="delete" id={props.id} onClick={handleDelete}>delete</button>
            <button className="like" onClick={handleLike} id={props.id}>like</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteVideo: (id) => dispatch(deleteVideo(id)),
        likeVideo: (id) => dispatch(likeVideo(id))
    }
}

export default connect(null, mapDispatchToProps)(Video)