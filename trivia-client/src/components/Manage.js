import React, { Component } from 'react';
import './Manage.css'
import {
	Form,
	Button,
	Divider,
	Container
} from "semantic-ui-react";
const request = require('request');


class Manage extends Component {

	constructor(props) {
	   super(props);
		this.handleItemClick = this.handleItemClick.bind(this);
	}

	handleItemClick(e, { name }) {
     this.setState({ activeItem: name})
     window.location = '/manage/'+name;
   }

	state = {
	   name: '',
	  //  submittedCategory: ''
	}

	handleChange = (e, { name, value }) => this.setState({ [name]: value })

	handleSubmit = (e) => {
    request.post('http://localhost:3001/trivia/category/add',{ form: e },(error, response, body) => { // change the one in request.body.<something> change this
			console.log(e);
			console.log(body);
			console.log("Here");
			window.location.reload();
		});

  }

	render(){
		const { name} = this.state
		return(
	      <div className="App-main">

				<Container textAlign='center'>
					<Button size='huge' name='view-questions' onClick={this.handleItemClick} inverted color='red'>Update Questions</Button>
				</Container>
				<Divider inverted horizontal>Or</Divider>
				<Container textAlign='center'>
					<Button size='large' name='add-multiple-choice-question' onClick={this.handleItemClick} inverted color='red'>Add Multiple Choice Question</Button>
					<Button size='large' name='add-no-choices-question' onClick={this.handleItemClick} inverted color='red'>Add Identification Question</Button>
					<Button size='large' name='add-true-or-false-question' onClick={this.handleItemClick} inverted color='red'>Add True or False Question</Button>
				</Container>
				<Divider inverted horizontal>Or</Divider>
				<Container textAlign='center'>
					<Form onSubmit={() => this.handleSubmit(this.state)}>
		       	<Form.Input className="add-cat" placeholder='Add your own smart Tita category.' name='name' value={name} onChange={this.handleChange} />
					 	<Form.Button size='huge' content='Add Category' inverted color='red'/>
	 	        	</Form>
				</Container>

	    	</div>
		)
	}
}

export default Manage;
