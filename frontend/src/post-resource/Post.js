import React from 'react'

const Post = (props) => {
    return (
        <div className="single-post" id={props.id}>
            <h4>{props.name}</h4>
            <p>{props.text}</p>
            <p>{props.like}</p>
        </div>
    )
}

export default Post
