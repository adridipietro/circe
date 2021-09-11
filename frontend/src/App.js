import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './Home'
import ImagesContainer from './image-resource/ImagesContainer'
import VideosContainer from './video-resource/VideosContainer'
import PostsContainer from './post-resource/PostsContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route to="/" component={Home}></Route>
          <Route exact to="/videos" component={VideosContainer}></Route>
          <Route exact to="/images" component={ImagesContainer}></Route>
          <Route exact to="/posts" component={PostsContainer}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
