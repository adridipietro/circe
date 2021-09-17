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
import { connect } from 'react-redux'

import { getImages, createImage } from './actions/index.js'
import { getPosts, createPost } from './actions/index.js'
import { getVideos, createVideo } from './actions/index.js'



class App extends React.Component{

  componentDidMount(){
    this.props.getImages()
    this.props.getPosts()
    this.props.getVideos()
  }
  
  render(){
    return (
      <div className="App">
        <br></br>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" render={() => <Home/>}/>
            <Route exact path="/about" render={() => <About/>}/>
            <Route exact path="/videos" render={routeProps => <VideosContainer videos={this.props.videos} getVideos={this.props.getVideos} {...routeProps}/>}/>
            <Route exact path="/images" render={routeProps => <ImagesContainer images={this.props.images} getImages={this.props.getImages} {...routeProps}/>}/>
            <Route exact path="/posts" render={routeProps => <PostsContainer posts={this.props.posts} getPosts={this.props.getPosts} {...routeProps}/>}/>
            <Route exact path="/videos/new" render={routeProps => <NewVideoForm createVideo={this.props.createVideo} {...routeProps}/>}/>
            <Route exact path="/posts/new" render={routeProps => <NewPostForm createPost={this.props.createPost} {...routeProps}/>}/>
            <Route exact path="/images/new" render={routeProps => <NewImageForm createImage={this.props.createImage} {...routeProps}/>}/>
            <Route exact path="/images/:id" render={() => <Image/>}/>
            <Route exact path="/videos/:id" render={() => <Video/>}/>
            <Route exact path="/posts/:id" render={() => <Post/>}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images.images,
    videos: state.videos.videos,
    posts: state.posts.posts

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getImages: () => dispatch(getImages()),
    getPosts: () => dispatch(getPosts()),
    getVideos: () => dispatch(getVideos()),
    createImage:(image) => dispatch(createImage(image)),
    createPost:(post) => dispatch(createPost(post)),
    createVideo:(video) => dispatch(createVideo(video))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


