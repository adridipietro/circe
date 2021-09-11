import React from 'react'

export default function NewVideoForm() {
    return (
    <div className="form-container">
        <h4>NEW VIDEO</h4>
        <form className="video-form">
            <input type="text" className="video-name" placeholder="video name"/><br/>
            <input type="text" className="video-source" placeholder="video source"/><br/>
            <input type="text" className="video-caption" placeholder="video caption"/><br/><br/>
            <button type="submit" value="submit">submit</button>
        </form>
    </div>
    )
}
