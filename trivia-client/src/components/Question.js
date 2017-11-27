import React, { Component } from 'react';
import {
	Form,
  Radio,
	Container,
	Header,
	Divider
} from "semantic-ui-react";
const request = require('request');

class Question extends Component{
	constructor(props){
		super(props);

		this.state = {
			_id: this.props.match.params.questionId,
			question: '',
			difficulty: '',
			type: '',
			category: '',
			answer: '',
			choices: [],
			optionA: '',
			optionB: '',
			optionC: '',
			optionD: '',
		}
	}

	componentDidMount(){
		fetch(`http://localhost:3001/trivia/questions/find-by-id/${this.state._id}`)
		.then((response) => { return response.json() })
		.then((result) => {
			this.setState({
				question: result.question,
				difficulty: result.difficulty,
				type: result.type,
				category: result.category,
				answer: result.answer,
				choices: result.choices
			})
		})
		.catch((e) => {console.log(e) });
	}

	handleChange = (e, { name, value }) => this.setState({ [name]: value })

	handleSubmit(e){
		request.post('http://localhost:3001/trivia/questions/edit',{form: e},(error, response, body) => {
			if (!error){
				console.log(body);
				console.log("Edited");
			}
		});
	}

	render(){
		const{ optionA, optionB, optionC, optionD, question, difficulty, type, category, answer, choices} = this.state;
		return(
			<div className='App-main'>
				Question: {question} <br/>
				Difficulty: {difficulty} <br/>
				Type : {type} <br/>
				Category: {category} <br/>
				Answer: {answer} <br/>
				Choices: {choices} <br/>

				<Divider></Divider>

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
	          	<Form.Input label="New Category" placeholder='New Category' name='category' value={category} onChange={this.handleChange} />
	          	<Form.Input label="New Type" placeholder='New Type' name='type' value={type} onChange={this.handleChange} />
	          </Form.Group>
	          <Form.Input label="New Question" placeholder='New Question' name='question' value={question} onChange={this.handleChange} />
					 Use all options for multiple choice, two options for true or false and one option for identification.
			 <Form.Group widths='equal'>
					 <Form.Input placeholder='Option A' label="Option A" name='optionA' value={optionA} onChange={this.handleChange} />
					 <Form.Input placeholder='Option B' label="Option B" name='optionB' value={optionB} onChange={this.handleChange} />
					 <Form.Input placeholder='Option C' label="Option C" name='optionC' value={optionC} onChange={this.handleChange} />
					 <Form.Input placeholder='Option D' label="Option D" name='optionD' value={optionD} onChange={this.handleChange} />
				 </Form.Group>
	          <Form.Input className="answer" label="New Answer" placeholder='answer'  name='answer' value={answer} onChange={this.handleChange} />
				 <Container textAlign='center'>
				 	<Form.Button inverted color='red' content='Update Question' />
				 </Container>
	        </Form>
	        <strong>onChange:</strong>


	        </Container>
			</div>
		)
	}

}

export default Question;
