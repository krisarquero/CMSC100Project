import React, { Component } from 'react';
import {
	Form,
   	Radio,
	Container,
	Header
} from "semantic-ui-react";
import "./Add.css";
const request = require('request');

class AddMCQuestion extends Component {

  state = {
    category: '',
    type: 'MC',
    question: '',
    answer: '',
    difficulty: '',
		choices: [],
		optionA: '',
		optionB: '',
		optionC: '',
		optionD: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

	handleSubmit = (e) => {
		var arrayvar = [];
		arrayvar.push(e.optionA);
		arrayvar.push(e.optionB);
		arrayvar.push(e.optionC);
		arrayvar.push(e.optionD);
		this.setState({ choices: arrayvar })
    request.post('http://localhost:3001/trivia/questions/add',{ form: e },(error, response, body) => { // change the one in request.body.<something> change this
			console.log(e);
			console.log(body);
			console.log("Here");
			window.location.reload();
		});
  }

	render(){
    	const { category, type, question, optionA, optionB, optionC, optionD, answer, difficulty, submittedCategory, submittedType, submittedQuestion, submittedAnswer, submittedDifficulty} = this.state
		return(
	      <div className="App-main">
	      	<Header id="header" as="h1" textAlign="center" size="huge"> Multiple Choice Question </Header>
	      	<Container className="content">
	        <Form inverted onSubmit={() => this.handleSubmit(this.state)}>
	          <Form.Group>

	          	<Form.Field label="Level of Difficulty">
	               {this.state.value}
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
	          <Form.Group>
	          	<Form.Input label="Category" placeholder='Category' name='category' value={category} onChange={this.handleChange} />
	          	<Form.Input label="Type" placeholder='Type' name='type' value="Multiple Choice" disabled/>
	          </Form.Group>
	          <Form.Input label="Question" placeholder='Question' name='question' value={question} onChange={this.handleChange} />
				 <Form.Group widths='equal'>
					 <Form.Input placeholder='Option A' label="option A" name='optionA' value={optionA} onChange={this.handleChange} />
					 <Form.Input placeholder='Option B' label="option B" name='optionB' value={optionB} onChange={this.handleChange} />
					 <Form.Input placeholder='Option C' label="option C" name='optionC' value={optionC} onChange={this.handleChange} />
					 <Form.Input placeholder='Option D' label="option D" name='optionD' value={optionD} onChange={this.handleChange} />
				 </Form.Group>
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

export default AddMCQuestion;
