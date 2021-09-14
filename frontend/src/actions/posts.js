import {
    GET_POSTS,
    CREATE_POST,
    ERROR,
    DELETE_POST,
    LOADING_POSTS,
    LIKE_POST
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

export function likePost(id){
    return(dispatch, getState) => {
        const post = getState().posts.posts.find(post => post.id === id)
        const data = {
            name: post.name,
            text: post.text,
            id: id, 
            likes: post.likes
        }
        const configObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accepts": 'application/json',
            
            },
            body: JSON.stringify(data)
        }
        fetch(`http://localhost:3000/posts/${id}`, configObject)
        .then(response => {
            if (response.ok) {
               response.json().then(json => {
                    dispatch({type: LIKE_POST, payload: json})
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
