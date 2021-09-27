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
            <video src={props.source} controls/>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.caption}</Card.Text>
                    <Button variant="secondary">click for more</Button>
                </Card.Body>
        </Card>
        
    )
}