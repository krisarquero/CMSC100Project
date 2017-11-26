import React, { Component } from 'react';
import './Manage.css'
import {
	Form,
	Button,
	Divider,
	Container
} from "semantic-ui-react";


class Manage extends Component {

	constructor(props) {
	   super(props);
		this.handleSearch = this.handleSearch.bind(this);
	}

	  state = {
	    category: '',
	    submittedCategory: ''
	  }

	  handleChange = (e, { name, value }) => this.setState({ [name]: value })

	  handleSubmit = () => {
	    const { category } = this.state

	    this.setState({
	      submittedCategory: category
	    })
	  }

	getInitialState() { return {query: ''} }

	queryChange(evt) {
     this.setState({query: evt.target.value});
  	}

	handleSearch() {
    window.location = '/manage/add-question';
  	}

	render(){
		const { category, submittedCategory} = this.state
		return(
	      <div className="App-main">
				<Container textAlign='center'>
					<Button size='massive' onClick={this.handleSearch} inverted color='red'>Add Question</Button>
				</Container>
				<Divider inverted horizontal>Or</Divider>
				<Container textAlign='center'>
					<Form onSubmit={this.handleSubmit}>
	 	         	<Form.Input placeholder='Add your own Tita category.' name='category' value={category} onChange={this.handleChange} />
					 	<Form.Button size='massive' content='Add Category' inverted color='red'/>
	 	        	</Form>
				</Container>
	    	</div>
		)
	}
}

export default Manage;
