import {
    LOADING_IMAGES,
    GET_IMAGES,
    CREATE_IMAGE,
    DELETE_IMAGE,
    LIKE_IMAGE,
    EDIT_IMAGE,
    UPDATE_QUERY
} from '../actions/types.js'

export const selectImageById = (state, imageId) => {
    state.images.find(image => image.id === imageId)
}


export default (state = { images: [], query: '', loading: false, error: '' }, action) => {
    switch(action.type){
        case LOADING_IMAGES:
            return {
                ...state,
                images: [...state.images],
                loading: true
            }
        case GET_IMAGES:
            return {
                loading: false,
                images: action.payload
            }
        case CREATE_IMAGE:
            return {
                ...state, 
                images: [...state.images, action.payload],
                loading: false,
                error: ''
                
            }
        case DELETE_IMAGE:
            const removeDeletedImage = state.images.filter(image => image.id !== action.payload) 
            return {images: removeDeletedImage, loading: false}
        case LIKE_IMAGE:
            return {
                ...state,
                images: state.images.map(image => {
                    if (image.id !== action.payload){
                        return image
                    }
                    return {
                        ...image,
                        likes: image.likes + 1
                    }
                })
            }
        case EDIT_IMAGE:
            return {
                
            }
        case UPDATE_QUERY:
            return {
                    ...state, 
                    query: action.query
            }
        default:
            return state
        
    }
}