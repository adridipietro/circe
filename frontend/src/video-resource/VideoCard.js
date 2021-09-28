import React from 'react'
import { useHistory } from 'react-router'
import { Card, Button } from 'react-bootstrap'

export const VideoCard = (props) => {
    const history = useHistory()

    const viewVideo= () => {
        history.push(`/videos/${props.id}`)
    }
    
    return (
        <Card className="video-card" id={`video-${props.id}`} onClick={viewVideo}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.caption}</Card.Text>
                    <Button variant="secondary"><i className="far fa-hand-point-right" aria-hidden="true"></i></Button>
                </Card.Body>
        </Card>
        
    )
}