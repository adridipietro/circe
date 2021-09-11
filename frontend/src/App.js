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
          <Route exact to="/" render={() => <Home/>}></Route>
          <Route exact to="/videos" component={VideosContainer}></Route>
          <Route exact to="/images" component={ImagesContainer}></Route>
          <Route exact to="/posts" component={PostsContainer}></Route>
          <Route exact to="/videos/new" render={() => <NewVideoForm/>}></Route>
          <Route exact to="/posts/new" render={() => <NewPostForm/>}></Route>
          <Route exact to="/images/new" render={() => <NewImageForm/>}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
