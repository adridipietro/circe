export default (state = { images: [], loading: false, error: '' }, action) => {
    switch(action.type){
        case LOADING_IMAGES:
            return {

            }
        case GET_IMAGES:
            return {
                
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