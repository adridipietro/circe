import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import rootReducer from './reducers'


import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)



