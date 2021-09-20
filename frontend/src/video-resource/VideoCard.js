import React from 'react'
import { useHistory } from 'react-router'

export const VideoCard = (props) => {
    const history = useHistory()

    const viewVideo= () => {
        history.push(`/videos/${props.id}`)
    }
    
    return (
        <div className="video-card" id={`video-${props.id}`} onClick={viewVideo}>
            <h4>{props.name}</h4>
        </div>
    )
}