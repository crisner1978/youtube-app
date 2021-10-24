import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RecVideos from './components/RecVideos/RecVideos';
import SearchPage from './components/SearchPage/SearchPage';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';



function App() {

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
        <Route path="/video/:videoId">
            <div className="app__main">
              <VideoPlayer />
            </div>
          </Route>
        <Route path="/search/:searchQuery">
            <div className="app__main">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__main">
              <Sidebar />
              <RecVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
