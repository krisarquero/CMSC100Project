import React, { Component } from 'react';
import {
	Header,
	Container,
	List
} from 'semantic-ui-react'
import "./Scores.css"

class Scores extends Component {
	constructor(props){
		super(props);

		this.state = {
			highscores: []
		}
	}

	componentDidMount(){
		fetch('http://localhost:3001/score/find-all')
		.then((response) => { return response.json()})
		.then((result) => {
			this.setState({ highscores: result});
		})
		.catch((e) => { console.log(e); });
	}

	render(){
		return(
			<div className="scoreContainer">
				<Header id="header" as='h1' textAlign="center" size="huge">Smartest Tita</Header>
				 
				 <Container>
				 	<ol>
					{
						this.state.highscores.map((highscore) => {
							return(
							<li key={highscore._id}>{highscore.name}</li>	
							)
						})
					}
					</ol>

				 </Container>
			</div>
		)
	}
}

export default Scores;
