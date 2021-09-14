import {
    GET_POSTS,
    CREATE_POST,
    ERROR,
    DELETE_POST,
    LOADING_POSTS
} from './types.js'

export function getPosts(){
    return (dispatch) => {
        dispatch({type: LOADING_POSTS })
        fetch('http://localhost:3001/posts', {
            headers: {
                accepts: 'application/json',
                "Content-Type": "application/json",
                "Accepts": "application/json"
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

export function createPost(post){
    return (dispatch) => {
        dispatch({ type: LOADING_POSTS })
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(post)
        })
        .then(response => {
            if (response.ok) {
               response.json().then(json => {
                    dispatch({type: CREATE_POST, payload: json})
               })
            } else {
                console.log(response)
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



export function deletePost(id){
    return (dispatch) => {
        fetch(`http://localhost:3001/posts/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(id)
        })
        .then(response => {
            if (response.ok){
                response.json().then(() => {
                    dispatch({type: DELETE_POST, payload: null})
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