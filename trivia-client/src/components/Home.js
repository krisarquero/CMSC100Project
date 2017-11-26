import React, { Component } from 'react';
import {
	Form,
	Container
} from "semantic-ui-react";

class Home extends Component {

  state = {
    category: '',
    count: '',
    submittedCategory: '',
    submittedCount: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { category, count } = this.state

    this.setState({
      submittedCategory: category,
      submittedCount: count
    })
  }

	render(){
    	const { category, count, submittedCategory, submittedCount} = this.state
		return(
	      <div className="App-main">
	        <Form onSubmit={this.handleSubmit}>
				 <Container textAlign='center'>
                <Form.Input placeholder='Category' name='category' value={category} onChange={this.handleChange} />
                <Form.Input placeholder='Number of Questions' name='count' value={count} onChange={this.handleChange} />
				 	 <Form.Button inverted color='red' content='Start Quiz' />
				 </Container>
	        </Form>
	        <strong>onChange:</strong>
	        <pre>{JSON.stringify({ category, count }, null, 2)}</pre>
	        <strong>onSubmit:</strong>
	        <pre>{JSON.stringify({ submittedCategory, submittedCount }, null, 2)}</pre>
	      </div>
		)
	}
}

export default Home;
