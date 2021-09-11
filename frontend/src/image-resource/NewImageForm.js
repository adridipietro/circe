import React from 'react'

export default function NewImageForm() {
    return (
        <div className="form-container">
            <h4>NEW IMAGE</h4>
            <form className="image-form">
                <input type="text" className="image-name" placeholder="image name"/><br/>
                <input type="text" className="image-source" placeholder="image source"/><br/>
                <input type="text" className="image-caption" placeholder="image caption"/><br/><br/>
                <button type="submit" value="submit">submit</button>
            </form>

        </div>
    )
}
