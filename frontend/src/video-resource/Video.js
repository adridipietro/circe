import React from 'react'

const Video = (props) => {
    return (
        <div className="single-video" id ={props.id}>
            <h4>{props.name}</h4>
            <p>source: {props.source}</p>
            <p>caption: {props.caption}</p>
            <p>likes: {props.likes}</p>
        </div>
    )
}

export default Video