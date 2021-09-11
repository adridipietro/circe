import React from 'react'

export default function NewImageForm() {
    return (
        <form className="image-form">
            <input type="text" className="image-name" placeholder="image name"/>
            <input type="text" className="image-source" placeholder="image source"/>
            <input type="text" className="image-caption" placeholder="image caption"/>
            <button type="submit" value="submit"/>
        </form>
    )
}
