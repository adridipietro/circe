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
                ...state,
                videos: [...state.videos],
                loading: true
            }
        case GET_VIDEOS:
            return {
                videos: action.payload,
                loading: false,
                error: ''
            }
        case CREATE_VIDEO:
            return {
                ...state, 
                videos: [...state.videos, action.payload],
                loading: false,
                error: ''
            }
        case DELETE_VIDEO:
            const removeDeletedVideo = state.videos.filter(video => video.id !== action.payload) 
            return {videos: removeDeletedVideo, loading: false}
            
        case LIKE_VIDEO:
            return {
                ...state,
                videos: state.videos.map(video => {
                    if (video.id !== action.payload){
                        return video
                    }
                    return {
                        ...video,
                        likes: video.likes + 1
                    }
                })
            }
        case EDIT_VIDEO:
            return {
                
            }
        default:
            return state
        
    }
}