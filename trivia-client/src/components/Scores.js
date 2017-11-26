import React, { Component } from 'react';
import {
	Header,
	Container,
	List,
	Table,
	Divider
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
				 <Divider />
				 <Container id="list" textAlign="center">
				 	<List animated verticalAlign size="huge">
					{
						this.state.highscores.map((highscore) => {
							return(
							<List.Item  key={highscore._id}>{highscore.name} - {highscore.score}</List.Item>	
							)
						})
					}
					</List>

				</Container>
				 
			</div>
		)
	}
}

export default Scores;
