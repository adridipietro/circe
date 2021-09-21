import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteImage, likeImage, fetchImage } from '../actions/index'
//import { useHistory } from 'react-router'

import { Button } from 'react-bootstrap'


class Image extends React.Component {

    componentDidMount(){
        
        const { id } = this.props.match.params
        this.props.fetchImage(id)
        debugger
    }
    
    
    handleDelete(id){
        this.props.deleteImage(id)
        debugger
        document.querySelector(`#image-${id}`).remove()
        //history.push(`/images`)
    }
    
    handleLike(id){
        this.props.likeImage(id)
        //history.push(`/images/${props.id}`)
    }
        
    render(){
        debugger
        const { id, name, source, caption, likes } = this.props
            return (
                <div className="single-image" id={`image-${id}`}>
                    <h4>{name}</h4>
                    <p>source: {source}</p>
                    <p>caption: {caption}</p>
                    <p>likes: {likes}</p>
                    <br/>
                    <Button variant="secondary"className="delete" onClick={this.handleDelete} id={id}>delete</Button>
                    <Button variant="success" className="like" onClick={this.handleLike} id={id}>like</Button>
                    
                </div>
            )
        }
    
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteImage: (id) => dispatch(deleteImage(id)),
        likeImage: (id) => dispatch(likeImage(id)),
        fetchImage: (id) => dispatch(fetchImage(id))
    }
}

export default connect(null, mapDispatchToProps)(Image)
