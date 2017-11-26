import React, { Component } from 'react';
import {
		Form,
    Radio
} from "semantic-ui-react";

class AddQuestion extends Component {

  state = {
    category: '',
    type: '',
    question: '',
    answer: '',
    difficulty: '',
    submittedCategory: '',
    submittedType: '',
    submittedQuestion: '',
    submittedAnswer: '',
    submittedDifficulty: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { category, type, question, answer, difficulty } = this.state

    this.setState({
      submittedCategory: category,
      submittedType: type,
      submittedQuestion: question,
      submittedAnswer: answer,
      submittedDifficulty: difficulty
    })
  }

	render(){
    const { category, type, question, answer, difficulty, submittedCategory, submittedType, submittedQuestion, submittedAnswer, submittedDifficulty} = this.state
		return(
      <div className="App-main">
        <Form onSubmit={this.handleSubmit}>
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
