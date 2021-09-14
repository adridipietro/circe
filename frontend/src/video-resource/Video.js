import React from 'react'

const Video = (props) => {
    return (
        <div className="single-video" id ={props.id}>
            <h4>{props.name}</h4>
            <p>source: {props.source}</p>
            <p>caption: {props.caption}</p>
            <p>likes: {props.likes}</p>
            <br/>
            <button className="delete" id={props.id}>delete</button>
        </div>
    )
}

export default Video