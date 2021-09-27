import React from 'react'
import { useHistory } from 'react-router'
import { Card, Button } from 'react-bootstrap'

export const PostCard = (props) => {
    const history = useHistory()

    const viewPost= () => {
        history.push(`/posts/${props.id}`)
    }

    //debugger

    return (
        <Card className="post-card" id={`post-${props.id}`} onClick={viewPost}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.text.slice(0, 30)}...</Card.Text>
                    <Button variant="secondary"><i class="far fa-hand-point-right" aria-hidden="true"></i></Button>
                </Card.Body>
        </Card>
        
    )
}