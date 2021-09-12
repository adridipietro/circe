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

            }
        case GET_POSTS:
            return {
                
            }
        case CREATE_POST:
            return {
                
            }
        case DELETE_POST:
            return {
                
            }
        case LIKE_POST:
            return {
                
            }
        case EDIT_POST:
            return {
                
            }
        default:
            return state
        
    }
}