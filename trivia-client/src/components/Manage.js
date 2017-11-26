import React, { Component } from 'react';
import './Manage.css'
import {
		Button
} from "semantic-ui-react";


class Manage extends Component {

	constructor(props) {
	    super(props);
			this.handleSearch = this.handleSearch.bind(this);
	}

	getInitialState() { return {query: ''} }

	queryChange(evt) {
     this.setState({query: evt.target.value});
  }

	handleSearch() {
    window.location = '/manage/add-question';
  }

	render(){
		return(

      <div className="App-main">
        <Button fluid onClick={this.handleSearch}>Add Question</Button>
      </div>

		)
	}
}

export default Manage;
