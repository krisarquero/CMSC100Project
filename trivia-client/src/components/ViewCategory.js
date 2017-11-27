import React, { Component } from 'react';
import {
	Form,
	Button,
	Divider,
	Container
} from "semantic-ui-react";
const request = require('request');

class ViewCategory extends Component {

	state = {
		oldCategory: '',
		newCategory: '',
		submittedOldCategory: '',
		submittedNewCategory: '',
		category: [],
		name: ''
	}


	componentDidMount(){
		fetch('http://localhost:3001/trivia/category/find-all')
		.then((response) => { return response.json()})
		.then((result) => {
			this.setState({ category: result});
		})
		.catch((e) => { console.log(e); });
	}


	handleDelete(_id){
		request.post('http://localhost:3001/trivia/category/delete',{form: {_id}},(error, response, body) => {
			if (!error){
				console.log(body);
				console.log("Deleted");
				window.location.reload();
			}
		});
	}

	handleEdit(e){
		// const e = {
		// 	oldCategory: this.state.oldCategory,
		// 	newCategory: this.state.newCategory
		// }
		request.post('http://localhost:3001/trivia/category/edit',{form: e},(error, response, body) => {
			if (!error){
				console.log(body);
				console.log(e);
				console.log("Edited");
				// window.location.reload();
			}
		});
	}

	  handleChange = (e, { name, value }) => this.setState({ [name]: value })

	  handleSubmit = () => {
	    const { oldCategory, newCategory } = this.state

	    this.setState({
	      submittedOldCategory: oldCategory,
	      submittedNewCategory: newCategory
	    })

	  }

	render(){
		const { oldCategory, newCategory, submittedOldCategory, submittedNewCategory, name } = this.state
		return(
			<div className='App-main'>
				<h2>Category</h2>

					<Form inverted onSubmit={() => this.handleEdit(this.state)}>
					 <Form.Group widths="equal">
	                <Form.Input label="Category: " placeholder='Old Category' name='oldCategory' value={oldCategory} onChange={this.handleChange} />
	                <Form.Input label="Change to:" placeholder='New Category' name='newCategory' value={newCategory} onChange={this.handleChange} />
					 </Form.Group>
					 <Container textAlign='center'>
					 		<Form.Button inverted color='red' floated='right' content='Update'/>
					 </Container>
	        </Form>
	        <strong>onChange:</strong>
	        <pre>{JSON.stringify({ oldCategory, newCategory }, null, 2)}</pre>
	        <strong>onSubmit:</strong>
	        <pre>{JSON.stringify({ submittedOldCategory, submittedNewCategory }, null, 2)}</pre>

				<ol>
					{
						this.state.category.map((q) => {
							return(
								<li key={q._id}> {q.name}
									<Button floated='right' size='tiny' inverted color='red' type="button" onClick={() => this.handleDelete(q._id)}>Delete</Button>
									<Divider></Divider>
								</li>
							)
						})
					}
				</ol>
			</div>
		)
	}
}

export default ViewCategory;
