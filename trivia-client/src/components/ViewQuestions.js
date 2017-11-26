import React, { Component } from 'react';
const request = require('request');
import {
	Header,
	Container,
	List,
	Button
} from 'semantic-ui-react'


class ViewQuestions extends Component {

	state = {
		questions: []
	}

	componentDidMount(){
		fetch('http://localhost:3001/trivia/questions/find-all')
		.then((response) => { return response.json()})
		.then((result) => {
			this.setState({ questions: result});
		})
		.catch((e) => { console.log(e); });
	}

	handleDelete(_id){
		request.post('http://localhost:3001/trivia/questions/delete',{form: {_id}},(error, response, body) => {
			if (!error){
				console.log(body);
				console.log("Deleted");
				window.location.reload();
			}
		});
	}

	render(){
		return(
			<div className='App-main'>
				<Header id="header" as='h2' textAlign="center" size="huge">Edit Questions</Header>
				<Container>
				<List inverted divided verticalAlign='middle'>
					{ 
						this.state.questions.map((q) => {
							return(
								<List.Item key={q._id}><a href={'#'}>{q.question}</a>  <Button inverted color="red" floated="right" onClick={() => this.handleDelete(q._id)}>Delete</Button></List.Item>
							)
						})
					}
				</List>
				</Container>
			</div>
		)
	}
}

export default ViewQuestions;
