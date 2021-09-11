import { combineReducers } from "redux"
import postReducer from "./postReducer"
import videoReducer from "./videoReducer"
import imageReducer from './imageReducer'

const rootReducer = combineReducers({
  posts: postReducer,
  videos: videoReducer,
  images: imageReducer
})

export default rootReducer