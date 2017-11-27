import React, { Component } from 'react';
import {
	Form,
   	Radio,
	Container,
	Header
} from "semantic-ui-react";
const request = require('request');

class AddNCQuestion extends Component {

  state = {
    category: '',
    type: 'TA',
    question: '',
    answer: '',
    difficulty: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

	handleSubmit = (e) => {
    request.post('http://localhost:3001/trivia/questions/add',{ form: e },(error, response, body) => { // change the one in request.body.<something> change this
			console.log(e);
			console.log(body);
			console.log("Here");
			window.location.reload();
		});
  }

	render(){
    	const { category, type, question, answer, difficulty, submittedCategory, submittedType, submittedQuestion, submittedAnswer, submittedDifficulty} = this.state
		return(
	      <div className="App-main">
	      	<Header id="header" as="h1" textAlign="center" size="huge"> Identification Question </Header>
	      	<Container className="content">
	        <Form inverted onSubmit={() => this.handleSubmit(this.state)}>
	          <Form.Group>
	              <Form.Field>
	                Level of Difficulty: <b>{this.state.value}</b>
	              </Form.Field>
	              <Form.Field>
	                <Radio
	                  name='difficulty'
	                  value='E'
	                  onChange={this.handleChange}
	                /> Easy
	              </Form.Field>
	              <Form.Field>
	                <Radio
	                  name='difficulty'
	                  value='A'
	                  onChange={this.handleChange}
	                /> Average
	              </Form.Field>
	              <Form.Field>
	                <Radio
	                  name='difficulty'
	                  value='D'
	                  onChange={this.handleChange}
	                /> Difficult
	              </Form.Field>

	          </Form.Group>

	          <Form.Group widths="equal">
	          		<Form.Input label="Category" placeholder='Category' name='category' value={category} onChange={this.handleChange} />
	            	<Form.Input label="Type" placeholder='Type' name='type' value="Text Answer" disabled />
	          </Form.Group>



	          <Form.Input placeholder='Question' label="Question" name='question' value={question} onChange={this.handleChange} />
	          <Form.Input className="answer" label="Answer" placeholder='Answer'  name='answer' value={answer} onChange={this.handleChange} />

	          	<Container textAlign='center'>
				 	<Form.Button inverted color='red' content='Add Question' />
				</Container>

	        </Form>
	        <strong>onChange:</strong>
	        <pre>{JSON.stringify({ category, type, question, answer, difficulty }, null, 2)}</pre>
	        <strong>onSubmit:</strong>
	        <pre>{JSON.stringify({ submittedCategory, submittedType, submittedQuestion, submittedAnswer, submittedDifficulty }, null, 2)}</pre>
	        </Container>
	      </div>
		)
	}
}

export default AddNCQuestion;
