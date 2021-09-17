import React from 'react'
import { createPost } from '../actions/index'
import { connect } from 'react-redux'

class NewPostForm extends React.Component {
    
    state = {
        post: {
            name: '',
            text: '',
            likes: 0
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createPost(this.state)
        document.querySelector(".post-form").reset()
    }
    
    render(){
        const { name, text } = this.state
        return (
            <div className="form-container">
                <h4>NEW POST</h4>
                <form className="post-form" onSubmit={this.handleSubmit}>
                    <input type="text" className="post-name" name="name" defaultValue={name} placeholder="post name" onChange={this.handleChange}/><br/><br/>
                    <textarea type="text" className="post-text" name="text" defaultValue={text} placeholder="post text" onChange={this.handleChange}/><br/><br/>
                    <button type="submit" value="submit">submit</button>
                </form>
    
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