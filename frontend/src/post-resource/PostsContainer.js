import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'

const PostsContainer = (props) => {

    const renderPosts = (props) => {
        return props.posts.map(post => {
            return <Post key={post.id} {...post} />
        })
    }
        return (
            <div className="posts-container">
                <h3>POSTS</h3>
                {renderPosts(props)}
            </div>
        )
    
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(PostsContainer)
