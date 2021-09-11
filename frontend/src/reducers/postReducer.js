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