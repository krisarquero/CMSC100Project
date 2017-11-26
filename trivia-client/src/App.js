import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Manage from './components/Manage';
import Scores from './components/Scores';
import About from './components/About';
import AddQuestion from './components/AddQuestion';
import ViewQuestions from './components/ViewQuestions';
import {
    Menu,
    Container,
    Image
} from "semantic-ui-react";
import logoImage from './images/smarter-tita.png';
import './App.css';

class App extends Component {

  constructor(props) {
	    super(props);
			this.handleItemClick = this.handleItemClick.bind(this);
	}

  state = { activeItem: 'Home' }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name})
    window.location = '/'+name;
  }

  render() {
    const { activeItem } = this.state
    return (
      <div id="main">
        <Container fluid >
          <Image fluid src={ logoImage } />

        </Container>

        <Menu inverted color='red'>
          <Menu.Item name='home' active={activeItem==='Home'} onClick={this.handleItemClick} />
          <Menu.Item name='manage' active={activeItem === 'Manage'} onClick={this.handleItemClick} />
          <Menu.Item name='high-scores' active={activeItem === 'HighScores'} onClick={this.handleItemClick} />
          <Menu.Item name='about' active={activeItem === 'About'} onClick={this.handleItemClick} />
        </Menu>

        <Router>
          <div id="content-container">
            <Route exact={true} path="/home" component={Home}/>
            <Route exact={true} path="/manage" component={Manage}/>
            <Route exact={true} path="/high-scores" component={Scores}/>
            <Route exact={true} path="/about" component={About}/>
            <Route exact={true} path="/manage/add-question" component={AddQuestion}/>
            <Route exact={true} path="/manage/view-questions" component={ViewQuestions}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
