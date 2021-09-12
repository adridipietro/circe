import {
    LOADING_IMAGES,
    GET_IMAGES,
    CREATE_IMAGE,
    DELETE_IMAGE,
    LIKE_IMAGE,
    EDIT_IMAGE
} from '../actions/types.js'




export default (state = { images: [], loading: false, error: '' }, action) => {
    switch(action.type){
        case LOADING_IMAGES:
            return {
                ...state.images

            }
        case GET_IMAGES:
            return {
                ...state,
                images: [...state.images, action.payload]
            }
        case CREATE_IMAGE:
            return {
                
            }
        case DELETE_IMAGE:
            return {
                
            }
        case LIKE_IMAGE:
            return {
                
            }
        case EDIT_IMAGE:
            return {
                
            }
        default:
            return state
        
    }
}