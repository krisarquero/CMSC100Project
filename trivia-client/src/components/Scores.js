import React, { Component } from 'react';
import {
	Header,
	Container
} from 'semantic-ui-react'
import "./Scores.css"

class Scores extends Component {
	render(){
		return(
			<div className="scoreContainer">
				<Header id="header" as='h1' textAlign="center" size="huge">Smartest Tita</Header>
				 
				 <Container>
				 	<p>orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultr</p>

				 </Container>
			</div>
		)
	}
}

export default Scores;
