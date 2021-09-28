import React from 'react'
import { createPost } from '../actions/index'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

class NewPostForm extends React.Component {
    
    state = {
        
        name: '',
        text: '',
        likes: 0
    }

    handleSubmit = (e) => {
        //debugger
        e.preventDefault()
        this.props.createPost(this.state)
        this.props.history.push('/posts')
    }

    handleChange = (e) => {
        //debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render(){
        const { name, text } = this.state
        return (
            <div className="form-container">
                <h4>NEW POST</h4>
                <Form className="post-form" onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Control id="form-control" type="text" className="post-name" name="name" defaultValue={name} placeholder="post name" onChange={this.handleChange}/><br/>
                        <Form.Control  id="form-control" as="textarea" rows={5} className="post-text" name="text" defaultValue={text} placeholder="post text" onChange={this.handleChange}/><br/>
                        <Button type="submit" value="submit">submit</Button>
                    </Form.Group>
                </Form>
    
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(null, mapDispatchToProps)(NewPostForm)