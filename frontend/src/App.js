import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
import React from 'react'

import Home from './Home'
import Navbar from './Navbar'
import About from './About'

import ImagesContainer from './image-resource/ImagesContainer'
import VideosContainer from './video-resource/VideosContainer'
import PostsContainer from './post-resource/PostsContainer'

import NewImageForm from './image-resource/NewImageForm'
import NewPostForm from './post-resource/NewPostForm'
import NewVideoForm from './video-resource/NewVideoForm'

import Post from './post-resource/Post'
import Video from './video-resource/Video'
import Image from './image-resource/Image'



export default class App extends React.Component{
  
  render(){
    return (
      <div className="App">
        <br></br>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" render={() => <Home/>}/>
            <Route exact path="/about" render={() => <About/>}/>
            <Route exact path="/videos" render={() => <VideosContainer/>}/>
            <Route exact path="/images" render={() => <ImagesContainer/>}/>
            <Route exact path="/posts" render={() => <PostsContainer/>}/>
            <Route exact path="/videos/new" render={() => <NewVideoForm/>}/>
            <Route exact path="/posts/new" render={() => <NewPostForm/>}/>
            <Route exact path="/images/new" render={() => <NewImageForm/>}/>
            <Route exact path="/images/:id" render={() => <Image/>}/>
            <Route exact path="/videos/:id" render={() => <Video/>}/>
            <Route exact path="/posts/:id" render={() => <Post/>}/>
          </Switch>
        </Router>
      </div>
    )
  }
}


