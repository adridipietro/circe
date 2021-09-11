import React from 'react'

export default function NewPostForm() {
    return (
        <form className="post-form">
            <input type="text" className="post-name" placeholder="post name"/>
            <input type="text" className="post-text" placeholder="post text"/>
            <button type="submit" value="submit"/>
        </form>
    )
}
