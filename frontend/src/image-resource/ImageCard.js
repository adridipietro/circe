import React from 'react'
import { useHistory } from 'react-router'

export const ImageCard = (props) => {
    const history = useHistory()

    const viewImage = () => {
        history.push(`/images/${props.id}`)
    }
    
    return (
        <div className="image-card" id={`image-${props.id}`} onClick={viewImage}>
            <h4>{props.name}</h4>
        </div>
    )
}
