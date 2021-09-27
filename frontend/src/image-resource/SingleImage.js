import React from 'react'
import  { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { deleteImage, likeImage } from '../actions/index'
import { useHistory } from 'react-router'

import { Button, Image } from 'react-bootstrap'


const SingleImage = (props) => {
    const history = useHistory()
    const image = useSelector(state => state.images.images.find(image => image.id === parseInt(props.match.params.id)))
   

    const handleDelete = () => { 
        //debugger
        props.deleteImage(image.id)
        //document.querySelector(`#image-${image.id}`).remove()
        history.push(`/images`)
    }
    
    const handleLike = () =>{
        props.likeImage(image.id)
        history.push(`/images/${image.id}`)
    }


    return (

            <div className="single-image" id={`image-${image.id}`}>
                <h4>{image.name}</h4>
                <Image src={image.source} fluid/>
                <p>{image.caption}</p>
                <p><strong>{image.likes}</strong> likes</p>
                <br/>
                <Button variant="secondary"className="delete" onClick={handleDelete} id={image.id}><i class="fa fa-trash"></i></Button>
                <Button variant="secondary" className="like" onClick={handleLike} id={image.id}><i class="fab fa-gratipay"></i></Button>
                        
            </div>
           
    )
}

const mapStateToProps = (state) => {
    return {
        images: state.images.images
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteImage: (id) => dispatch(deleteImage(id)),
        likeImage: (id) => dispatch(likeImage(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleImage)
