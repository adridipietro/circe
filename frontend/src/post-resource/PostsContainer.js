import React, { useState } from 'react'
import { PostCard } from './PostCard'
import { connect } from 'react-redux'
import Search from '../Search'

const PostsContainer = (props) => {
    const [searchQuery, setSearchQuery] = useState('')

    const renderPosts = (props) => {
        return props.posts.map(post => {
            return <PostCard key={post.id} {...post} />
        })
    }
        return (
            <div className="posts-container">
                <Search 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
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
