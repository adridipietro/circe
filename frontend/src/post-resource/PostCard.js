import React from 'react'
import { useHistory } from 'react-router'
import { Card, Button } from 'react-bootstrap'

export const PostCard = (props) => {
    const history = useHistory()

    const viewPost= () => {
        history.push(`/posts/${props.id}`)
    }
    
    return (
        <Card className="post-card" id={`post-${props.id}`} onClick={viewPost}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                    <Button variant="success">click for more</Button>
                </Card.Body>
        </Card>
        
    )
}