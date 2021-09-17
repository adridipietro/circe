import React from 'react'
import { createVideo } from '../actions/index'
import { connect } from 'react-redux'

class NewVideoForm extends React.Component {
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
                <form className="video-form" onSubmit={this.handleSubmit}>
                    <input type="text" className="video-name" name="name" defaultValue={name} onChange={this.handleChange} placeholder="video name"/><br/>
                    <input type="text" className="video-source"  name="source" defaultValue={source} onChange={this.handleChange} placeholder="video source"/><br/>
                    <input type="text" className="video-caption"   name="caption" defaultValue={caption} onChange={this.handleChange} placeholder="video caption"/><br/><br/>
                    <button type="submit" value="submit">submit</button>
                </form>
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


