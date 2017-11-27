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

		request.post('http://localhost:3001/trivia/questions/game',{form: {"category": this.state.category, "count": this.state.count}},(error, response, body) => {
			//console.log(body);
			if (!error){
				//console.log(body.items);
				// console.log("Deleted");
				// window.location.reload();
				//this.setState({ questions: body.trivia_questions.items });
				this.setState({ questions: JSON.parse(body) });

				//console.log(this.state.questions);
			//console.log(this.state.questions);
			}
		});
	}

	render(){


		const { category, count, questions } = this.state;
		console.log(category);
		console.log(count);
		console.log("Type of questions: " +typeof(questions));
		console.log(questions[1]);


		return(

			<div className='App-main'>
				<ol>
					{
						this.state.questions.map((q, _id) => {
							return(
								<li key={q._id}> {q.question}
									<ul>
										<li>{q.choices[0]}</li>
										<li>{q.choices[1]}</li>
										<li>{q.choices[2]}</li>
										<li>{q.choices[3]}</li>
									</ul>
					 			</li>
							)
						})
					}
				</ol>
			</div>
		)
	}
}

export default MainGame;
