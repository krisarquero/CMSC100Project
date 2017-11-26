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
		this.handleItemClick = this.handleItemClick.bind(this);
	}

	handleItemClick(e, { name }) {
     this.setState({ activeItem: name})
     window.location = '/manage/'+name;
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

	render(){
		const { category, submittedCategory} = this.state
		return(
	      <div className="App-main">
				<Container textAlign='center'>
					<Button size='massive' name='add-question' onClick={this.handleItemClick} inverted color='red'>Add Question</Button>
					<Button size='massive' name='view-questions' onClick={this.handleItemClick} inverted color='red'>View Questions</Button>
				</Container>
				<Divider inverted horizontal>Or</Divider>
				<Container textAlign='center'>
					<Form onSubmit={this.handleSubmit}>
	 	         	<Form.Input className="add-cat" placeholder='Add your own Smart Tita category.' name='category' value={category} onChange={this.handleChange} />
					 	<Form.Button size='massive' content='Add Category' inverted color='red'/>
	 	        	</Form>
				</Container>
	    	</div>
		)
	}
}

export default Manage;
