import {
    GET_VIDEOS,
    CREATE_VIDEO,
    ERROR,
    LIKE_VIDEO,
    DELETE_VIDEO,
    LOADING_VIDEOS
} from './types.js'

export function getVideos(){
    return (dispatch) => {
        dispatch({type: LOADING_VIDEOS })
        fetch('http://localhost:3001/videos', {
            headers: {
                accepts: 'application/json',
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },

        }).then(response => {
            if (response.ok) {
               response.json().then(json => {
                    dispatch({type: GET_VIDEOS, payload: json})
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

export function createVideo(video){
    return (dispatch) => {
        dispatch({ type: LOADING_VIDEOS })
        fetch('http://localhost:3001/videos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(video)
        })
        .then(response => {
            if (response.ok) {
               response.json().then(json => {
                    dispatch({type: CREATE_VIDEO, payload: json})
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



export function deleteVideo(id){
    return (dispatch) => {
        fetch(`http://localhost:3001/videos/${id}`, {
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
                    dispatch({type: DELETE_VIDEO, payload: null})
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

export function likeVideo(id){
    return(dispatch, getState) => {
        const video = getState().videos.videos.find(video => video.id === id)
        const data = {
            name: video.name,
            source: video.source,
            caption: video.caption,
            id: id, 
            likes: video.likes
        }
        const configObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accepts": 'application/json',
            
            },
            body: JSON.stringify(data)
        }
        fetch(`http://localhost:3001/videos/${id}`, configObject)
        .then(response => {
            if (response.ok) {
               response.json().then(json => {
                    dispatch({type: LIKE_VIDEO, payload: json})
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
