import React from 'react'
import { PostCard } from './PostCard'
//import { connect } from 'react-redux'
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'




const filterPosts = (id, props) => {
    let newId = parseInt(id)
    let filtered = props.posts.filter(post => {
        return post.id === newId
    })
    return filtered
}

const filteredSearch = (props, query) => {
    return props.posts.filter(post => {
        return post.name.toLowerCase().includes(query.toLowerCase())
    })
}

const renderPosts = (id = 0, props, query ) => {
    if (id !== 0){
        let filteredPosts = filterPosts(id, props)
        return filteredPosts.map(post => {
            return <PostCard key={post.id} id={id} {...post} />
        })
    } else if (query){
        return filteredSearch(props, query).map(post => {
            return <PostCard key={post.id} id={id} {...post} />
        })
    }
}



const PostsContainer =  (props) => {
    const { id } = useParams()
    const query = useSelector(state => state.posts.query)
    
    
        return (
            <div className="posts-container">
                <h3>POSTS</h3>
                {renderPosts(id, props, query)}
            </div>
        )
    
}

/* const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
} */

export default PostsContainer
