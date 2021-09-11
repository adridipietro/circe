import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'

import Home from './Home'
import ImagesContainer from './image-resource/ImagesContainer'
import VideosContainer from './video-resource/VideosContainer'
import PostsContainer from './post-resource/PostsContainer'
import Navbar from './Navbar'
import NewImageForm from './image-resource/NewImageForm'
import NewPostForm from './post-resource/NewPostForm'
import NewVideoForm from './video-resource/NewVideoForm'

function App() {
  return (
    <div className="App">
      <br></br>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact to="/" render={() => <Home/>}/>
          <Route exact to="/videos" render={() => <VideosContainer/>}/>
          <Route exact to="/images" render={() => <ImagesContainer/>}/>
          <Route exact to="/posts" render={() => <PostsContainer/>}/>
          <Route exact to="/videos/new" render={() => <NewVideoForm/>}/>
          <Route exact to="/posts/new" render={() => <NewPostForm/>}/>
          <Route exact to="/images/new" render={() => <NewImageForm/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
