import React from 'react'

export default function NewImageForm() {
    return (
        <form className="image-form">
            <h4>NEW IMAGE</h4>
            <input type="text" className="image-name" placeholder="image name"/>
            <input type="text" className="image-source" placeholder="image source"/>
            <input type="text" className="image-caption" placeholder="image caption"/>
            <button type="submit" value="submit">Submit</button>
        </form>
    )
}
