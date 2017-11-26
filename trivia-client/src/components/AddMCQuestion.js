import React, { Component } from 'react';
import {
	Form,
   Radio,
	Container
} from "semantic-ui-react";

class AddMCQuestion extends Component {

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
    	const { category, type, question, optionA, optionB, optionC, optionD, answer, difficulty, submittedCategory, submittedType, submittedQuestion, submittedAnswer, submittedDifficulty} = this.state
		return(
	      <div className="App-main">

	        <Form onSubmit={this.handleSubmit}>
	          <Form.Group>
	            <Form.Input placeholder='Category' name='category' value={category} onChange={this.handleChange} />
	            <Form.Input placeholder='Type' name='type' value={type} onChange={this.handleChange} />

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
	          <Form.Input placeholder='Question' name='question' value={question} onChange={this.handleChange} />
				 <Form.Group widths='equal'>
					 <Form.Input placeholder='Option A' name='optionA' value={optionA} onChange={this.handleChange} />
					 <Form.Input placeholder='Option B' name='optionB' value={optionB} onChange={this.handleChange} />
					 <Form.Input placeholder='Option C' name='optionC' value={optionC} onChange={this.handleChange} />
					 <Form.Input placeholder='Option D' name='optionD' value={optionD} onChange={this.handleChange} />
				 </Form.Group>
	          <Form.Input placeholder='Answer' name='answer' value={answer} onChange={this.handleChange} />
				 <Container textAlign='center'>
				 	<Form.Button inverted color='red' content='Add Question' />
				 </Container>

	        </Form>
	        <strong>onChange:</strong>
	        <pre>{JSON.stringify({ category, type, question, answer, difficulty }, null, 2)}</pre>
	        <strong>onSubmit:</strong>
	        <pre>{JSON.stringify({ submittedCategory, submittedType, submittedQuestion, submittedAnswer, submittedDifficulty }, null, 2)}</pre>
	      </div>
		)
	}
}

export default AddMCQuestion;
