
import { 
    CREATE_IMAGE, 
    LOADING_IMAGES, 
    FETCH_IMAGE,
    ERROR, GET_IMAGES, 
    DELETE_IMAGE, 
    LIKE_IMAGE 
} from "./types";

export function createImage(image){
    return (dispatch) => {
        dispatch({ type: LOADING_IMAGES })
        fetch('http://localhost:3001/images', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(image)
        })
        .then(response => {
            if (response.ok) {
               response.json().then(json => {
                    dispatch({type: CREATE_IMAGE, payload: json})
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



export function fetchImage(id){
    return (dispatch) => {
        fetch(`http://localhost:3001/images/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(id)
        })
        .then(response => {
            if (response.ok){
                response.json().then((json) => {
                    dispatch({type: FETCH_IMAGE, payload: json})
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


export function getImages(){
    return(dispatch) => {
        dispatch({type: LOADING_IMAGES})
        fetch("http://localhost:3001/images", {
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
               response.json().then(json => {
                    dispatch({type: GET_IMAGES, payload: json})
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

export function deleteImage(id){
    return (dispatch) => {
        fetch(`http://localhost:3001/images/${id}`, {
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
                    dispatch({type: DELETE_IMAGE, payload: null})
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

export function likeImage(id){
    return(dispatch, getState) => {
        const image = getState().images.images.find(image => image.id === id)
        const data = {
            name: image.name,
            source: image.source,
            caption: image.caption,
            id: id, 
            likes: image.likes
        }
        const configObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accepts": 'application/json',
            
            },
            body: JSON.stringify(data)
        }
        fetch(`http://localhost:3001/images/${id}`, configObject)
        .then(response => {
            if (response.ok) {
               response.json().then(json => {
                    dispatch({type: LIKE_IMAGE, payload: json})
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

