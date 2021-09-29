import React from 'react'
import { PostCard } from './PostCard'
import { connect } from 'react-redux'
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { updateQuery } from '../actions/index.js'
import Search from '../Search'

/* const filterPosts = (id, props) => {
    let newId = parseInt(id)
    let filtered = props.posts.filter(post => {
        return post.id === newId
    })
    return filtered
} */

debugger

const filteredSearch = (props, query) => {
    return props.posts.filter(post => {
        return post.name.toLowerCase().includes(query.toLowerCase())
    })
}

const renderPosts = (id = 0, props, query ) => {
    if (!query){
        return props.posts.map(post => {
            return <PostCard key={post.id} {...post} />
        })
    } else if (query){
        return filteredSearch(props, query).map(post => {
            return <PostCard key={post.id} id={id} {...post} />
        })
    }
}



const PostsContainer = (props) => {
    const { id } = useParams()
    const query = useSelector(state => state.posts.query)
    
    
        return (
            <div className="posts-container">
                <Search posts={props.posts} updateQuery={props.updateQuery}/>
                <h3>POSTS</h3>
                {renderPosts(id, query, props)}
            </div>
        )
    
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateQuery: (query) => dispatch(updateQuery(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
