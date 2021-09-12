import {
    GET_POSTS,
    CREATE_POST,
    ERROR,
    LOADING_POSTS
} from './types.js'

export function getPosts(){
    return (dispatch) => {
        dispatch({type: LOADING_POSTS })
        fetch('http://localhost:3001/images', {
            headers: {
                accepts: 'application/json',
                "Content-Type": 'application/json'
            },

        }).then(response => {
            if (response.ok) {
               response.json().then(json => {
                    dispatch({type: GET_POSTS, payload: json})
               })
            } else {
                return response.json().then((json) => {
                    return Promise.reject(json)
                })
            }
        })
        .catch(error => {
            dispatch({type: ERROR, payload: error})
        })
    }
}