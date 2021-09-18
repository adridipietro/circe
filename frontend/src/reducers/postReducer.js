import {
    LOADING_POSTS,
    GET_POSTS,
    CREATE_POST,
    DELETE_POST,
    LIKE_POST,
    EDIT_POST
} from '../actions/types.js'




export default (state = { posts: [], loading: false, error: '' }, action) => {
    switch(action.type){
        case LOADING_POSTS:
            return {
                ...state,
                posts: [...state.posts],
                loading: true
            }
        case GET_POSTS:
            return {
                posts: action.payload,
                loading: false,
                error: ''
            }
        case CREATE_POST:
            return {
                ...state, 
                posts: [...state.posts, action.payload],
                loading: false,
                error: ''
            }
        case DELETE_POST:
            return {
                
            }
        case LIKE_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id !== action.payload){
                        return post
                    }
                    return {
                        ...post,
                        likes: post.likes + 1
                    }
                })
            }
        case EDIT_POST:
            return {
                
            }
        default:
            return state
        
    }
}