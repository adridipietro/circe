import React from 'react'
import { createVideo } from '../actions/index'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css'

class NewVideoForm extends React.Component {
    state = {
            name: '',
            caption: '',
            likes: 0,
            source: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createVideo(this.state)
        document.querySelector(".video-form").reset()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
        const { name, caption, source } = this.state
        return (
            <div className="form-container">
                <h4>NEW VIDEO</h4>
                <Form className="video-form" onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Control id="form-control" type="text" className="video-name" name="name" defaultValue={name} placeholder="video name" onChange={this.handleChange}/><br/>
                        <Form.Control  id="form-control" type="text" className="video-source" name="source" defaultValue={source} placeholder="video source" onChange={this.handleChange}/><br/>
                        <Form.Control id="form-control" type="text" className="video-caption" name="caption" defaultValue={caption} placeholder="video caption" onChange={this.handleChange}/><br/><br/>
                        <Button className="submit" type="submit" value="submit">submit</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        createVideo: (video) => dispatch(createVideo(video))
    }
}


export default connect(null, mapDispatchToProps)(NewVideoForm)


