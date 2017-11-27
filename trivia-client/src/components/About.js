import React, { Component } from 'react';
import {
	Header,
	Image,
	Container,
	Divider,
	List
} from 'semantic-ui-react';
import "./About.css";
// import elektra from '../images/elektra.jpg';
// import kris from '../images/kris.jpg';
// import lei from '../images/lei.jpg';



class About extends Component {
	render(){
		return(
			<div className="aboutContainer">
				 <Header id="header" as='h1' textAlign="center" size="huge">About</Header>


				 <Container id="abt" textAlign="center">
				 	<p>Unleash the smart tita in you! This fun trivia game is specially made for all the titas out there.
				 	It will test your "TITA" level and if how smart are you as a tita. This trivia game is inspired by the game
				 	"Are you smarter than a 5th grader" with a twist of tita lifestyle. </p>
				 </Container>

				 	 <Divider horizontal inverted>developed By the Comsci Titas of UPLB</Divider>
				 	 <Container textAlign="center">

				 	


				 </Container>
			</div>
		)
	}
}

export default About;
