import React, { Component } from 'react';
import {
		Form,
    Radio
} from "semantic-ui-react";
const request = require('request');

class AddQuestion extends Component {

  state = {
    question: '',
    type: '',
    difficulty: '',
    category: '',
    choices: [],
    answer: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    request.post('http://localhost:3001/trivia/questions/add',{ form: e },(error, response, body) => { // change the one in request.body.<something> change this
			console.log(e);
			console.log(body);
			console.log("Here");
		});
  }

	render(){
    const { category, type, question, answer, difficulty, submittedCategory, submittedType, submittedQuestion, submittedAnswer, submittedDifficulty} = this.state
		return(
      <div className="App-main">
        <Form onSubmit={() => this.handleSubmit(this.state)}>
          <Form.Group>
            <Form.Input placeholder='Category' name='category' value={category} onChange={this.handleChange} />
            <Form.Input placeholder='Type' name='type' value={type} onChange={this.handleChange} />

              <Form.Field>
                Selected value: <b>{this.state.value}</b>
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
          <Form.Input placeholder='Question' name='question' value={question} onChange={this.handleChange} />
          <Form.Input placeholder='Answer' name='answer' value={answer} onChange={this.handleChange} />
          <Form.Button content='Add Question' />
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ category, type, question, answer, difficulty }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedCategory, submittedType, submittedQuestion, submittedAnswer, submittedDifficulty }, null, 2)}</pre>
      </div>
		)
	}
}

export default AddQuestion;
