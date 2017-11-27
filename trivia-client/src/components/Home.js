import React, { Component } from 'react';
import {
	Form,
	Container
} from "semantic-ui-react";
const request = require('request');

class Home extends Component {

	constructor(props) {
	  super(props);
		this.handleItemClick = this.handleItemClick.bind(this);
	}
  state = {
    category: '',
    count: '',
    submittedCategory: '',
    submittedCount: '',
		questions: []
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { category, count } = this.state

    this.setState({
      submittedCategory: category,
      submittedCount: count
    })

		// const e = {
		// 	category: this.state.category,
	  //   count: this.state.count,
		// }
		// request.post('http://localhost:3001/trivia/questions/game',{form: {"category": this.state.category, "count": this.state.count}},(error, response, body) => {
		// 	if (!error){
		// 		// console.log(body);
		// 		// console.log("Deleted");
		// 		// window.location.reload();
		// 		this.state.questions = body;

		// 		console.log(body);
		// 		console.log(this.state.questions);
		// 	}
		// });
  }

	handleItemClick(e) {
     window.location = '/main-game/' + this.state.category + "/" + this.state.count;
   }
	render(){
    	const { category, count, submittedCategory, submittedCount} = this.state
		return(
	      <div className="App-main">
	        <Form inverted onSubmit={() => this.handleSubmit}>
					 <Form.Group widths="equal">
	                <Form.Input label="Category" placeholder='Category' name='category' value={category} onChange={this.handleChange} />
	                <Form.Input label="Number of Questions" placeholder='Number of Questions' name='count' value={count} onChange={this.handleChange} />
					 </Form.Group>
					 <Container textAlign='center'>
					 	<Form.Button inverted color='red' content='Start Game' size='big' onClick={this.handleItemClick}/>
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
