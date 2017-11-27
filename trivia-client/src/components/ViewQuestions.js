import React, { Component } from 'react';
const request = require('request');

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
				<h2>Questions</h2>
				<ol>
					{
						this.state.questions.map((q) => {
							return(
								<li key={q._id}> <a href={`/question/${q._id}`}>{q.question}</a> <button type="button" onClick={() => this.handleDelete(q._id)}>Delete</button></li>
							)
						})
					}
				</ol>
			</div>
		)
	}
}

export default ViewQuestions;
