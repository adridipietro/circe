import React from 'react'

export default function NewPostForm() {
    return (
        <div className="form-container">
            <h4>NEW POST</h4>
            <form className="post-form">
                <input type="text" className="post-name" placeholder="post name"/><br/><br/>
                <textarea type="text" className="post-text" placeholder="post text"/><br/><br/>
                <button type="submit" value="submit">submit</button>
            </form>

        </div>
    )
}
