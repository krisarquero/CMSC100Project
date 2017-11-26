import React, { Component } from 'react';
import {
	Form,
   	Radio,
	Container,
	Header
} from "semantic-ui-react";
import "./Add.css";

class AddTFQuestion extends Component {

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
	      	<Header id="header" as="h1" textAlign="center" size="huge"> True or False Question </Header>
	      	<Container className="content">
	        <Form inverted onSubmit={this.handleSubmit}>
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
	            	<Form.Input label="Type" placeholder='Type' name='type' value={type} onChange={this.handleChange} />
	          </Form.Group>
	          <Form.Input label="Question" placeholder='Question' name='question' value={question} onChange={this.handleChange} />
             <Form.Field>
               Answer: <b>{this.state.value}</b>
             </Form.Field>
             <Form.Field>
               <Radio
                 name='answer'
                 value='True'
                 onChange={this.handleChange}
               /> True
             </Form.Field>
             <Form.Field>
               <Radio
                 name='answer'
                 value='False'
                 onChange={this.handleChange}
               /> False
             </Form.Field>
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

export default AddTFQuestion;
