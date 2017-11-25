import React, { Component } from 'react';
// import Movies from './components/Movies';
import Home from './components/Home';
import Manage from './components/Manage'
import Scores from './components/Scores'
// import Movie from './components/Movie';
// import AddMovie from './components/AddMovie';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div id="main">
      
        <Router>
        	<div id="content-container">
        		<Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/manage" component={Manage} />
            <Route exact={true} path="/high-score" component={Scores} />

        	</div>
        </Router>
      </div>
    );
  }
}

export default App;
