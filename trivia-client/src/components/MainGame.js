import React, { Component } from 'react';
import {

} from 'semantic-ui-react';
const request = require('request');

class MainGame extends Component {

	constructor (props){
			super(props);

			this.state = {
				category: this.props.match.params.category,
				count: this.props.match.params.count,
				questions: []
			};

	}


	componentDidMount(){
		// fetch('http://localhost:3001/trivia/questions/find-all')
		// .then((response) => { return response.json()})
		// .then((result) => {
		// 	this.setState({ questions: result});
		// })
		// .catch((e) => { console.log(e); });

		request.post('http://localhost:3001/trivia/questions/game',{form: {"category": this.state.category, "count": this.state.count}},(error, response, body) => {
			//console.log(body);
			if (!error){
			 	console.log(body);
				console.log(typeof(body));
				// console.log("Deleted");
				// window.location.reload();
				this.setState({ questions: body.trivia_questions.items });
				console.log(body[0]);
				console.log(this.state.questions);
			}
		});
	}

	render(){
		return(

			<div className='App-main'>
				<ol>
					{
						this.state.questions.map((q, _id) => {
							return(
								<li key={q._id}> <a href={`/question/${q._id}`}>{q.question}</a> </li>
							)
						})
					}
				</ol>
			</div>
		)
	}
}

export default MainGame;
