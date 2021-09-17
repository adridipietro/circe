import React from 'react'
import { createImage } from '../actions/index'
import { connect } from 'react-redux'

class NewImageForm extends React.Component {
    state = {
        image: {
            name: '',
            caption: '',
            likes: 0,
            source: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createImage(this.state)
        document.querySelector(".image-form").reset()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        const { name, caption, source } = this.state
        return (
            <div className="form-container">
                <h4>NEW IMAGE</h4>
                <form className="image-form" onSubmit={this.handleSubmit}>
                    <input type="text" className="image-name" name="name" defaultValue={name} placeholder="image name" onChange={this.handleChange}/><br/>
                    <input type="text" className="image-source" name="source" defaultValue={source} placeholder="image source" onChange={this.handleChange}/><br/>
                    <input type="text" className="image-caption" name="caption" defaultValue={caption} placeholder="image caption" onChange={this.handleChange}/><br/><br/>
                    <button type="submit" value="submit">submit</button>
                </form>
    
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createImage: (image) => dispatch(createImage(image))
    }
}


export default connect(null, mapDispatchToProps)(NewImageForm)
