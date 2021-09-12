import { CREATE_IMAGE, LOADING_IMAGES, ERROR, GET_IMAGES} from "./types";

export function createImage(image){
    return (dispatch) => {
        dispatch({ type: LOADING_IMAGES })
        fetch('http://localhost:3001/images', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
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


export function getImages(){
    return(dispatch) => {
        dispatch({type: LOADING_IMAGES})
        fetch("http://localhost:3001/images", {
            headers: {
                "Content-Type": "application/json"
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