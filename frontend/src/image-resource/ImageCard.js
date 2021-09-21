import React from 'react'
import { useHistory } from 'react-router'
import { Card, Button } from 'react-bootstrap'

export const ImageCard = (props) => {
    const history = useHistory()

    const viewImage= () => {
        history.push(`/images/${props.id}`)
    }
    
    return (
        <Card className="image-card" id={`image-${props.id}`} onClick={viewImage}>
            <Card.Img src={props.source}/>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.caption}</Card.Text>
                    <Button variant="secondary">click for more</Button>
                </Card.Body>
        </Card>
        
    )
}