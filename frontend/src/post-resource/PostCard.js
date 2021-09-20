import React from 'react'
import { useHistory } from 'react-router'

export const PostCard = (props) => {
    const history = useHistory()

    const viewPost= () => {
        history.push(`/posts/${props.id}`)
    }
    
    return (
        <div className="post-card" id={`post-${props.id}`} onClick={viewPost}>
            <h4>{props.name}</h4>
        </div>
    )
}