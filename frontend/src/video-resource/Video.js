import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { deleteVideo, likeVideo } from '../actions/index'
import  { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'


const Video = (props) => {
    const video = useSelector(state => state.videos.videos.find(video => video.id === parseInt(props.match.params.id)))
    const history = useHistory()

    const handleDelete = (video) => {
        props.deleteVideo(video.id)
        document.querySelector(`#video-${video.id}`).remove()
        history.push(`/videos`)
    }

    const handleLike = (video) => {
        props.likeVideo(video.id)
        history.push(`/videos/${video.id}`)
    }

    return (
        <div className="single-video" id={`video-${video.id}`}>
            <h4>{video.name}</h4>
            <p>source: {video.source}</p>
            <p>caption: {video.caption}</p>
            <p>likes: {video.likes}</p>
            <br/>
            <Button className="delete" id={video.id} onClick={handleDelete}>delete</Button>
            <Button className="like" onClick={handleLike} id={video.id}>like</Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        videos: state.videos.videos
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteVideo: (id) => dispatch(deleteVideo(id)),
        likeVideo: (id) => dispatch(likeVideo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Video)