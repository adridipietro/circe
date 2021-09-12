import {
    LOADING_VIDEOS,
    GET_VIDEOS,
    CREATE_VIDEO,
    DELETE_VIDEO,
    LIKE_VIDEO,
    EDIT_VIDEO
} from '../actions/types.js'




export default (state = { videos: [], loading: false, error: '' }, action) => {
    switch(action.type){
        case LOADING_VIDEOS:
            return {

            }
        case GET_VIDEOS:
            return {
                
            }
        case CREATE_VIDEO:
            return {
                
            }
        case DELETE_VIDEO:
            return {
                
            }
        case LIKE_VIDEO:
            return {
                
            }
        case EDIT_VIDEO:
            return {
                
            }
        default:
            return state
        
    }
}