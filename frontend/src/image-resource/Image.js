import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteImage, likeImage, fetchImage } from '../actions/index'
import { useHistory } from 'react-router'

import { Button } from 'react-bootstrap'


const Image = (props) => {
    console.log(props)

    useEffect(() => {
        console.log(props)
        const { id } = props.match.params.id
        props.fetchImage(id)
    }, [])

    const history = useHistory()
   
    
    
    const handleDelete= (id) => { 
        props.deleteImage(id)
        //debugger
        document.querySelector(`#image-${id}`).remove()
        history.push(`/images`)
    }
    
    const handleLike = (id) =>{
        props.likeImage(id)
        history.push(`/images/${props.id}`)
    }
        
    const { id, name, source, caption, likes } = props

            return (
                <div className="single-image" id={`image-${id}`}>
                    <h4>{name}</h4>
                    <p>source: {source}</p>
                    <p>caption: {caption}</p>
                    <p>likes: {likes}</p>
                    <br/>
                    <Button variant="secondary"className="delete" onClick={handleDelete} id={id}>delete</Button>
                    <Button variant="success" className="like" onClick={handleLike} id={id}>like</Button>
                    
                </div>
            )

    
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteImage: (id) => dispatch(deleteImage(id)),
        likeImage: (id) => dispatch(likeImage(id)),
        fetchImage: (id) => dispatch(fetchImage(id))
    }
}

export default connect(null, mapDispatchToProps)(Image)
