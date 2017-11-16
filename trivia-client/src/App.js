import React, { Component } from 'react';
// import Movies from './components/Movies';
import Home from './components/Home';
// import Movie from './components/Movie';
// import AddMovie from './components/AddMovie';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>Movie Catalog</h1>
        <Router>
        	<div id="content-container">
        		<Route exact={true} path="/" component={Home} />
        	</div>
        </Router>
        <h3>Footer</h3>
      </div>
    );
  }
}

export default App;
